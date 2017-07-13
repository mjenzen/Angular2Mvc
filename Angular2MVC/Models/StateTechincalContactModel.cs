using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.Models
{
    public class StateTechincalContactModel
    {
        public string Contact { get; set; }


        public StateTechincalContactModel()
        {
        }

        public StateTechincalContactModel(StateTechnicalContact contact)
        {
            Contact = contact.ContactInfo;
        }
    }
}