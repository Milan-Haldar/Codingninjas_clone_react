const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Software Engineer @ Google",
    review:
      "Coding Ninjas helped me crack my dream company. The mentors and projects were amazing.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    company: "SDE @ Microsoft",
    review:
      "The curriculum was industry focused and placement support was excellent.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Aman Gupta",
    company: "Frontend Developer @ Adobe",
    review:
      "Mock interviews and live classes boosted my confidence a lot.",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#f7f8fc] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-orange-500 font-semibold uppercase tracking-[5px] text-center">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          What our learners say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <h3 className="text-2xl font-bold mt-6">
                {item.name}
              </h3>

              <p className="text-orange-500 mt-2">
                {item.company}
              </p>

              <p className="text-gray-600 mt-6 leading-8">
                "{item.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;