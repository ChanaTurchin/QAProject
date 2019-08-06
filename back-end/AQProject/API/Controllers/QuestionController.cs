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
    [RoutePrefix("question")]
    public class QuestionController : ApiController
    {
        [Route("addQuestion")]
        [HttpPost]
        public IHttpActionResult AddQuestion(QuestionDTO question)
        {
            try
            {
                //if (BL.QuestionManager.IsExist(question.Question_userId, question.QuestionTitle))
                //    return BadRequest("this question been already");
                QuestionManager.AddQuestion(question);
                return Ok();
            }
             catch (Exception e)
            {
                return BadRequest("system error"+e);
            }
        }
        [Route("addRequirement")]
        [HttpPost]
        public IHttpActionResult AddRequirement(Newtonsoft.Json.Linq.JObject data)
        {
            try
            {
                QuestionDTO question = data["question"].ToObject<QuestionDTO>();
                UserDTO user = data["user"].ToObject<UserDTO>();
                QuestionManager.AddRequirement(question, user);
                return Ok();

            }
            catch(Exception e)
            {
                return BadRequest("system error" + e);
            }
        }


    }
}
