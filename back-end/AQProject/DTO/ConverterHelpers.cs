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
    public static class ConverterHelpers
    {
        public static List<QuestionItemDTO> GetQuestionItems(string fileName)
        {
            string filePath = IO.GetQuestionPath(fileName);
            string json = IO.Read(filePath);
            return JsonConvert.DeserializeObject<List<QuestionItemDTO>>(json);
        }

        public static string SaveQuestionItems(List<QuestionItemDTO> items)
        {
            string json = JsonConvert.SerializeObject(items);
            string fileName = $"{Guid.NewGuid()}.json";
            string filePath =IO.GetQuestionPath(fileName);
            IO.Write(filePath, json);
            return fileName;
        }

    }
}
