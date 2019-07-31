using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UserDTO
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PathDirectory { get; set; }
        public List<QuestionDTO> Questions { get; set; }
        public List<AnswerDTO> Answers { get; set; }
        public List<CommentDTO> Comments { get; set; }
        //public List< VoteDTO> Votes { get; set; }
        public Nullable<int> Grade { get; set; }
        public Nullable<int> User_group { get; set; }
        public Nullable<bool> IsPractitioner { get; set; }
        public Nullable<int> Points { get; set; }
       
    }
}