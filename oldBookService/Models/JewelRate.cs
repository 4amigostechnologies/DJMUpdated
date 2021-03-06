﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DJMServices.Models
{
    public class JewelRate
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public string units { get; set; }

        [Required]
        public int Status { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

    }
}