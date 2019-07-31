using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Helpers
{
    public static class IO
    {
        public static string Read(string path)
        {
            return File.ReadAllText(path);
        }

        public static void Write(string path,string json)
        {
            File.WriteAllText(path, json);
        }

        public static string GetQuestionPath(string fileName)
        {
            return GetFilePath("QuestionsPath", fileName);
        }

        public static string GetImagePath(string fileName)
        {
            return GetFilePath("ImagesPath", fileName);
        }

        private static string GetFilePath(string appSettingsKey, string fileName)
        {
            return HttpContext.Current.Server.MapPath($"~/{ConfigurationManager.AppSettings[appSettingsKey]}{fileName}");
        }
    }
}
