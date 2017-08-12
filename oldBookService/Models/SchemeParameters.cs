using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Models
{
    public class SchemeParameter
    {

        [Required]
        public Guid SchemeId { get; set; }

        [Required]
        public string BatchCode { get; set; }

        [Required]
        public int Term { get; set; }

        [Required]
        public string SchemeCode { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Name { get; set;}

        [Required]
        public int MaxCards { get; set; }

        [Required]
        public decimal InstallmentAmount { get; set; }

        [Required]
        public Boolean Status { get; set; }

        public string icon { get; set; }


    }

    public class SchemeData
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string SchemeCode { get; set; }

        [Required]
        public int Term { get; set; }

        public string icon { get; set; }
    }
}