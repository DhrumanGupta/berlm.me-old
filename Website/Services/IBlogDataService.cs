using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Website.Models;

namespace Website.Services
{
    public interface IBlogDataService
    {
        Task<ActionResult<List<BlogDataDTO>>> GetBlogsDataAsync();

        Task<ActionResult<BlogDataDTO>> GetBlogDataAsync(string title);

        Task<ActionResult<Blog>> GetBlogPostAsync(string title);

        // Task<IActionResult> PutBlogPostAsync(Guid id, BlogDTO dto);
        //
        // Task<ActionResult<BlogDTO>> PostBlogPostAsync(BlogDTO dto);
        //
        // Task<ActionResult<BlogDTO>> DeleteBlogPostAsync(Guid id);
    }
}