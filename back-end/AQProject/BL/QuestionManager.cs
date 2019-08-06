using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class QuestionManager
    {
        private static readonly ProjectChaniRuthiEntities db = DB.Instance;
        public static bool IsExist(int Question_userID, string QuestionTitle)
        {
            return db.Questions.Any(x => x.question_userId == Question_userID  /*&& cast([x.questionTitle] as nvarchar(max)) == QuestionTitle*/);
        }
        public static void AddQuestion(QuestionDTO question)
        {
            var q = Converter.Convert(question);
            db.Questions.Add(q);
            db.SaveChanges();
          
        }

        public static void AddRequirement(QuestionDTO question, UserDTO user)
        {
            Question q = db.Questions.FirstOrDefault(x => x.questionId == question.QuestionId);
            User u = db.Users.FirstOrDefault(x => x.userId == user.UserId);
            q.requirement++;
            q.Votes.Add(new Vote() { Question = q, User = u });
            //q.Votes.Add(new Vote() { questionId = question.QuestionId, userId = user.UserId});
            db.SaveChanges();
        }
    }
}
