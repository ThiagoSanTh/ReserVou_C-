using ReserVou.Dominio.Entities;
using ReserVou.Dominio.Enums;

namespace ReserVou.Servico.Interfaces
{
    public interface IUsuarioServico
    {
        void Adicionar(string nome, TipoUsuario tipo);
        List<Usuario> ObterTodos();
    }
}
