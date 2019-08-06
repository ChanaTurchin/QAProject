using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [RoutePrefix("user")]
    public class UserController : ApiController
    {
        [HttpPost]
        [Route("register")]
        public IHttpActionResult Register(UserDTO user)
        {
            try
            {
                User u = BL.UserManager.IsExist(user.UserName, user.Password);
                if (u !=null)
                    return BadRequest("user is registered already ");
                BL.UserManager.Register(user);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("system error");
            }

        }


        [HttpPost]
        [Route("login")]
        public IHttpActionResult Login(Newtonsoft.Json.Linq.JObject data)
        { 
            try
            {
                string userName = data["userName"].ToObject<string>();
                string userPassword = data["userPassword"].ToObject<string>();
                User user = BL.UserManager.IsExist(userName, userPassword);
                if (user == null)
                    return BadRequest();
                UserDTO userDTO = Converter.Convert(user);
                return Ok(userDTO);
            }
            catch (Exception e)
            {
                return BadRequest("system error!");
            }
        }
    }

}