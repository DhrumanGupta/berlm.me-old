using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Website.Models;

namespace Website.Services
{
    public interface IAsyncPostService
    {
        Task<ActionResult<List<BlogPost>>> GetBlogPostsAsync();

        Task<ActionResult<BlogPost>> GetBlogPostAsync(Guid id);

        Task<IActionResult> PutBlogPostAsync(Guid id, BlogPost post);

        Task<ActionResult<BlogPost>> PostBlogPostAsync(BlogPost post);

        Task<ActionResult<BlogPost>> DeleteBlogPostAsync(Guid id);
    }
}