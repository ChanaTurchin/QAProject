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
                if (BL.UserManager.IsExist(user.UserName,user.Password))
                    return BadRequest("user is registered already ");
                BL.UserManager.Register(user);
                return Ok();
            }
            catch(Exception e)
            {
                return BadRequest("system error");
            }
            
        }
        [HttpPost]
        [Route("login")]
        public IHttpActionResult Login(UserDTO user)
        { 
            try
            {
                if (BL.UserManager.IsExist(user.UserName, user.Password))
                    return Ok();

                return BadRequest("user not registered");
            }
            catch (Exception e)
            {
                return BadRequest("system error");
            }
        }
    }

}