using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReserVou.Dominio;
using ReserVou.Servico;

namespace ReserVou.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstabelecimentoController : ControllerBase
    {
        private readonly IEstabelecimentoServico _estabelecimentoServico;

        public EstabelecimentoController(IEstabelecimentoServico servico)
        {
            _estabelecimentoServico = servico;
        }

        [HttpPost]
        public IActionResult Post(Estabelecimento estabelecimento)
        {
            _estabelecimentoServico.Adicionar(estabelecimento.Nome, estabelecimento.Endereco);
            return Ok(new {mensagem = "Estabelecimento cadastrado!" } );
        }

        [HttpGet]
        public IActionResult Get() => Ok(_estabelecimentoServico.ObterTodos());

        /*
        [HttpGet]
        public IActionResult ObterTodos() => Ok(_estabelecimentoServico.ObterTodos());

        [HttpPost]
        public IActionResult Adicionar([FromBody] Estabelecimento estabelecimento)
        {
            _estabelecimentoServico.Adicionar(estabelecimento.Nome, estabelecimento.Endereco);
            return Ok(estabelecimento);
        }
        */
        /*[HttpPost]
        public IActionResult Adicionar([FromBody] Estabelecimento estabelecimento)
        {
            _estabelecimentoServico.Adicionar(estabelecimento.Nome, estabelecimento.Endereco);
            return Ok(new { mensagem = "Estabelecimento adicionado com sucesso" });
        }

        [HttpGet]
        public IActionResult ObterTodos() => Ok(_estabelecimentoServico.ObterTodos());
        */
        /*
        [HttpGet("{id_estabelecimento}")]
        public IActionResult Obter(int id_estabelecimento)
        {
            var estabelecimento = _estabelecimentoServico.ObterPorId(id_estabelecimento);
            if (estabelecimento == null) return NotFound();
            return Ok(estabelecimento);
        }

        [HttpPut("{id_estabelecimento}")]
        public IActionResult Atualizar(int id_estabelecimento, [FromBody] Estabelecimento estabelecimento)
        {
            estabelecimento.Id_Estabelecimento = id_estabelecimento;
            _estabelecimentoServico.AtualizarEstabelecimento(estabelecimento);
            return Ok(new { mensagem = "Estabelecimento alterado com sucesso" });
        }

        [HttpDelete("{id_estabelecimento}")]
        public IActionResult Remover(int id_estabelecimento)
        {
            _estabelecimentoServico.RemoverEstabelecimento(id_estabelecimento);
            return NoContent();
        }*/
    }
}
