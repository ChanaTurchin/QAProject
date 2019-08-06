using BL;
using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("answer")]
    public class AnswerController : ApiController
    {
        [Route("addAnswer")]
        [HttpPost]
        public IHttpActionResult AddAnswer(AnswerDTO answer)
        {
            try
            {
                //if (AnswerManger.IsExist(answer.Answer_userId))
                //    return BadRequest("this answer been alredy");
                AnswerManger.AddAnswer(answer);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("system error" + e);
            }
        }
    }
}
