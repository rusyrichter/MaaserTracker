
using Microsoft.EntityFrameworkCore;
namespace ReactMaaserTrackerMUI_Starter.Data
{
    public class DataContext : DbContext
    {
        private string _connectionString;

        public DataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Income> Incomes { get; set; }
        public DbSet<Maaser> Maaser { get; set; }
        public DbSet<Source> Sources { get; set; }

    }
}