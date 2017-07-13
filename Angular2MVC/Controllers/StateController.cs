using Angular2MVC.Code;
using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class StateController : BaseAPIController
    {
        private StateRepository stateRepository;

        public StateController()
        {
            stateRepository = new StateRepository(new StateTrackerContext());
        }

        // GET api/<controller>
        public HttpResponseMessage Get()
        {
            var states = stateRepository.GetStates().Select(x =>
                new StateModel()
                {
                    Id = x.StateId,
                    Name = x.State1,
                    Abbreviation = x.Abbreviation
                }
            ).ToList();

            return ToJson(states);
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
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

public class StateModel
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Abbreviation { get; set; }

}
