const courses = [
  {
    title: "Full Stack Web Development",
    duration: "9 Months",
    level: "Beginner to Advanced",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    title: "Data Analytics",
    duration: "7 Months",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Data Science & AI",
    duration: "10 Months",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
  },
  {
    title: "Java Backend",
    duration: "6 Months",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
  },
];

function Courses() {
  return (
    <section className="bg-[#f8f9fc] py-24">

      <div className="max-w-[1280px] mx-auto px-8">

        <p className="text-orange-500 font-semibold text-center uppercase tracking-[5px]">
          Explore Programs
        </p>

        <h2 className="text-center text-5xl font-bold mt-4">
          Popular Courses
        </h2>

        <p className="text-center text-gray-500 mt-5 text-lg">
          Learn from industry experts with live classes.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {courses.map((course, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {course.title}
                </h3>

                <div className="flex justify-between text-gray-500 mt-5">

                  <span>{course.duration}</span>

                  <span>{course.level}</span>

                </div>

                <button
                  className="
                  mt-8
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                  "
                >
                  Explore Program
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Courses;