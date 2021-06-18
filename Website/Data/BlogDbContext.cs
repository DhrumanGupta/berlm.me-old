using Microsoft.EntityFrameworkCore;
using Website.Models;

namespace Website.Data
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options) : 
            base(options)
        {
        }

        public DbSet<Blog> Posts { get; set; }
        public DbSet<BlogTag> Tags { get; set; }
    }
}