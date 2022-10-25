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
        public  ActionResult<dynamic> Login(UsuarioLoja user)
        {
            if (user.username != user.username)
            {
                return BadRequest("User not found.");
            }

            if (user.senha != user.senha)
            {
                return BadRequest("Wrong password.");
            }

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

        [HttpGet]
        [Route("anonymous")]
        [AllowAnonymous]
        public string Anonymous() => "Anônimo";

        [HttpGet]
        [Route("authenticated")]
        [Authorize]
        public string Authenticated() => String.Format("Autenticado - {0}", User.Identity.Name);
        
        [HttpGet]
        [Route("funcionario")]
        [Authorize(Roles = "funcionario,gerente")]
        public string Funcionario() => "Funcionario";

        [HttpGet]
        [Route("Gerente")]
        [Authorize(Roles = "Gerente")]
        public string Gerente() => "Gerente";
        
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



