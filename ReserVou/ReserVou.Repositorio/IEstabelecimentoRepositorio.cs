using ReserVou.Dominio;

namespace ReserVou.Repositorio
{
    public interface IEstabelecimentoRepositorio
    {
        void Adicionar(Estabelecimento estabelecimento);
        List<Estabelecimento> ObterTodos();
        /*
        Estabelecimento ObterPorId(int id);
        
        void Atualizar(Estabelecimento estabelecimento);
        void Remover(int id);
        */
    }
}
