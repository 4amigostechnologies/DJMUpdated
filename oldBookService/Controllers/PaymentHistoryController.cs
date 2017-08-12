using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using Amigos.Data.WebAPI.Models;
using DJMServices.Models;
using System.Data.SqlClient;

namespace Amigos.Data.WebAPI.Controllers
{
    public class PaymentHistoryController : ApiController
    {
        private DJMServiceContext db = new DJMServiceContext();

        [HttpGet]
        [Route("PaymentHistory/{UserId}")]
        public IList<PaymentHistory> GetPaymentHistoryForAUser(int UserId)
        {
            List<PaymentHistory> test = db.Database.SqlQuery<PaymentHistory>(" exec dbo.[USP_PaymentHistory] @UserID", new SqlParameter("@UserID", UserId)).ToList();

            return test;
        }
    }
}
