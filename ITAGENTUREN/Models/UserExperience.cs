using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITAGENTUREN.Models
{
	public class UserExperience
	{
		public int Id { get; set; }

		public int UserId { get; set; }

		public string Language { get; set; }

		public string Experience { get; set; }
	}
}
