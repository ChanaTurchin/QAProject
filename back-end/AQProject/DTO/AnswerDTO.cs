using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class AnswerDTO
    {
        public int AnswerId { get; set; }
        public int QuestionId { get; set; }
        public int Answer_userId { get; set; }
        public Nullable<bool> Checked { get; set; }
        public Nullable<System.DateTime> AnswerDate { get; set; }
        public string FileName { get; set; }

        public  QuestionDTO Question { get; set; }
        public  UserDTO User { get; set; }
        public  List<CommentDTO> Comments { get; set; }
    }
}
