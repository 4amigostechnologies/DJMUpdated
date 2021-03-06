﻿using Amigos.Data.WebAPI.Models;
using System;
using System.Collections.Generic;
using DJMServices.Models;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;

namespace Amigos.Data.WebAPI.Controllers
{
    public class SchemesController : ApiController
    {

        private DJMServiceContext db = new DJMServiceContext();

        public SchemesController()
        {

        }
        // GET: /JewelRates
        [Route("schemes")]
        [HttpGet]
        public IEnumerable<Scheme> GetJewelRates()
        {
            return GetSchemes();
        }
        private static IEnumerable<Scheme> GetSchemes()
        {
            return new List<Scheme> {
                new Scheme{ Id= new Guid("49217f4e-31f0-47c3-b638-fafad8aabd27"),Name="Bhale Bangara", icon="bb_button.jpg", Description=""},
                new Scheme{ Id= new Guid("e588df68-fba8-4052-9859-bee28a7bf512"),Name="Lucky Lakshmi",icon="ll_button.jpg", Description=""},
                new Scheme{ Id= new Guid("acfcdcd7-2b35-4848-bee1-c81866b7fb59"),Name="Kanaka Dhara",icon="kd_button.jpg",Description=""},
                new Scheme{ Id= new Guid("9e828c7b-bb20-4f88-852b-4517dc4c324d"),Name="Gold Piggy Bank", icon="gp_button.jpg", Description=""}
            };
        }

        // GET: /JewelRates
        [Route("schemes/{id}")]
        [HttpGet]
        public IList<SchemeParameter> GetSchemeDetails(Guid id)
        {
            //return GetSchemes().Where(x => x.Id == id).First();
            List<SchemeParameter> test = db.Database.SqlQuery<SchemeParameter>(" exec dbo.USP_GetSchemeDetails @SchemeId", new SqlParameter("@SchemeId", id)).ToList();

            return test;
        }

        [HttpGet]
        [Route("schemes/Parameters/{SchemeId}")]
        public IList<SchemeParameter> GetUserDetails(Guid SchemeId)
        {
            List<SchemeParameter> test = db.Database.SqlQuery<SchemeParameter>(" exec dbo.USP_GetSchemeDetails @SchemeId", new SqlParameter("@SchemeId", SchemeId)).ToList();

            return test;
        }

        [HttpGet]
        [Route("schemesdata")]
        public IList<SchemeData> GetSchemeData()
        {
            List<SchemeData> test = db.Database.SqlQuery<SchemeData>(" exec dbo.USP_GetSchemeData").ToList();

            return test;
        }

        //// GET: /schemes/1/Parameters
        //[Route("schemes/{id}/Parameters")]
        //[HttpGet]
        //public List<SchemeParameter> GetSchemeParameters(Guid id)
        //{
        //    return new List<SchemeParameter> {
        //        new SchemeParameter{ SchemeId=id, ParameterName="Period", Value="12 Months", status=true},
        //        new SchemeParameter{ SchemeId=id, ParameterName="Total Membership", Value="10", status=true},
        //        new SchemeParameter{ SchemeId=id, ParameterName="USP", Value="Paid 12 months get 13 months ", status=true},
        //        new SchemeParameter{ SchemeId=id, ParameterName="No of Batches", Value="10", status=true},
        //        new SchemeParameter{ SchemeId=id, ParameterName="Types", Value="Type 1 and Type2", status=true}
        //    };

        //}

    }
}
