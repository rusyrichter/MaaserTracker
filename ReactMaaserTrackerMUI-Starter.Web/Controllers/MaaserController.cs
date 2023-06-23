using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactMaaserTrackerMUI_Starter.Data;

namespace ReactMaaserTrackerMUI_Starter.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaaserController : ControllerBase
    {
        private string _connectionString;

        public MaaserController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost]
        [Route("addIncome")]
        public void AddIncome(Income income)
        {
            var repo = new MaaserRepository(_connectionString);
            repo.AddIncome(income);
        }
        [HttpGet]
        [Route("getIncomes")]
        public List<Income> GetIncomes()
        {
            var repo = new MaaserRepository(_connectionString);
            return repo.GetIncomes();
        }
        [HttpGet]
        [Route("getSources")]
        public List<Object> GetSources()
        {
            var repo = new MaaserRepository(_connectionString);
            return repo.GetSources();
        }
        [HttpPost]
        [Route("addMaaser")]
        public void AddMaaser(Maaser maaser)
        {
            var repo = new MaaserRepository(_connectionString);
            repo.AddMaaser(maaser);
        }
        [HttpGet]
        [Route("getMaaser")]
        public List<Maaser> GetMaaser()
        {
            var repo = new MaaserRepository(_connectionString);
            return repo.GetMaaser();
        }
        [HttpPost]
        [Route("deleteSource")]
        public void DeleteSource(Source source)
        {
            var repo = new MaaserRepository(_connectionString);
            repo.Delete(source);
        }
        [HttpPost]
        [Route("addSource")]
        public void AddSource(Source source)
        {
            var repo = new MaaserRepository(_connectionString);
            repo.AddSource(source);
        }
        [HttpPost]
        [Route("editSource")]
        public void EditSource(Source source)
        {
            var repo = new MaaserRepository(_connectionString);
            repo.EditSource(source);
        }
        [HttpGet]
        [Route("getTotalIncomeandMaaser")]
        public Object GetTotalIncomeandMaaser()
        {
            var repo = new MaaserRepository(_connectionString);
            Object totalAmounts = repo.GetTotalIncomeandMaaser();
            return totalAmounts;
        }
        [HttpGet]
        [Route("getSourcedIncomes")]
        public List<Source> GetSourcedIncomes()
        {
            var repo = new MaaserRepository(_connectionString);
            return repo.GetSourcedIncomes();
        }
    }
}
