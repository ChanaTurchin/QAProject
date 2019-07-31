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
        public static bool IsExist(int Question_userId, string QuestionTitle)
        {
            return db.Questions.Any(q => q.question_userId == Question_userId && q.questionTitle == QuestionTitle);
        }
        public static void AddQuestion(QuestionDTO question)
        {
            var q = Converter.Convert(question);
            db.Questions.Add(q);
            db.SaveChanges();
          
        }

        public static void AddRequirement(QuestionDTO question)
        {
            Question q = db.Questions.FirstOrDefault(x => x.questionId == question.QuestionId);
            q.requirement++;
            db.SaveChanges();
        }
    }
}
