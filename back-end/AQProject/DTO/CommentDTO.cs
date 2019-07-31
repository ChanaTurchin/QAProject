using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CommentDTO
    {
        public int CommentId { get; set; }
        public string CommentBody { get; set; }
        public Nullable<int> AnswerId { get; set; }
        public Nullable<int> Comment_userId { get; set; }
        public Nullable<System.DateTime> CommentDate { get; set; }

        public  AnswerDTO Answer { get; set; }
        public  UserDTO User { get; set; }
    }
}