using Microsoft.EntityFrameworkCore;
using ReserVou.Dominio;

namespace ReserVou.Repositorio
{
    public class EstabelecimentoDBContext : DbContext
    {
        public EstabelecimentoDBContext(DbContextOptions<EstabelecimentoDBContext> options)
        : base(options)
        {
        }

        // DbSet = tabela de estudantes
        public DbSet<Estabelecimento> Estabelecimentos { get; set; }
    }
}