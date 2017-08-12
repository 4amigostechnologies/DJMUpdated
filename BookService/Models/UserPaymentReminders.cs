using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Controllers
{
    public class UserPaymentReminders
    {

        public DateTime NextDueDate { get; set; }
        public int CardNo { get; set; }
        public string SchemeName { get; set; }
        public string BatchId { get; set; }

    }
}