using Angular2MVC.Code;
using Angular2MVC.DBContext;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class LVendorContactController : BaseAPIController
    {
        private StateRepository stateRepository;

        public LVendorContactController()
        {
            stateRepository = new StateRepository(new StateTrackerContext());
        }

        // GET api/<controller>
        public void Get()
        {


        }

        // GET api/<controller>/5
        public void Get(int id)
        {

        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
