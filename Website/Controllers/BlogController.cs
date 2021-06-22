using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using Website.Attributes;
using Website.Data;
using Website.Models;

namespace Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly BlogDbContext _context;

        public BlogController(BlogDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public ActionResult<Blog> GetBlog([FromQuery] int n = 1, [FromQuery] string category = null)
        {
            if (string.IsNullOrWhiteSpace(category))
            {
                var blog = _context.Posts.Find(n);
                if (blog == null)
                {
                    return NotFound();
                }

                return Ok(blog);
            }

            try
            {
                return Ok(_context.Posts.First(x =>
                    string.Equals(x.Category, category, StringComparison.CurrentCultureIgnoreCase)
                    && x.Id == n
                ));
            }
            catch (InvalidOperationException)
            {
                return NotFound();
            }
        }

        [HttpGet("{title}")]
        public ActionResult<Blog> GetBlog(string title)
        {
            var blog = _context.Posts.ToList().FirstOrDefault(x => x.Title == title);

            if (blog == null)
            {
                return NotFound();
            }

            return blog;
        }

        [AuthorizeFromKey]
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutBlog(int id, Blog blog)
        {
            if (id != blog.Id)
            {
                return BadRequest();
            }

            _context.Entry(blog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        [AuthorizeFromKey]
        public async Task<ActionResult<Blog>> PostBlog(Blog blog)
        {
            blog.CreatedAt = DateTime.UtcNow;
            _context.Posts.Add(blog);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (BlogExists(blog.Id))
                {
                    return Conflict();
                }
            }

            return CreatedAtAction("GetBlog", new { n = blog.Id }, blog);
        }

        [HttpDelete("{id:int}")]
        [AuthorizeFromKey]
        public async Task<IActionResult> DeleteBlog(int id)
        {
            var blog = await _context.Posts.FindAsync(id);
            if (blog == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(blog);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogExists(int id)
        {
            return _context.Posts.Any(e => e.Id == id);
        }
    }
}
