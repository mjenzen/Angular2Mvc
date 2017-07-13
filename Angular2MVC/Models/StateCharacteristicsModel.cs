using Angular2MVC.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2MVC.Models
{
    public class StateCharacteristicsModel
    {
        public long Population { get; set; }

        public string StudentCount { get; set; }

        public StateCharacteristicsModel()
        {

        }
        public StateCharacteristicsModel(StateCharacteristic characteristic)
        {
            Population = characteristic.Population.Value;
            StudentCount = characteristic.TBD2.ToString();
        }
    }
}