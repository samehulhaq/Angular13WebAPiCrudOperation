using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiCrud.Models;
using EntityState = System.Data.Entity.EntityState;

namespace WebApiCrud.Controllers
{
    public class Emp_tbController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Emp_tb
        public IQueryable<Emp_tb> GetEmp_tb()
        {
            return db.Emp_tb;
        }

        // GET: api/Emp_tb/5
        [ResponseType(typeof(Emp_tb))]
        public IHttpActionResult GetEmp_tb(int id)
        {
            Emp_tb emp_tb = db.Emp_tb.Find(id);
            if (emp_tb == null)
            {
                return NotFound();
            }

            return Ok(emp_tb);
        }

        // PUT: api/Emp_tb/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmp_tb(int id, Emp_tb emp_tb)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != emp_tb.EmployeeId)
            {
                return BadRequest();
            }

            db.Entry(emp_tb).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Emp_tbExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Emp_tb
        [ResponseType(typeof(Emp_tb))]
        public IHttpActionResult PostEmp_tb(Emp_tb emp_tb)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Emp_tb.Add(emp_tb);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = emp_tb.EmployeeId }, emp_tb);
        }

        // DELETE: api/Emp_tb/5
        [ResponseType(typeof(Emp_tb))]
        public IHttpActionResult DeleteEmp_tb(int id)
        {
            Emp_tb emp_tb = db.Emp_tb.Find(id);
            if (emp_tb == null)
            {
                return NotFound();
            }

            db.Emp_tb.Remove(emp_tb);
            db.SaveChanges();

            return Ok(emp_tb);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Emp_tbExists(int id)
        {
            return db.Emp_tb.Count(e => e.EmployeeId == id) > 0;
        }
    }
}