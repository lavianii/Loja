using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Loja_API.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeControler : ControllerBase
    {
        [HttpGet]
        public ActionResult Inicio()
        {
            return new ContentResult
            {
                ContentType = "text/html",
                Content = "<h1>Projeto Loja: FUNCIONOU</h1>"
            };
        }
    }
}