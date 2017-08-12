using DJMServices.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using System.Data;
using System.Data.SqlClient;

namespace DJMServices.Controllers
{
    
    public class JewelRatesController : ApiController
    {

        private DJMServiceContext db = new DJMServiceContext();

        // GET: /JewelRates
        [Route("JewelRates")]
        [HttpGet]
        public IQueryable<JewelRate> GetJewelRates()
        {
            return db.JewelRates;
        }

        // GET: /JewelRates
        [Route("JewelRates/Sort")]
        [HttpGet]
        public IQueryable<JewelRate> GetJewelRatesDateDesc()
        {
            return db.JewelRates.Where(x => x.Amount > 0).OrderByDescending(t => t.CreatedDate).Take(5);
        }

        // GET: /DetailsByDate
        [HttpGet]
        [Route("JewelRates/DetailsByDate/status/{status}/date/{date}")]
        public IQueryable<JewelRate> GetDetailsByDate(int status,DateTime date)
        {
            var rates = db.JewelRates.Where(x => x.Status == status && DateTime.Compare(x.CreatedDate, date) > 0);
            return rates;
        }

        ///JewelRates/id
        [HttpPut]
        [Route("JewelRates/{id}")]
        public async Task<IHttpActionResult> PutRate([FromUri]Guid id, [FromBody]JewelRate rate)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rate.Id)
            {
                return BadRequest();
            }

            db.Entry(rate).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }


        // POST: JewelRates
        [HttpPost]
        [Route("JewelRates")]
        public async Task<IHttpActionResult> PostRates(JewelRate rate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            rate.Id = Guid.NewGuid();
            db.JewelRates.Add(rate);
            await db.SaveChangesAsync();
            return Ok();
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("JewelRates/{id}")]
        public async Task<IHttpActionResult> DeleteBook(Guid id)
        {
            JewelRate rate = await db.JewelRates.FindAsync(id);
            if (rate == null)
            {
                return NotFound();
            }

            db.JewelRates.Remove(rate);
            await db.SaveChangesAsync();

            return Ok(rate);
        }

        private bool RateExists(Guid id)
        {
            return db.JewelRates.Count(e => e.Id == id) > 0;
        }
    }
}
