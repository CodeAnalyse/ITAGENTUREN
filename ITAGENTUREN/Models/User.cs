﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAGENTUREN.Models
{
	public class User
	{
		public int Id { get; set; }

		public string FirstName { get; set; }

		public string LastName { get; set; }

		public string Email { get; set; }

		public string Password { get; set; }

		public string Gender { get; set; }

		public DateTime Dob { get; set; }

		public string Type { get; set; }
	}
}
