﻿using Angular2MVC.Code;
using Angular2MVC.DBContext;
using System.Net.Http;
using System.Web.Http;
using System.Linq;
using Angular2MVC.Models;

namespace Angular2MVC.Controllers
{
    public class LeadContactController : BaseAPIController
    {
        private StateRepository stateRepository;

        public LeadContactController()
        {
            stateRepository = new StateRepository(new StateTrackerContext());
        }

        // GET api/<controller>
        public void Get()
        {
        }

        // GET api/<controller>/5
        public HttpResponseMessage Get(int id)
        {
            var contacts = stateRepository.GetStateById(id).StateLeadContacts.Select(x => new StateContactModel(x)).ToList();
            return ToJson(contacts);
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
