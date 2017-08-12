using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DJMServices.Models
{
    public class BaleBangaraDatas
    {
        [Key]
        public Guid SchemeId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string PhoneNo { get; set; }
            
        [Required]
        public string SchemeName { get; set; }

        public string SchemeDescription { get; set; }

        public string CardName { get; set; }

        public string CardNo { get; set; }

        public int AmountPaid{ get; set; }

        public int BatchId { get; set; }

        public string BatchName { get; set; }

        public int BatchMonths { get; set; }

        public DateTime BatchStartDate { get; set; }

        public DateTime BatchEndDate { get; set; }

        public int BatchMaxCards { get; set; }

        
    }
}