using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class ApplicationRequest
    {
        [Required]
        public required string Id { get; set; }
        [Required]
        public required string UserId { get; set; }
        [Required]
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Status { get; set; }
        public required DateTime CreatedAt { get; set; }

    }
}