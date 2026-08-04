import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>
            <h2 className="text-3xl font-bold">
              coding
              <span className="font-normal"> ninjas</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Learn from industry experts with live classes,
              real projects and placement support.
            </p>
          </div>

          {/* Products */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Full Stack</li>

              <li>Data Analytics</li>

              <li>Java Backend</li>

              <li>AI & ML</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>About</li>

              <li>Careers</li>

              <li>Contact</li>

              <li>Blogs</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                <FaLinkedinIn />
              </div>

              <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                <FaYoutube />
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-500">

          © 2026 Coding Ninjas Clone | Built with React & Tailwind CSS

        </div>

      </div>
    </footer>
  );
}

export default Footer;