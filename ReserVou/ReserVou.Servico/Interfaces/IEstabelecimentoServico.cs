using ReserVou.Dominio.Entities;
using ReserVou.Dominio.Enums;

namespace ReserVou.Servico.Interfaces
{
    public interface IEstabelecimentoServico
    {
        void Adicionar(string nome, string endereco, TipoEstabelecimento tipo);
        List<Estabelecimento> ObterTodos();
        /*
        Estabelecimento ObterPorId(int id);
        
        void AtualizarEstabelecimento(Estabelecimento estabelecimento);
        void RemoverEstabelecimento(int id);
        */
    }
}
