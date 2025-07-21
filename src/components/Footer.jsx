import { Facebook, Twitter, Instagram, Linkedin, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content  border-t border-base-300 ">
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo & About Section */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2"><div className="size-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>EduMaster</h2>
            <p className="mt-2 text-sm">
              Elevate your learning experience with our premium courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Courses</a></li>
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="font-semibold text-lg">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="#" className="hover:text-primary"><Instagram /></a>
              <a href="#" className="hover:text-primary"><Linkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 border-t border-base-300 pt-4 text-sm">
          © {new Date().getFullYear()} EduMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
