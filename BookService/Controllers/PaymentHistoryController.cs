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

        [HttpPost]
        [Route("UserPayments/{UserId}/{SchemeID}/{LoginID}/{Amount}/{DefinedAmount}/{CardNo}/{BatchCode}/{PaymentMode}")]
        public IList<UserPayments> CreateUserPayments(int UserId, Guid SchemeID, int LoginID, decimal Amount, decimal DefinedAmount, int CardNo, string BatchCode, string PaymentMode)
        {
            List<UserPayments> test = db.Database.SqlQuery<UserPayments>(" exec dbo.[USP_CreatePayments] @UserID, @SchemeID, @LoginID, @Amount, @DefinedAmount, @CardNo, @BatchCode, @PaymentMode",
                new SqlParameter("@UserID", UserId),
                new SqlParameter("@SchemeID", SchemeID),
                new SqlParameter("@LoginID", LoginID),
                new SqlParameter("@Amount", Amount),
                new SqlParameter("@DefinedAmount", DefinedAmount),
                new SqlParameter("@CardNo", CardNo),
                new SqlParameter("@BatchCode", BatchCode),
                new SqlParameter("@PaymentMode", PaymentMode)).ToList();

            return test;
        }
    }
}
