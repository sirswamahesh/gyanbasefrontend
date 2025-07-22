import { useState } from "react";
import {
  Menu,
  X,
  Code,
  Search,
  User,
  LayoutDashboard,
  LogInIcon,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-500 p-2 rounded-lg">
              <Code className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-white">CodeBase</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/courses"
              className="text-gray-300 hover:text-green-400 font-medium transition-colors"
            >
              Courses
            </Link>
            <Link
              to="/tutorials"
              className="text-gray-300 hover:text-green-400 font-medium transition-colors"
            >
              Tutorials
            </Link>
            <Link
              to="/practice"
              className="text-gray-300 hover:text-green-400 font-medium transition-colors"
            >
              Practice
            </Link>
            <Link
              to="/certification"
              className="text-gray-300 hover:text-green-400 font-medium transition-colors"
            >
              Certification
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-green-400 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!authUser ? (
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  <LogInIcon className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/profile">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-green-400 bg-transparent"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
                {authUser.role === "admin" && (
                  <Link to="/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-green-400 bg-transparent"
                    >
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                )}
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-green-400 bg-transparent"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                to="/courses"
                className="text-gray-300 hover:text-green-400 font-medium"
              >
                Courses
              </Link>
              <Link
                to="/tutorials"
                className="text-gray-300 hover:text-green-400 font-medium"
              >
                Tutorials
              </Link>
              <Link
                to="/practice"
                className="text-gray-300 hover:text-green-400 font-medium"
              >
                Practice
              </Link>
              <Link
                to="/certification"
                className="text-gray-300 hover:text-green-400 font-medium"
              >
                Certification
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-green-400 font-medium"
              >
                About
              </Link>

              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                {!authUser ? (
                  <Link to="/login">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <LogInIcon className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/profile">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-white hover:bg-green-400 bg-transparent"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                    {authUser.role === "admin" && (
                      <Link to="/dashboard">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-gray-300 hover:text-white hover:bg-gray-800"
                        >
                          <LayoutDashboard className="h-4 w-4 mr-2" />
                          Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button
                      onClick={logout}
                      variant="outline"
                      size="sm"
                      className="text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
