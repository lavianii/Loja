using Microsoft.EntityFrameworkCore;
using Loja_API.models;

namespace Loja_API.Data
{
    public class LojaContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public LojaContext(IConfiguration configuration)
        {
          Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with connection string from app settings
            options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"));
        }
        public DbSet<Funcionario> Funcionario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Tapete> Tapete {get;set;}

    }
}