using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DJMServices.Models
{
    public class UserPayments
    {
        // public int Id { get; set; }

        public int UserID { get; set; }

        public Guid SchemeID { get; set; }

        public int LoginID { get; set; }

        public decimal Amount { get; set; }

        public decimal DefinedAmount { get; set; }

        public int CardNo { get; set; }

        public string BatchCode { get; set; }

        public string PaymentMode { get; set; }
    }
}