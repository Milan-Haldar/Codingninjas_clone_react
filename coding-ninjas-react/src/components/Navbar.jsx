import DropdownItem from "./DropdownItem";
import { IoChevronDown } from "react-icons/io5";
import { workingProfessionals, collegeStudents } from "../data/navbarData";
function Navbar() {
  return (
    <nav className="bg-[#111111] border-b border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-14">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-md bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
              N
            </div>

            <h1 className="text-2xl">
              <span className="text-white font-bold">coding </span>
              <span className="text-gray-300">ninjas</span>
            </h1>
          </div>

          {/* Navigation */}
          <ul className="flex items-center gap-10 text-white">
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-2 hover:text-orange-400 transition-all duration-300">
                <span>For working Professionals</span>
                <IoChevronDown className="text-sm" />
              </div>

              <div className="absolute top-12 left-0 hidden group-hover:block bg-white rounded-xl shadow-xl w-96 py-3">
                {workingProfessionals.map((course, index) => (
                  <DropdownItem
                    key={index}
                    title={course.title}
                    description={course.description}
                    icon={course.icon}
                  />
                ))}
              </div>
            </li>

            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-2 hover:text-orange-400 transition">
                <span>For College Students</span>
                <IoChevronDown className="text-sm" />
              </div>

              <div className="absolute top-12 left-0 hidden group-hover:block bg-white rounded-xl shadow-xl w-96 py-3">
                {collegeStudents.map((course, index) => (
                  <DropdownItem
                    key={index}
                    title={course.title}
                    description={course.description}
                    icon={course.icon}
                  />
                ))}
              </div>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
