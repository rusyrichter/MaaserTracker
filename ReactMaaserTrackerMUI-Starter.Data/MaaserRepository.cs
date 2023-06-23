using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ReactMaaserTrackerMUI_Starter.Data
{
    public class MaaserRepository
    {
        public string _connectionString { get; set; }

        public MaaserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddIncome(Income income)
        {
            var context = new DataContext(_connectionString);
            context.Incomes.Add(income);
            context.SaveChanges();
        }
        public List<Income> GetIncomes()
        {
            var context = new DataContext(_connectionString);
            return context.Incomes.Include(i => i.Source).ToList();
        }

        public List<Source> GetSourcedIncomes()
        {
            var context = new DataContext(_connectionString);
            return context.Sources.
                Include(i => i.IncomePayments).ToList();
        }
        public List<Object> GetSources()
        {
            var context = new DataContext(_connectionString);
            var sources = context.Sources.Select(i => new { i.Id, i.Name }).ToList();
            var uniqueSources = new List<object>(); 
            foreach(var source in sources)
            {
                if (!uniqueSources.Contains(source.Id))
                {
                    uniqueSources.Add(source);
                }
            }
           
            return uniqueSources;
        }
        public void AddMaaser(Maaser maaser)
        {
            var context = new DataContext(_connectionString);
            context.Maaser.Add(maaser);
            context.SaveChanges();
        }
        public List<Maaser> GetMaaser()
        {
            var context = new DataContext(_connectionString);
            return context.Maaser.ToList();
        }
        public void Delete(Source source)
        {
            var context = new DataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated(@$"delete from Sources Where Id = {source.Id}");
            context.SaveChanges();
        }
        public void AddSource(Source source)
        {
            var context = new DataContext(_connectionString);
            context.Sources.Add(source);
            context.SaveChanges();
        }
        public void EditSource(Source source)
        {
            var context = new DataContext(_connectionString);
            var sourceToEdit = context.Sources.FirstOrDefault(s => s.Id == source.Id);
            sourceToEdit.Name = source.Name;
            context.SaveChanges();
        }
        public Object GetTotalIncomeandMaaser()
        {
            var context = new DataContext(_connectionString);
            decimal totalIncomeAmount = context.Incomes.Sum(i => i.Amount);
            decimal totalMaaserAmount = context.Maaser.Sum(i => i.Amount);
            var totals = new
            {
                TotalIncome = totalIncomeAmount,
                TotalMaaser = totalMaaserAmount
            };
            return totals;
        }
    }
}
