using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Website.Models
{
    public class BlogTag
    {
        [Key]
        public string Title { get; set; }
        
        public IList<Blog> Blogs { get; set; }
    }
}