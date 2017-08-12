using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Models
{
    public class Scheme
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string icon { get; set; }

        [Required]
        public string Description { get; set; }
    }
}