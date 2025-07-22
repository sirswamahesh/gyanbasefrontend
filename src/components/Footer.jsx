// import { Facebook, Twitter, Instagram, Linkedin, GraduationCap } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-base-200 text-base-content  border-t border-base-300 ">
//       <div className="container mx-auto p-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Logo & About Section */}
//           <div>
//             <h2 className="text-xl font-bold flex items-center gap-2"><div className="size-10 rounded-lg bg-secondary/10 flex items-center justify-center">
//                 <GraduationCap className="w-6 h-6 text-secondary" />
//               </div>EduMaster</h2>
//             <p className="mt-2 text-sm">
//               Elevate your learning experience with our premium courses.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h2 className="font-semibold text-lg">Quick Links</h2>
//             <ul className="mt-2 space-y-2">
//               <li><a href="#" className="hover:text-primary">Home</a></li>
//               <li><a href="#" className="hover:text-primary">Courses</a></li>
//               <li><a href="#" className="hover:text-primary">About Us</a></li>
//               <li><a href="#" className="hover:text-primary">Contact</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h2 className="font-semibold text-lg">Follow Us</h2>
//             <div className="flex space-x-4 mt-2">
//               <a href="#" className="hover:text-primary"><Facebook /></a>
//               <a href="#" className="hover:text-primary"><Twitter /></a>
//               <a href="#" className="hover:text-primary"><Instagram /></a>
//               <a href="#" className="hover:text-primary"><Linkedin /></a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center mt-6 border-t border-base-300 pt-4 text-sm">
//           © {new Date().getFullYear()} EduMaster. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 p-2 rounded-lg">
                <Code className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold">CodeBase</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering developers worldwide with comprehensive coding
              education and industry-relevant skills.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Free Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Certification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Career Guidance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Student Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Frontend Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Backend Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Full Stack
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Data Science
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">support@codebase.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CodeBase. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
