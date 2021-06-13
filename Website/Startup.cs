using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Website.Data;
using Website.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Website
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // var connectionString = Configuration.GetConnectionString("MySql");
            services.AddDbContext<UserDbContext>(
                builder => builder
                    .UseSqlite(Configuration.GetConnectionString("cache"))
            );

            services.AddDatabaseDeveloperPageExceptionFilter();

            services.AddDefaultIdentity<ApplicationUser>(config =>
                {
                    config.Password.RequireDigit = true;
                    config.Password.RequiredLength = 6;
                    config.Password.RequireLowercase = true;
                    config.Password.RequireUppercase = true;
                    config.User.RequireUniqueEmail = true;
                })
                .AddEntityFrameworkStores<UserDbContext>()
                .AddDefaultTokenProviders();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, UserDbContext>();

            services.AddAuthentication()
                .AddIdentityServerJwt();


            services.AddDbContext<BlogDbContext>(
                builder => builder
                    .UseSqlite(Configuration.GetConnectionString("cache"))
            );

            // .UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
            // .EnableDetailedErrors()
            // .EnableSensitiveDataLogging()

            // services.AddStackExchangeRedisCache(options =>
            // {
            //     options.Configuration = Configuration.GetConnectionString("Redis");
            //     options.InstanceName = "berlm.me_";
            // });

            services.AddSingleton(Configuration);

            services.AddControllers().AddNewtonsoftJson();
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/build"; });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseMigrationsEndPoint();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer("start");
                }
            });
        }
    }
}