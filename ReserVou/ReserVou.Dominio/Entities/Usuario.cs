using ReserVou.Dominio.Enums;

namespace ReserVou.Dominio.Entities
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public TipoUsuario Tipo { get; set; }

        public Usuario(string nome, TipoUsuario tipo)
        {
            Nome = nome;
            Tipo = tipo;
        }
    }
}
