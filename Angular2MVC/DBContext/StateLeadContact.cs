//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Angular2MVC.DBContext
{
    using System;
    using System.Collections.Generic;
    
    public partial class StateLeadContact
    {
        public int LeadContactId { get; set; }
        public Nullable<int> StateId { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Phone_ { get; set; }
        public string Email { get; set; }
        public string Fax { get; set; }
        public string Additional { get; set; }
    
        public virtual State State { get; set; }
    }
}
