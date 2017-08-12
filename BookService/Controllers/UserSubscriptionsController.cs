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
        [Route("SchemeSubscriptions/{userid}")]
        public IList<UserSchemeSubscriptions> GetUserSchemes(int UserID)
        {
            List<UserSchemeSubscriptions> test = db.Database.SqlQuery<UserSchemeSubscriptions>("exec dbo.[usp_GetUserSchemes] @UserId", new SqlParameter("@UserID", UserID)).ToList();

            return test;
        }

        [HttpGet]
        [Route("SchemeSubscriptions/CardNumbers/{BatchCode}/{SchemeID}")]
        public IList<CardNumbers> GetUserCardNumbers(string BatchCode, Guid SchemeId)
        {
            List<CardNumbers> test = db.Database.SqlQuery<CardNumbers>("exec dbo.[USP_GetUserCards] @BatchCode, @SchemeId", new SqlParameter("@BatchCode", BatchCode), new SqlParameter("@SchemeId", SchemeId)).ToList();

            return test;
        }

        [HttpGet]
        [Route("SchemeSubscriptions/{UserId}/{SchemeID}/{CardCode}")]
        public IList<UserSchemeSubscriptionInfo> GetSubscriptions(int UserId, Guid SchemeID, string CardCode)
        {
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("usp_GetUserSchemes").ToList();
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("USP_GetDueDetailsOfAUser").ToList();
            List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>(" exec dbo.[USP_GetUserCardData] @UserID, @SchemeID, @CardCode", new SqlParameter("@UserID", UserId), new SqlParameter("@SchemeID", SchemeID), new SqlParameter("@CardCode", CardCode)).ToList();
            //UserSchemeSubscriptionInfo test = new UserSchemeSubscriptionInfo { DueDate = DateTime.Now, DueAmount = 100, CardNo = "100", CardLuckyName = "cardName", SubscriptionId = new Guid("1BD85539-203F-4318-A898-9AFD2621D451") } ;

            return test;
        }

        [HttpGet]
        [Route("SchemeSubscriptions/GetUserCards/{UserId}")]
        public IList<UserCardsSchemeData> GetCardCountForUserSchemes(int UserId)
        {
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("usp_GetUserSchemes").ToList();
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("USP_GetDueDetailsOfAUser").ToList();
            List<UserCardsSchemeData> test = db.Database.SqlQuery<UserCardsSchemeData>(" exec dbo.[USP_GetCardCountForUserSchemes] @UserID", new SqlParameter("@UserID", UserId)).ToList();
            //UserSchemeSubscriptionInfo test = new UserSchemeSubscriptionInfo { DueDate = DateTime.Now, DueAmount = 100, CardNo = "100", CardLuckyName = "cardName", SubscriptionId = new Guid("1BD85539-203F-4318-A898-9AFD2621D451") } ;

            return test;
        }

        [HttpGet]
        [Route("SchemeScubscriptions/PaymentReminders/{UserId}")]
        public IList<UserPaymentReminders> GetUserPaymentReminder(int UserId)
        {
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("usp_GetUserSchemes").ToList();
            //List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>("USP_GetDueDetailsOfAUser").ToList();
            List<UserPaymentReminders> test = db.Database.SqlQuery<UserPaymentReminders>(" exec dbo.[USP_UserPaymentReminder] @UserID", new SqlParameter("@UserID", UserId)).ToList();
            //UserSchemeSubscriptionInfo test = new UserSchemeSubscriptionInfo { DueDate = DateTime.Now, DueAmount = 100, CardNo = "100", CardLuckyName = "cardName", SubscriptionId = new Guid("1BD85539-203F-4318-A898-9AFD2621D451") } ;

            return test;
        }

        [HttpPost]
        [Route("SchemeScubscriptions/NewUserSubscription")]
        public IList<UserSchemeSubscriptionInfo> CreateNewUserSubscription(int UserID, Guid SchemeID, int CardNo, string CardName, decimal DefinedAmount, string BatchCode)
        {
            List<UserSchemeSubscriptionInfo> test = db.Database.SqlQuery<UserSchemeSubscriptionInfo>(" exec dbo.[USP_NewUserSchemeSubscription] @UserId, @SchemeId, @CardNo, @CardName, @DefinedAmount, @BatchCode",
                new SqlParameter("@UserId", UserID),
                new SqlParameter("@SchemeId", SchemeID),
                new SqlParameter("@CardNo", CardNo),
                new SqlParameter("@CardName", CardName),
                new SqlParameter("@DefinedAmount", DefinedAmount),
                new SqlParameter("@BatchCode", BatchCode)).ToList();

            return test;
        }

    }
}
