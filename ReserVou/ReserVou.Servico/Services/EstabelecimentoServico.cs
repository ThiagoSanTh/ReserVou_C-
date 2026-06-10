using ReserVou.Dominio.Entities;
using ReserVou.Dominio.Enums;
using ReserVou.Repositorio.Interfaces;
using ReserVou.Servico.Interfaces;

namespace ReserVou.Servico.Services
{
    public class EstabelecimentoServico : IEstabelecimentoServico
    {
        private readonly IEstabelecimentoRepositorio _estabelecimentos;

        public EstabelecimentoServico(IEstabelecimentoRepositorio estabelecimento)
        {
            _estabelecimentos = estabelecimento;
        }

        public void Adicionar(string nome, string endereco, TipoEstabelecimento tipo)
        {
            var estabelecimento = new Estabelecimento(nome, endereco, tipo);
            _estabelecimentos.Adicionar(estabelecimento);
        }

        public List<Estabelecimento> ObterTodos() => _estabelecimentos.ObterTodos();

        /*
         public Estabelecimento ObterPorId(int id_estabelecimento) => _repositorio.ObterPorId(id_estabelecimento);
        
        public void AtualizarEstabelecimento(Estabelecimento estabelecimento) => _repositorio.Atualizar(estabelecimento);

        public void RemoverEstabelecimento(int id_estabelecimento) => _repositorio.Remover(id_estabelecimento);
        */
    }
}