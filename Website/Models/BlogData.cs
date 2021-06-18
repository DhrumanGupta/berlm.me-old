using System;
using System.Collections.Generic;

namespace Website.Models
{
    public class BlogData
    {
        public string Title { get; set; }

        public string ImageUrl { get; set; }
        
        public IList<BlogTag> Tags { get; set; }

        public DateTime CreatedAt { get; set; }

        public static BlogData FromBlog(Blog blog)
        {
            return new()
            {
                Title = blog.Title,
                ImageUrl = blog.ImageUrl,
                Tags = blog.Tags,
                CreatedAt = blog.CreatedAt
            };
        }
    }
}