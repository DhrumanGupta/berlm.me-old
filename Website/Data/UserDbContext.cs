using Website.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Website.Data
{
    public class UserDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public UserDbContext(
            DbContextOptions<UserDbContext> options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
    }
}