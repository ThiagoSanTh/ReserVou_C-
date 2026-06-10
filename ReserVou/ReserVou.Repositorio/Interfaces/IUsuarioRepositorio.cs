using ReserVou.Dominio.Entities;

namespace ReserVou.Repositorio.Interfaces
{
    public interface IUsuarioRepositorio
    {
        void Adicionar(Usuario usuario);
        List<Usuario> ObterTodos();
    }
}
