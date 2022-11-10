using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

using Loja_API.Data;
using Loja_API.models;

namespace Loja_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly LojaContext? _context;

        public HomeController(IConfiguration configuration, LojaContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        [Route("login")]
        public  ActionResult<dynamic> Login(Usuario usuario)
        {
           if(_context is not null && _context.Usuario is not null)
           {

           var user = _context.Usuario.Where(u => u.username == usuario.username
           && u.senha == usuario.senha).FirstOrDefault(); 
           if(user == null)
                return Unauthorized("Usuário ou senha inválidos");
           var authClaims = new List<Claim> {
                new Claim(ClaimTypes.Name, user.username),
                new Claim(ClaimTypes.Role, user.role),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var token = GetToken(authClaims);
            user.senha = "";


            return Ok(new {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                user = user
            });
           } 
           else
           {
            return "Null";
           }
        }

        [HttpGet]
        [Route("anonimo")]
        [AllowAnonymous]
        public string Anonymous() => "Anônimo";

        [HttpGet]
        [Route("autenticado")]
        [Authorize]

        public string Authenticated()
        {
            if(User is not null && User.Identity is not null)
            {
                return String.Format("Autenticado - {0}", User.Identity.Name);
            }
            
            return "Null";
        }
        
        [HttpGet]
        [Route("funcionario")]
        [Authorize(Roles = "funcionario,gerente")]
        public string Funcionario()
        {
            if(User is not null && User.Identity is not null)
            {
                return String.Format("Funcionario - {0}", User.Identity.Name);
            }
            
            return "Null";
        }

        [HttpGet]
        [Route("gerente")]
        [Authorize(Roles = "gerente")]
        public string Gerente() 
        {
            if(User is not null && User.Identity is not null)
            {
                return String.Format("Gerente - {0}", User.Identity.Name);
            }
            
            return "Null";
        }
        
        private JwtSecurityToken GetToken(List<Claim> authClaims)
        {
            var authSigningKey = new

            SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
            expires: DateTime.Now.AddHours(3),
            issuer: _configuration["JWT:ValidIssuer"],
            audience: _configuration["JWT:ValidAudience"],
            claims: authClaims,
            signingCredentials: new 
        SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)

            );
            return token;
        }
    }
}



