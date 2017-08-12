using DJMServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Amigos.Data.WebAPI.Controllers
{
    public class AuthController : ApiController
    {
        // POST: UserProfiles
        [HttpPost]
        [Route("UserProfiles")]
        public async Task<IHttpActionResult> SigninUser(UserProfile profile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //profile.id = Guid.NewGuid();
            return Ok();
        }

    }
}
