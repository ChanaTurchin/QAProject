using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
  public static class UserManager
    {
        private static readonly ProjectChaniRuthiEntities db = DB.Instance;
        public static void Register(UserDTO user)
        {
            db.Users.Add(Converter.Convert(user));
          db.SaveChanges();
        }
        public static bool IsExist(string userName,string password)
        {
            return db.Users.Any(u => u.userName == userName && u.password == password);
        }
    }
}
