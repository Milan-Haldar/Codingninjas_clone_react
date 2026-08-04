const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
  },
  {
    name: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flipkart_logo.png",
  },
  {
    name: "Paytm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png",
  },
];

function Companies() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-8">

        <p className="text-center text-gray-500 uppercase tracking-[6px]">
          Our learners work at
        </p>

        <h2 className="text-center text-5xl font-bold mt-4">
          Top Companies
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-16 items-center">

          {companies.map((company, index) => (
            <div
              key={index}
              className="flex justify-center grayscale hover:grayscale-0 transition duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Companies;