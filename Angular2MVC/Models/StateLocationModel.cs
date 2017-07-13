using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.Models
{
    public class StateLocationModel
    {

        public string Building { get; set; }

        public string Address1 { get; set; }

        public string Address2 { get; set; }

        public string City { get; set; }

        public string Zipcode { get; set; }

        public StateLocationModel()
        {

        }

        public StateLocationModel(StateLocation location)
        {
            Building = location.Building;
            Address1 = location.Address_Line_1;
            Address2 = location.Address_Line_2;
            City = location.City;
            Zipcode = location.Zipcode.GetValueOrDefault().ToString();
        }
    }
}