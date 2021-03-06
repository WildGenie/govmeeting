﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GM.WebApp.Models;
using Microsoft.AspNetCore.Authorization;
using GM.DatabaseModel;
using GM.DatabaseRepositories;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GM.Webapp.Features.Govbodies
{
    [Route("api/[controller]")]
    public class GovernmentBodyController : Controller
    {
        public IGovBodyRepository govBodies { get; set; }

        public GovernmentBodyController(IGovBodyRepository govBodies)
        {
            this.govBodies = govBodies;
        }

        [HttpGet("{meetingId}")]
        public GovernmentBody Get(int govBodyId)
        {
            GovernmentBody ret = govBodies.Get(govBodyId);
            return ret;
        }

        //[HttpGet("{country}/{state}/{county}/{city}/{govEntity?}/{meetingDate?}")]
        //public ViewMeeting Get(string country, string state, string county, string city, string govEntity = "Selectmen", string language = "en", string meetingDate = null)
        //{
        //    return meetings.Get(country, state, county, city, govEntity, language, meetingDate);
        //}

        //// POST api/meeting
        //[HttpPost]
        //[Authorize("PhillyEditor")]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/meeting/5
        //[Authorize("PhillyEditor")]
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
            
        //}

        //// DELETE api/meeting/5
        //[Authorize("PhillyEditor")]
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
