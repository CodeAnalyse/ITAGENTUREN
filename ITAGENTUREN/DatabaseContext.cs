using ITAGENTUREN.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAGENTUREN
{
	public class DatabaseContext : DbContext
	{
		public DatabaseContext(DbContextOptions<DatabaseContext> options)
			: base(options)
		{ }

		public DbSet<User> Users { get; set; }

		public DbSet<UserExperience> UserExperience { get; set; }
	}
}