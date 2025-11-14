using ReserVou.Dominio;
using ReserVou.Repositorio;

namespace ReserVou.Servico
{
    public class EstabelecimentoServico : IEstabelecimentoServico
    {
        private readonly IEstabelecimentoRepositorio _estabelecimentos;

        public EstabelecimentoServico(IEstabelecimentoRepositorio estabelecimento)
        {
            _estabelecimentos = estabelecimento;
        }

        public void Adicionar(string nome, string endereco)
        {
            var estabelecimento = new Estabelecimento(nome, endereco);
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