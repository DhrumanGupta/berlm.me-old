using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Website.Models
{
    public class Blog
    {
        [Key]
        [Required]
        public string Title { get; set; }
        
        [RegularExpression(@"^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")]
        public string ImageUrl { get; set; }

        [Required]
        public string Content { get; set; }

        public List<string> Tags { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }
    }
}