using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class CategoryManager
    {
        private static readonly ProjectChaniRuthiEntities db = DB.Instance;
        public static List<CategoryDTO> GetAllCategories()
        {
            return db.Categories.ToList()?.Select(c => Converter.Convert(c)).ToList();
        }
    }
}
