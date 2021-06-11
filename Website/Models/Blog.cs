using System;
using System.Collections.Generic;

namespace Website.Models
{
    public class Blog
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public List<string> Tags { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}