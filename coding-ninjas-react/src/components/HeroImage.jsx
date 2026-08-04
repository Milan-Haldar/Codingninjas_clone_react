import {
  FaLaptopCode,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function HeroImage() {
  return (
    <div className="relative w-[520px] h-[650px] flex items-center justify-center">

      {/* Glow */}
      <div className="absolute w-[380px] h-[380px] rounded-full bg-blue-500/20 blur-[90px]" />

      {/* Main Circle */}
      <div className="relative w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#3B82F6] via-[#7C3AED] to-[#0F172A] flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,.4)]">

        <div className="w-[320px] h-[320px] rounded-full bg-[#0F172A] flex items-center justify-center">

          <FaRobot className="text-[120px] text-white" />

        </div>

      </div>

      {/* Card 1 */}
      <div className="absolute top-12 left-0 bg-white rounded-2xl shadow-xl p-4 w-44">

        <div className="flex items-center gap-3">
          <FaRobot className="text-blue-500 text-2xl" />

          <div>
            <h3 className="font-semibold">
              AI
            </h3>

            <p className="text-xs text-gray-500">
              Artificial Intelligence
            </p>
          </div>

        </div>

      </div>

      {/* Card 2 */}

      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 w-44">

        <div className="flex items-center gap-3">

          <FaLaptopCode className="text-orange-500 text-2xl" />

          <div>

            <h3 className="font-semibold">
              Code
            </h3>

            <p className="text-xs text-gray-500">
              Full Stack
            </p>

          </div>

        </div>

      </div>

      {/* Card 3 */}

      <div className="absolute bottom-20 left-10 bg-white rounded-2xl shadow-xl p-4 w-44">

        <div className="flex items-center gap-3">

          <FaChartLine className="text-green-500 text-2xl" />

          <div>

            <h3 className="font-semibold">
              Analytics
            </h3>

            <p className="text-xs text-gray-500">
              Data Science
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroImage;