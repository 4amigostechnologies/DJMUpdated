using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DJMServices.Models
{
    public class DJMServiceContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public DJMServiceContext() : base("name=DJMServiceContext")
        {
            this.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
        }

        public System.Data.Entity.DbSet<DJMServices.Models.Author> Authors { get; set; }

        public System.Data.Entity.DbSet<DJMServices.Models.JewelRate> JewelRates { get; set; }

        public System.Data.Entity.DbSet<DJMServices.Models.Book> Books { get; set; }

        public System.Data.Entity.DbSet<DJMServices.Models.UserProfile> UserProfiles { get; set; }

        public System.Data.Entity.DbSet<DJMServices.Models.BaleBangaraDatas> BhaleBangaraDetails { get; set; }

    }
}
