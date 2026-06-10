using ReserVou.Dominio.Entities;
using ReserVou.Dominio.Enums;
using ReserVou.Repositorio.Interfaces;
using ReserVou.Servico.Interfaces;

namespace ReserVou.Servico.Services
{
    public class UsuarioServico : IUsuarioServico
    {
        private readonly IUsuarioRepositorio _usuarios;

        public UsuarioServico(IUsuarioRepositorio usuario)
        {
            _usuarios = usuario;
        }

        public void Adicionar(string nome, TipoUsuario tipo)
        {
            var usuario = new Usuario(nome, tipo);
            _usuarios.Adicionar(usuario);
        }

        public List<Usuario> ObterTodos() => _usuarios.ObterTodos();
    }
}
