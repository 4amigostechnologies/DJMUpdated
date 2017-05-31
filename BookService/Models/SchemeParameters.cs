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
        public string ParameterName { get; set; }

        public string Value { get; set; }

        [Required]
        public bool status { get; set; }




    }
}