using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Amigos.Data.WebAPI.Models
{
    public class SchemeDetail
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string TagLine { get; set; }

        [Required]
        public string Description { get; set; }

        public string ImageURL1 { get; set; }

        public string ImageURL2 { get; set; }

        public string ImageURL3 { get; set; }

        public bool Status { get; set; }

        public string Note { get; set; }

        public DateTime CreatedDate { get; set; }

        //[Required]
        //public string icon { get; set; }

        
    }
}