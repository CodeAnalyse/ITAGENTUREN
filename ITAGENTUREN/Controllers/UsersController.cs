using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITAGENTUREN;
using ITAGENTUREN.Models;

namespace ITAGENTUREN.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class UsersController : ControllerBase
	{
		private readonly DatabaseContext _context;

		public UsersController(DatabaseContext context)
		{
			_context = context;
		}

		// GET: api/Users
		[HttpGet]
		public IEnumerable<User> GetUsers()
		{
			return _context.Users.Where(x => string.IsNullOrEmpty(x.Type) || !x.Type.Equals("Consultancy"));
		}

		// GET: api/Users/5
		[HttpGet("{id}")]
		public async Task<IActionResult> GetUser([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var user = await _context.Users.FindAsync(id);

			if (user == null)
			{
				return NotFound();
			}

			return Ok(user);
		}

		// PUT: api/Users/5
		[HttpPut("{id}")]
		public async Task<IActionResult> PutUser([FromRoute] int id, [FromBody] User user)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != user.Id)
			{
				return BadRequest();
			}

			_context.Entry(user).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!UserExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: api/Users
		[HttpPost]
		public async Task<IActionResult> PostUser(User user)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (user.Id == 0)
			{
				_context.Users.Add(user);
				await _context.SaveChangesAsync();
			}
			else
			{
				var usr = _context.Users.FirstOrDefault(x => x.Id == user.Id);
				usr.FirstName = user.FirstName;
				usr.LastName = user.LastName;
				usr.Gender = user.Gender;
				usr.Dob = user.Dob;
				await _context.SaveChangesAsync();
			}

			return CreatedAtAction("GetUser", new { id = user.Id }, user);
		}

		[HttpPost]
		public async Task<IActionResult> PostUserExperience([FromBody]List<UserExperience> userExperience)
		{

			var users = _context.UserExperience.Where(x => x.UserId == userExperience.FirstOrDefault().UserId);
			_context.RemoveRange(users);
			_context.AddRange(userExperience);
			await _context.SaveChangesAsync();

			return Ok();
		}

		[HttpGet]
		public async Task<IActionResult> GetUserExperience(int userId)
		{
			var users = _context.UserExperience.Where(x => x.UserId == userId);
			return Ok(users);
		}

		[HttpPost]
		public async Task<IActionResult> LoginUser(User user)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			User usr = _context.Users.FirstOrDefault(x => x.Email.Equals(user.Email) && x.Password.Equals(user.Password));
			//await _context.SaveChangesAsync();
			if (usr == null)
			{
				return BadRequest();
			}

			usr.Password = "";
			return Ok(usr);
		}

		// DELETE: api/Users/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteUser([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var user = await _context.Users.FindAsync(id);
			if (user == null)
			{
				return NotFound();
			}

			_context.Users.Remove(user);
			await _context.SaveChangesAsync();

			return Ok(user);
		}

		private bool UserExists(int id)
		{
			return _context.Users.Any(e => e.Id == id);
		}
	}
}