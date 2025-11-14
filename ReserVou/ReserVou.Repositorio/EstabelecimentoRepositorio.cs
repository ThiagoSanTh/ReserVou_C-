using ReserVou.Dominio;

namespace ReserVou.Repositorio
{
    public class EstabelecimentoRepositorio : IEstabelecimentoRepositorio
    {
        private readonly List<Estabelecimento> _estabelecimentos = new();
        private int _proximoId = 1;

        private readonly EstabelecimentoDBContext _context;
        public EstabelecimentoRepositorio(EstabelecimentoDBContext context)
        {
            _context = context;
        }
        public void Adicionar(Estabelecimento estabelecimento)
        {
            _context.Estabelecimentos.Add(estabelecimento);
            _context.SaveChanges();
        }
        /*public void Adicionar(Estabelecimento estabelecimento)
        {
            estabelecimento.Id= _proximoId++;
            _estabelecimentos.Add(estabelecimento);
        }*/
        public List<Estabelecimento> ObterTodos()
        {
            return _context.Estabelecimentos.ToList();
        }
        //public List<Estabelecimento> ObterTodos() => _estabelecimentos;
        /*
        public Estabelecimento ObterPorId(int id) => _estabelecimentos.FirstOrDefault(a => a.Id == id);
        
        public void Atualizar(Estabelecimento estabelecimento)
        {
            var existente = ObterPorId(estabelecimento.Id);
            if (existente != null)
            {
                existente.Nome = estabelecimento.Nome;
                existente.Endereco = estabelecimento.Endereco;
            }
        }

        public void Remover(int id)
        {
            var estabelecimento = ObterPorId(id);
            if (estabelecimento != null) _estabelecimentos.Remove(estabelecimento);
        }*/
    }
}
