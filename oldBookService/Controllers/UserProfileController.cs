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
using System.Data.SqlClient;

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

        [HttpGet]
        [Route("UserProfiles/{PhoneNumber}")]
        public IList<UserProfile> GetUserDetails(string PhoneNumber)
        {
            List<UserProfile> test = db.Database.SqlQuery<UserProfile>(" exec dbo.[USP_GetUserDetails] @PhoneNumber", new SqlParameter("@UserID", PhoneNumber)).ToList();

            return test;
        }

        //[HttpPost]
        //[Route("UserProfiles")]
        //public IList<UserProfile> CreateNewUser(string FirstName, string LastName, string Gender, string EmailID, string PhoneNo, string Password, string Address, 
        //    string City, string PostalCode, DateTime DOB, string MaritalStatus, string ProfileImageURL)
        //{
        //    List<UserProfile> test = db.Database.SqlQuery<UserProfile>(" exec dbo.[USP_UserRegistration] @FirstName, @LastName, @Gender, @EmailID, @PhoneNo, @Password, @Address, @City, @PostalCode, @DOB, @MaritalStatus, @ProfileImageURL", 
        //        new SqlParameter("@FirstName", FirstName),
        //        new SqlParameter("@LastName", LastName),
        //        new SqlParameter("@Gender", Gender),
        //        new SqlParameter("@EmailID", EmailID),
        //        new SqlParameter("@PhoneNo", PhoneNo),
        //        new SqlParameter("@Password", Password),
        //        new SqlParameter("@Address", Address),
        //        new SqlParameter("@City", City),
        //        new SqlParameter("@PostalCode", PostalCode),
        //        new SqlParameter("@DOB", DOB),
        //        new SqlParameter("@MaritalStatus", MaritalStatus),
        //        new SqlParameter("@ProfileImageURL", ProfileImageURL)).ToList();

        //    return test;
        //}

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
