using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("search")]
    public class SearchController : ApiController
    {
        [Route("search")]
        [HttpGet]
        public IHttpActionResult search(string searchText)
        {
            try
            {
                List<QuestionDTO> questions = SearchManager.Search(searchText);
                return Ok(questions);
            }
            catch (Exception e)
            {
                return BadRequest("system error " + e);
            }
        }
    }
}
