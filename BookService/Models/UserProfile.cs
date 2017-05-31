using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DJMServices.Models
{
    public class UserProfile
    {
        public int id { get; set; }

        [Required]
        public string EmailId { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public bool Status { get; set; }

        public bool ActivationStatus { get; set; }

        public string UserType { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Gender { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string PostalCode { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public DateTime DOB { get; set; }

        public string PhoneNo { get; set; }

        public string AlternativeNo { get; set; }

        public bool MaritalStatus { get; set; }

        public string SpouceName { get; set; }

        public DateTime SpouceDOB { get; set; }

        public DateTime MarriageDate { get; set; }

        public string PaybackPoints { get; set; }

        public string ProfileImageURL { get; set; }

        public DateTime CreatedDate { get; set; }

        public string Nominee { get; set; }

        public DateTime LastLogin { get; set; }
    }
}