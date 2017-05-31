namespace DJMServices.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Authors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Title = c.String(nullable: false),
                        Year = c.Int(nullable: false),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Genre = c.String(),
                        AuthorId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Authors", t => t.AuthorId, cascadeDelete: true)
                .Index(t => t.AuthorId);

            CreateTable(
               "dbo.JewelRates",
               c => new
               {
                   Id = c.Guid(nullable: false),
                   Name = c.String(nullable: false),
                   units = c.String(nullable: false),
                   Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                   CreatedDate = c.DateTime(nullable: false),
                   Status = c.Int(nullable: false),
               })
               .PrimaryKey(t => t.Id);

            CreateTable(
               "dbo.UserProfile",
               c => new
               {
                   Id = c.Int(nullable: false),
                   EmailId = c.String(nullable: false),
                   Password = c.String(nullable: false),
                   Status = c.Boolean(nullable: true),
                   ActivationStatus = c.Boolean(nullable: true),
                   UserType = c.String(nullable: true),
                   FirstName = c.String(nullable: true),
                   LastName = c.String(nullable: true),
                   Gender = c.String(nullable: true),
                   Address = c.String(nullable: true),
                   City = c.String(nullable: true),
                   PostalCode = c.String(nullable: true),
                   State = c.String(nullable: true),
                   Country = c.String(nullable: true),
                   DOB = c.DateTime(nullable: true),
                   PhoneNo = c.String(nullable: true),
                   AlternativeNo = c.String(nullable: true),
                   MaritalStatus = c.Boolean(nullable: true),
                   SpouceName = c.String(nullable: true),
                   SpouceDOB = c.DateTime(nullable: true),
                   MarriageDate = c.DateTime(nullable: true),
                   PaybackPoints = c.String(nullable: true),
                   ProfileImageURL = c.String(nullable: true),
                   createddate = c.DateTime(nullable: true),
                   Nominee = c.String(nullable: true),
                   LastLogin = c.DateTime(nullable: true),
               })
               .PrimaryKey(t => t.Id);
               
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Books", "AuthorId", "dbo.Authors");
            DropIndex("dbo.Books", new[] { "AuthorId" });
            DropTable("dbo.Books");
            DropTable("dbo.Authors");
            //DropTable("dbo.JewelRates");
        }
    }
}
