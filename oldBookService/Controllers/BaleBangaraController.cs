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
    public class BaleBangaraController : ApiController
    {
        private DJMServiceContext db = new DJMServiceContext();

        // GET: /UserProfiles
        [Route("BaleBangara/{id}")]
        [HttpGet]
        
        public IEnumerable<BaleBangaraDatas> GetBaleBangaraDetails(Guid id)
        {
            return db.BhaleBangaraDetails.Where(x => x.SchemeId == id);
        }

        [Route("BaleBangara/{userid}")]
        [HttpGet]

        public IEnumerable<BaleBangaraDatas> GetBaleBangaraUserDetails(Guid id)
        {
            return db.BhaleBangaraDetails.Where(x => x.SchemeId == id);
        }


    }
}
