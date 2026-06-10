using Microsoft.EntityFrameworkCore;
using ReserVou.Dominio.Entities;

namespace ReserVou.Repositorio.DBContexts
{
    public class EstabelecimentoDBContext : DbContext
    {
        public EstabelecimentoDBContext(DbContextOptions<EstabelecimentoDBContext> options)
        : base(options)
        {
        }

        // DbSet = tabela de estabelecimentos
        public DbSet<Estabelecimento> Estabelecimentos { get; set; }
    }
    public class UsuarioDBContext : DbContext
    {
        public UsuarioDBContext(DbContextOptions<UsuarioDBContext> options)
        : base(options)
        {
        }

        // DbSet = tabela de usuarios
        public DbSet<Usuario> Usuarios { get; set; }
    }
}