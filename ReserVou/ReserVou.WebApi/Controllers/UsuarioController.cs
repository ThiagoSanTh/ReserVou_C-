using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReserVou.Dominio.Entities;
using ReserVou.Servico.Interfaces;

namespace ReserVou.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioServico _usuarioServico;

        public UsuarioController(IUsuarioServico servico)
        {
            _usuarioServico = servico;
        }

        [HttpPost]
        public IActionResult Post(Usuario usuario)
        {
            _usuarioServico.Adicionar(usuario.Nome, usuario.Tipo);
            return Ok(new { mensagem = "Usuario cadastrado!" });
        }

        [HttpGet]
        public IActionResult Get() => Ok(_usuarioServico.ObterTodos());
    }
}
