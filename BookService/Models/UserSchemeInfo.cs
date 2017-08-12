using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Models
{
    public class UserSchemeSubscriptionInfo
    {
        //public int CardNumber { get; set; }

        //public string CardName { get; set; }

        //public string Name { get; set; }

        //public string CardCode { get; set; }

        //public decimal LastPaidAmount { get; set; }

        //public DateTime LastPaidDate { get; set; }

        //public string BatchCode { get; set; }

        //public decimal MonthlyInstallment { get; set; }

        public int UserID { get; set; }
        public Guid SchemeID { get; set; }
        public int CardNumber { get; set; }
        public string CardName { get; set; }
        public decimal MonthlyInstallment { get; set; }
        public string BatchCode { get; set; }

    }
}