using Microsoft.AspNetCore.Mvc;
using Loja_API.Data;
using Loja_API.models;

namespace Loja_API.Controllers
{
    [Route("/api/[controller]/[action]")]
    [ApiController]
    public class TapeteController : ControllerBase
    {
        private LojaContext _context;

        public TapeteController(LojaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Tapete>> GetAll()
        {
            return _context.Tapete.ToList();
        }

        [ActionName("TapeteId")]
        [HttpGet("{TapeteId}")]
        public ActionResult<List<Tapete>> GetId(int TapeteId)
        {
            if (_context.Tapete is not null)
            {
                var result = _context.Tapete.Find(TapeteId);
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

        [ActionName("TapeteNome")]
        [HttpGet("{TapeteNome}")]
        public ActionResult<List<Tapete>> GetTapeteNome(string TapeteNome)
        {

            if (_context.Tapete is not null)
            {
                var result = _context.Tapete.Where(a => a.nome == TapeteNome);
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
        public async Task<ActionResult> post(Tapete model)
        {
            if (_context.Tapete is not null)
            {
                _context.Tapete.Add(model);
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Created($"/api/Tapete/TapeteId/{model.nome}", model);
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
        [HttpDelete("{TapeteId}")]
        public async Task<ActionResult> delete(int TapeteId)
        {
            try
            {
                var Tapete = await _context.Tapete.FindAsync(TapeteId);
                if (Tapete == null)
                {
                    return NotFound();
                }

                _context.Remove(Tapete);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPut("{TapeteId}")]
        public async Task<IActionResult> put(int TapeteId, Tapete alteraDados)
        {
            try
            {
                var result = await _context.Tapete.FindAsync(TapeteId);
                if (result is not null)
                {

                    if (TapeteId != result.id)
                    {
                        return BadRequest();
                    }
                    result.nome = alteraDados.nome;
                    result.preco = alteraDados.preco;
                    result.descricao = alteraDados.descricao;
                    await _context.SaveChangesAsync();
                }

                return Created($"/api/Tapete/{alteraDados.nome}/{alteraDados.descricao}", alteraDados);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,
                "Falha no acesso ao banco de dados.");
            }
        }

    }
}