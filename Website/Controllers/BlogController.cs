using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet("{name}")]
        public async Task<ActionResult<Blog>> GetBlog(string name)
        {
            var blog = await _context.Posts.FindAsync(name);

            if (blog == null)
            {
                return NotFound();
            }

            return blog;
        }

        [AuthorizeFromKey]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlog(string id, Blog blog)
        {
            if (id != blog.Title)
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
            _context.Posts.Add(blog);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (BlogExists(blog.Title))
                {
                    return Conflict();
                }
            }

            return CreatedAtAction("GetBlog", new { id = blog.Title }, blog);
        }

        [HttpDelete("{id}")]
        [AuthorizeFromKey]
        public async Task<IActionResult> DeleteBlog(string id)
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

        private bool BlogExists(string id)
        {
            return _context.Posts.Any(e => e.Title == id);
        }
    }
}
