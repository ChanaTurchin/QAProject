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
    [RoutePrefix("categories")]
    public class CategoryController : ApiController
    {
        [HttpGet]
        [Route("getAllCategories")]
     public IHttpActionResult GetAllCategories()
        {
            try
            {
                List<CategoryDTO> categories=CategoryManager.GetAllCategories();
                return Ok(categories);
            }
            catch (Exception e)
            {
                return BadRequest("system error: " + e);
            }
           
        }
    }
}
