using ReserVou.Dominio;

namespace ReserVou.Servico
{
    public interface IEstabelecimentoServico
    {
        void Adicionar(string nome, string endereco);
        List<Estabelecimento> ObterTodos();
        /*
        Estabelecimento ObterPorId(int id);
        
        void AtualizarEstabelecimento(Estabelecimento estabelecimento);
        void RemoverEstabelecimento(int id);
        */
    }
}
