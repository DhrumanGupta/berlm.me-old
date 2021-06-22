using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace Website
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseUrls("http://localhost:5000", "http://odin:5000", "http://192.168.1.17:5000");
                    webBuilder.UseStartup<Startup>();
                });
    }
}