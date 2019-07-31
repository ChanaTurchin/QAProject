using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public static class SearchManager
    {
        private static readonly ProjectChaniRuthiEntities db = new ProjectChaniRuthiEntities();
        public static List<QuestionDTO> Search(string searchText)
        {
            List<Question> questions = db.Questions.ToList();
            List<QuestionDTO> questionsDTO = questions.Select(q => Converter.Convert(q)).ToList();
            //לעבור על כל השאלות, לכל שאלה לעבור על רשימת קטגוריות של השאלה, וכל קטגוריה לבדוק האם קיימת בטקסט של שאלה
            List<QuestionDTO> searchResult = new List<QuestionDTO>();
            //var qq = questionsDTO.Where(q => q.Categories.Where(c => searchText.Contains(c.CategoryName.ToString()))
            //searchResult.Add(qq);
            //qq = questionsDTO.Where(q => searchText.Contains(q.QuestionTitle.ToString()));
            //searchResult.Add(qq);
            return questionsDTO ;
        }
    }
}
