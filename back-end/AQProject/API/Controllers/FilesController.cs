using Helpers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("files")]
    public class FilesController : ApiController
    {
        [HttpPost]
        [Route("upload")]
        public IHttpActionResult Upload()
        {
            try
            {
                HttpPostedFile file = HttpContext.Current.Request.Files["file"];
                string fileName = $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";
                string imagePath = IO.GetImagePath(fileName);
                file.SaveAs(imagePath);
                return Ok(fileName);
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        //[HttpGet]
        //[Route("images/null")]
        //public IHttpActionResult aaa()
        //{
        //    return Ok("I am here");
        //}
    }
}
