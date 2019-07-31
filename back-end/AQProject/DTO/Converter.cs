using DAL;
using Helpers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace DTO
{
    public static class Converter
    {
        public static AnswerDTO Convert(Answer answer)
        {
            return new AnswerDTO()
            {
                AnswerDate = answer.answerDate,
                AnswerId = answer.answerId,
                Answer_userId = answer.answer_userId,
                Checked = answer.@checked,
                Comments = answer.Comments?.Select(c => Convert(c)).ToList(),
                FileName = answer.fileName,
                QuestionId = answer.questionId,
                //Question = answer.Question,
                //User = answer.User
            };
        }

        

        public static Answer Convert(AnswerDTO answer)
        {
        return new Answer()
        {
            answerDate = answer.AnswerDate,
            answerId = answer.AnswerId,
            answer_userId = answer.Answer_userId,
            @checked = answer.Checked,
            Comments = answer.Comments?.Select(c => Convert(c)).ToList(),
            fileName = answer.FileName,
            questionId = answer.QuestionId,
            //Question = answer.Question,
            //User = answer.User
        };
        }

        //public static Category_QuestionDTO Convert(Category_Question c_q)
        //{
        //    return new Category_QuestionDTO()
        //    {
        //        categoryId = c_q.categoryId,
        //        CategoryQuestionId = c_q.category_question_id,
        //        //Category = c_q.Category,
        //        //Question = c_q.Question,
        //        QuestionId =c_q.questionId

        //    };
           
        //}
        //public static Category_Question Convert(Category_QuestionDTO c_q)
        //{
        //    return new Category_Question()
        //    {
        //        //Category = c_q.Category,
        //        questionId = c_q.QuestionId,
        //        //Question = c_q.Question,
        //        categoryId = c_q.categoryId,
        //        category_question_id = c_q.CategoryQuestionId
        //    };
        //}
       //public static List<Category_Question> Convert(List<Category_QuestionDTO> c_qDTO)
       // {
       //     List<Category_Question> c_q = new List<Category_Question>();
       //     c_qDTO.ForEach(c => c_q.Add(Convert(c)));
       //     return c_q;
       // }
       // public static List<Category_QuestionDTO> Convert(List<Category_Question> c_q)
       // {
       //     List<Category_QuestionDTO> c_qDTO = new List<Category_QuestionDTO>();
       //     c_q.ForEach(c => c_qDTO.Add(Convert(c)));
       //     return c_qDTO;
       // }

        public static CategoryDTO Convert(Category category)
        {
            return new CategoryDTO()
            {
                CategoryId = category.categoryId,
                CategoryName = category.categoryName,
                Questions = category.Category_Question?.Select(q => new QuestionDTO { QuestionId=q.questionId  }).ToList()

            };
        }
        public static Category Convert(CategoryDTO category)
        {
            return new Category()
            {
                Category_Question = category.Questions?.Select(q => new Category_Question { categoryId = category.CategoryId, questionId = q.QuestionId }).ToList(),
                categoryName = category.CategoryName,
                categoryId = category.CategoryId
            };
        }
        public static CommentDTO Convert(Comment comment)
        {
            return new CommentDTO()
            {
                //Answer = comment.Answer,
                AnswerId = comment.answerId,
                CommentBody = comment.commentBody,
                CommentDate = comment.commentDate,
                CommentId = comment.commentId,
                Comment_userId = comment.comment_userId,
                //User = comment.User
            };
        }
        public static Comment Convert(CommentDTO comment)
        {
            return new Comment()
            {
                //Answer = comment.Answer,
                answerId = comment.AnswerId,
                commentBody = comment.CommentBody,
                commentDate = comment.CommentDate,
                commentId = comment.CommentId,
                comment_userId = comment.Comment_userId,
                //User = comment.User
            };
        }
        //public static List<Comment> Convert(List<CommentDTO> commentsDTO)
        //{
        //    List<Comment> comments = new List<Comment>();
        //    commentsDTO.ForEach(c => comments.Add(Convert(c)));
        //    return comments;
        //}
        //public static List<CommentDTO> Convert(List<Comment> comments)
        //{
        //    List<CommentDTO> commentsDTO = new List<CommentDTO>();
        //    comments.ForEach(a => commentsDTO.Add(Convert(a)));
        //    return commentsDTO;
        //}
        public static QuestionDTO Convert(Question question)
        {
            QuestionDTO questionDTO= new QuestionDTO()
            {
                Answers = question.Answers?.Select(a => Convert(a)).ToList(),
                QuestionDate = question.questionDate,
                QuestionId = question.questionId,
                QuestionTitle = question.questionTitle,
                Question_userId = question.question_userId,
                Requirement = question.requirement,
                //User = question.User,
                Votes = question.Votes?.Select(v => Convert(v)).ToList()
            };

            questionDTO.Items = ConverterHelpers.GetQuestionItems(question.fileName);
            return questionDTO;
        }
        public static Question Convert(QuestionDTO question)
        {
            return new Question()
            {
                Answers = question.Answers?.Select(a => Convert(a)).ToList(),
                fileName = ConverterHelpers.SaveQuestionItems(question.Items),
                questionDate = question.QuestionDate,
                questionId = question.QuestionId,
                questionTitle = question.QuestionTitle,
                question_userId = question.Question_userId,
                requirement = question.Requirement,
                Category_Question = question.Categories?.Select(c => new Category_Question { categoryId = c.CategoryId, questionId = question.QuestionId }).ToList(),
                //User = question.User,
                Votes = question.Votes?.Select(v => Convert(v)).ToList()
            };
        }
        //public static List<QuestionDTO> Convert(List<Question> questions)
        //{
        //    List<QuestionDTO> questionsDTO = new List<QuestionDTO>();
        //    questions.ForEach(q => questionsDTO.Add(Convert(q)));
        //    return questionsDTO;
        //}
        //public static List<Question> Convert(List<QuestionDTO> questionsDTO)
        //{
        //    List<Question> questions = new List<Question>();
        //    questionsDTO.ForEach(q => questions.Add(Convert(q)));
        //    return questions;
        //}
        public static UserDTO Convert(User user)
        {
            return new UserDTO()
            {
                Answers = user.Answers?.Select(a => Convert(a)).ToList(),
                Comments = user.Comments?.Select(c => Convert(c)).ToList(),
                UserName = user.userName,
                Grade = user.grade,
                IsPractitioner = user.IsPractitioner,
                Password = user.password,
                PathDirectory=user.pathDirectory,
                Points = user.points,
                Questions = user.Questions?.Select(q => Convert(q)).ToList(),
                UserId = user.userId
            };
        }
        public static User Convert(UserDTO user)
        {
            return new User()
            {
                Answers = user.Answers?.Select(a => Convert(a)).ToList(),
                Comments = user.Comments?.Select(c => Convert(c)).ToList(),
                userName = user.UserName,
                grade = user.Grade,
                IsPractitioner = user.IsPractitioner,
                password = user.Password,
                pathDirectory = user.PathDirectory,
                points = user.Points,
                Questions = user.Questions?.Select(q => Convert(q)).ToList(),
                userId = user.UserId,
                user_group = user.User_group,
                
            };
        }
        public static VoteDTO Convert(Vote vote)
        {
            return new VoteDTO()
            {
                //Question = vote.Question,
                QuestionId = vote.questionId,
                //User = vote.User,
                UserId = vote.userId,
                VoteId = vote.voteId
            };
        }
        public static Vote Convert(VoteDTO vote)
        {
            return new Vote()
            {
                //Question = vote.Question,
                questionId = vote.QuestionId,
                //User = vote.User,
                userId = vote.UserId,
                voteId = vote.VoteId
            };
        }
        //public static List<Vote> Convert(List<VoteDTO> votesDTO)
        //{
        //    List<Vote> votes = new List<Vote>();
        //    votesDTO.ForEach(v => votes.Add(Convert(v)));
        //    return votes;
        //}
        //public static List<VoteDTO> Convert(List<Vote> votes)
        //{
        //    List<VoteDTO> votesDTO = new List<VoteDTO>();
        //    votes.ForEach(v => votesDTO.Add(Convert(v)));
        //    return votesDTO;
        //}
    }
}
