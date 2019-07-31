using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class VoteDTO
    {
        public int VoteId { get; set; }
        public int QuestionId { get; set; }
        public int UserId { get; set; }

        public  QuestionDTO Question { get; set; }
        public  UserDTO User { get; set; }
    }
}