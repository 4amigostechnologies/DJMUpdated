using Amigos.Data.WebAPI.Models;
using DJMServices.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Amigos.Data.WebAPI.Controllers
{
    public class UserSubscriptionsController : ApiController
    {
        private DJMServiceContext db = new DJMServiceContext();

        [HttpGet]
        [Route("SchemeSubscriptions")]
        public IList<UserSchemeSubscriptions> GetUserSchemes()
        {
            List<UserSchemeSubscriptions> test = db.Database.SqlQuery<UserSchemeSubscriptions>("usp_GetUserSchemes").ToList();

            return test;
        }

        [HttpGet]
        [Route("SchemeSubscriptions/{subscriptionId}/{UserId}")]
        public IList< UserSchemeSubscriptionInfo> GetSubscriptions(Guid subscriptionId, int UserId)
        {
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("usp_GetUserSchemes").ToList();
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("USP_GetDueDetailsOfAUser").ToList();
            List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>(" exec dbo.[USP_GetDueDetailsOfAUser] @Id,@UserID", new SqlParameter("@Id", subscriptionId), new SqlParameter("@UserID", UserId)).ToList();
            //UserSchemeSubscriptionInfo test = new UserSchemeSubscriptionInfo { DueDate = DateTime.Now, DueAmount = 100, CardNo = "100", CardLuckyName = "cardName", SubscriptionId = new Guid("1BD85539-203F-4318-A898-9AFD2621D451") } ;

            return test;
        }

    }
}
