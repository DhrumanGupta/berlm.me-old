using System.Collections.Generic;

namespace Website.Models
{
    public class BlogTag
    {
        public string Name { get; set; }
        public List<BlogPost> Posts { get; set; } 
    }
}