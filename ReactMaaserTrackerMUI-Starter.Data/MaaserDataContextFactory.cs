using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using ReactMaaserTrackerMUI_Starter.Data;

namespace ReactMaaserTrackerMUI_Starter.Data
{
    public class MaaserDataContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactMaaserTrackerMUI-Starter.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new DataContext(config.GetConnectionString("ConStr"));
        }
       
    }
}           