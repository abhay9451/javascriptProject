﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace javascriptProject.Models
{
    public class ApplicationDbContext:DbContext
        {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        
            public DbSet<Order> Orders{ get; set; }
            public DbSet<Menus> Menus { get; set; }
        


    }
}
