using ReserVou.Dominio.Entities;
using ReserVou.Repositorio.DBContexts;
using ReserVou.Repositorio.Interfaces;

namespace ReserVou.Repositorio.Repositories
{
    public class UsuarioRepositorio : IUsuarioRepositorio
    {
        private readonly List<Usuario> _usuarios = new();
        private int _proximoId = 1;

        private readonly UsuarioDBContext _context;
        public UsuarioRepositorio(UsuarioDBContext context)
        {
            _context = context;
        }
        public void Adicionar(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
        }
        public List<Usuario> ObterTodos()
        {
            return _context.Usuarios.ToList();
        }
    }
}
