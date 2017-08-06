using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Models
{
    public class PaymentHistory
    {
        public int UserId { get; set; }

        public string TransactionNumber { get; set; }

        public string PaymentDate { get; set; }

        public int PaymentId { get; set; }

        public string Name { get; set; }

        public int CardNo { get; set; }

        public string Month { get; set; }

        public string PaymentMode { get; set; }

        public decimal Amount { get; set; }

    }
}