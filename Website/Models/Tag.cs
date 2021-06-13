using System.Collections.Generic;

namespace Website.Models
{
    public class Tag
    {
        public string Name { get; set; }
        public List<BlogPost> Posts { get; set; } 
    }
}