using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DJMServices
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.EnableCors();
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();


            // catch-all default route for anything not already set
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/template/v1/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional },
                constraints: null
            );
        }
    }
}
