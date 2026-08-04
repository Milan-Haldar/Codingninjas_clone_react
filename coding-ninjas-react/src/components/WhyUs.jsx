import {
  FaUserGraduate,
  FaLaptopCode,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode className="text-4xl text-orange-500" />,
    title: "Industry Designed Curriculum",
    desc: "Learn the latest technologies with projects built by top engineers.",
  },
  {
    icon: <FaUserGraduate className="text-4xl text-orange-500" />,
    title: "1:1 Mentorship",
    desc: "Personal mentorship and doubt support throughout your journey.",
  },
  {
    icon: <FaBriefcase className="text-4xl text-orange-500" />,
    title: "Placement Assistance",
    desc: "Resume building, mock interviews and referrals from hiring partners.",
  },
  {
    icon: <FaAward className="text-4xl text-orange-500" />,
    title: "Certificates",
    desc: "Industry-recognized certificates after successful completion.",
  },
];

function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-8">

        <p className="text-orange-500 uppercase tracking-[5px] font-semibold">
          Why Coding Ninjas
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Everything you need to become job ready
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="border rounded-3xl p-8 hover:shadow-xl transition"
            >

              {item.icon}

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-8">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyUs;