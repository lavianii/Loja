using Microsoft.AspNetCore.Mvc;
using Loja_API.Data;
using Loja_API.models;

namespace Loja_API.Controllers
{
    [Route("/api/[controller]/[action]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        private LojaContext _context;

        public FuncionarioController(LojaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Funcionario>> GetAll()
        {
            if (_context is not null && _context.Funcionario is not null)
            {
                return _context.Funcionario.ToList();
            }
            else
            {
                return NotFound();
            }
        }

        [ActionName("FuncionarioId")]
        [HttpGet("{FuncionarioId}")]
        public ActionResult<List<Funcionario>> GetId(int FuncionarioId)
        {
            if (_context.Funcionario is not null)
            {
                var result = _context.Funcionario.Find(FuncionarioId);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            else
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                "Falha no acesso ao banco de dados.");

            }
        }

        [ActionName("FuncionarioNome")]
        [HttpGet("{FuncionarioNome}")]
        public ActionResult<List<Funcionario>> GetFuncionarioNome(string FuncionarioNome)
        {

            if (_context.Funcionario is not null)
            {
                var result = _context.Funcionario.Where(a => a.nome == FuncionarioNome);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            else
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,

                "Falha no acesso ao banco de dados.");

            }

        }

        [HttpPost]
        public async Task<ActionResult> post(Funcionario model)
        {
            if (_context.Funcionario is not null)
            {
                _context.Funcionario.Add(model);
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/Funcionario/FuncionarioId/{model.nome}", model);
                }
                else
                {
                    return this.StatusCode(StatusCodes.Status500InternalServerError,

                    "Falha no acesso ao banco de dados.");

                }
            }
            else
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,

                "Falha no acesso ao banco de dados.");

            }
        }
        [HttpDelete("{FuncionarioId}")]
        public async Task<ActionResult> delete(int FuncionarioId)
        {
            try
            {
                if (_context is not null && _context.Funcionario is not null){
                    var funcionario = await _context.Funcionario.FindAsync(FuncionarioId);
                    if (funcionario == null)
                    {
                        return NotFound();
                    }
                    _context.Remove(funcionario);
                    await _context.SaveChangesAsync();
                    
                    return NoContent();
                }
                else
                {
                    return NotFound();
                }
               
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPut("{FuncionarioId}")]
        public async Task<IActionResult> put(int FuncionarioId, Funcionario alteraDados)
        {
            try
            {
                if (_context is not null && _context.Funcionario is not null)
                {
                    var result = await _context.Funcionario.FindAsync(FuncionarioId);
                if (result is not null)
                {

                    if (FuncionarioId != result.id)
                    {
                        return BadRequest();
                    }

                    result.cargo = alteraDados.cargo;
                    await _context.SaveChangesAsync();
                }

                    return Created($"/api/funcionario/{alteraDados.cargo}", alteraDados);
                }
                else
                {
                    return BadRequest();
                }
                
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                "Falha no acesso ao banco de dados.");
            }
        }

    }
}