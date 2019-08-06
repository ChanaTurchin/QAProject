using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    
    public class AnswerManger
    {
        private static readonly ProjectChaniRuthiEntities db = DB.Instance;
        public static bool IsExist(int AnswerUserId)
        {
            return db.Answers.Any(x => x.answer_userId == AnswerUserId);
        }
        public static void AddAnswer(AnswerDTO answer)
        {
            Answer a = Converter.Convert(answer);
            db.Answers.Add(a);
            Question q = db.Questions.FirstOrDefault(x => x.questionId == answer.QuestionId);
            if (q != null)
                q.Answers.Add(a);
            db.SaveChanges();
        }
    
    }
}
