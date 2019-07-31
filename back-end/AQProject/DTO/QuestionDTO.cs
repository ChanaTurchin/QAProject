using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class QuestionDTO
    {
        public int QuestionId { get; set; }
        public string QuestionTitle { get; set; }
        public List<QuestionItemDTO> Items { get; set; }
        public int Question_userId { get; set; }
        public Nullable<int> Requirement { get; set; }
        public Nullable<System.DateTime> QuestionDate { get; set; }

        public  List<AnswerDTO> Answers { get; set; }
        //לשאלה רשימת קטגוריות ולקטגוריה רשימת שאלות. השארנו רק רשימת שאלות לכל קטגוריה
       public  List<CategoryDTO> Categories { get; set; }
        public  UserDTO User { get; set; }
        public List<VoteDTO> Votes { get; set; }
    }
}