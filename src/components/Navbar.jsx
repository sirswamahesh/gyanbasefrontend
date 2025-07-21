import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { GraduationCap, LayoutDashboard, LogInIcon, LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed max-auto left-0 right-0 top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              {/* Logo Container */}
              <div className="size-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>

              {/* LMS Name */}
              <h1 className="text-xl font-bold text-secondary">EduMaster</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {
              !authUser && (
                <Link
                  to={"/Login"}
                  className={`
              btn btn-sm gap-2 transition-colors
              
              `}
                >
                  <LogInIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Login</span>
                </Link>
              )
            }

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
                {
                  authUser.role === 'admin' && (
                    <Link to={"/dashboard"} className={`btn btn-sm gap-2`}>
                      <LayoutDashboard className="size-5" />
                      <span className="hidden sm:inline">Dashboard</span>
                    </Link>
                  )
                }
                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>


              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;