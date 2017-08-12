using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Models
{
    public class UserSchemeSubscriptions
    {
        public Guid SchemeId { get; set; }

        public int UserID { get; set; }

        public string UserName { get; set; }

        public string MobileNumber { get; set; }

        public string SchemeName { get; set; }

        public string SchemeDescription { get; set; }

        public string CardCode { get; set; }

        public string CardName { get; set; }

        public int CardNo { get; set; }

        public decimal Amount { get; set; }

        public string BatchCode { get; set; }

        public int BatchMonths { get; set; }

        public DateTime BatchStartDate { get; set; }

        public DateTime BatchEndDate { get; set; }

        public int BatchMaxCards { get; set; }

    }
}