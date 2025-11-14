using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReserVou.Dominio
{
    public class Estabelecimento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }

        public Estabelecimento(string nome, string endereco)
        {
            Nome = nome;
            Endereco = endereco;
        }
    }
}
