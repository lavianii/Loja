namespace Loja_API.models
{
    public class UsuarioLoja
    {
        public int Id { get; set; }
        public string username { get; set; } = string.Empty;
        public string senha { get; set; } = string.Empty;
        public string role { get; set; } = string.Empty;
    }
}