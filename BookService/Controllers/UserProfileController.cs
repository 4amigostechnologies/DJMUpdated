using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DJMServices.Models;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace Amigos.Data.WebAPI.Controllers
{
    public class UserProfileController : ApiController
    {
        private DJMServiceContext db = new DJMServiceContext();

        // GET: /UserProfiles
        [Route("UserProfiles")]
        [HttpGet]
        public IQueryable<UserProfile> GetUserProfile()
        {
            return db.UserProfiles;
        }

        // GET: /UserProfiles
        [Route("UserProfiles/GetUserProfileOfAUser")]
        [HttpGet]
        public IQueryable<UserProfile> GetUserProfile(string strUserName, string strPassword)
        {
            return db.UserProfiles.Where(x => x.PhoneNo == strUserName && x.Password == strPassword);
        }

        // GET: /GetUserProfileById
        [HttpGet]
        [Route("UserProfiles/GetUserProfileById/Id/{id}")]
        public IQueryable<UserProfile> GetUserById(int id)
        {
            var user = db.UserProfiles.Where(x => x.id == id);
            return user;
        }

        ///UserProfiles/id
        [HttpPut]
        [Route("UserProfiles/{id}")]
        public async Task<IHttpActionResult> PutUser([FromUri]int id, [FromBody]UserProfile userprofile)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userprofile.id)
            {
                return BadRequest();
            }

            db.Entry(userprofile).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }


        // POST: UserProfiles
        [HttpPost]
        [Route("UserProfiles")]
        public async Task<IHttpActionResult> PostUser(UserProfile profile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //profile.id = Guid.NewGuid();
            db.UserProfiles.Add(profile);
            await db.SaveChangesAsync();
            return Ok();
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("UserProfiles/{id}")]
        public async Task<IHttpActionResult> DeleteUsere(int id)
        {
            UserProfile user = await db.UserProfiles.FindAsync(id);
            if (id == 0)
            {
                return NotFound();
            }

            db.UserProfiles.Remove(user);
            await db.SaveChangesAsync();

            return Ok(user);
        }

        private bool UserExists(int id)
        {
            return db.UserProfiles.Count(e => e.id == id) > 0;
        }
    }
}
