using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.Models
{
    public class VendorContactModel
    {
        public string Name { get; set; }

        public string Role { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string Fax { get; set; }

        public VendorContactModel()
        {
        }

        public VendorContactModel(VendorContact contactInfo)
        {
            Name = contactInfo.Name;
            Role = contactInfo.Role;
            PhoneNumber = contactInfo.Phone_;
            Email = contactInfo.Email;
            Fax = contactInfo.Fax;
        }
    }
}