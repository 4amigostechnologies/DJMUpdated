using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Models
{
    public class UserSchemeSubscriptions
    {
        public Guid SubscriptionId { get; set; }

        public string SchemeMemberCode { get; set; }

        public Guid SchemeId { get; set; }

        public int BatchId { get; set; }

        public string CardNo { get; set; }

        public string SchemeName { get; set; }

        public double DueAmount { get; set; }

        public DateTime DueDate { get; set; }
    }
}