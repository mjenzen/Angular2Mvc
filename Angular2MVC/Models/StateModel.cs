using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.Models
{
    public class StateModel
    {
        private State state;

        public StateModel()
        {
        }

        public StateModel(State state)
        {
            Id = state.StateId;
            Name = state.State1;
            Abbreviation = state.Abbreviation;
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Abbreviation { get; set; }

    }
}