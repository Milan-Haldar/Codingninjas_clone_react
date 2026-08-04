function HeroForm() {
  return (
    <div className="bg-[#181d38] w-[400px] rounded-3xl p-8 shadow-2xl">

      <h2 className="text-white text-3xl font-bold">
        Let's find the right course for you
      </h2>

      <p className="text-gray-400 mt-5">
        Experience Level
      </p>

      <div className="space-y-3 mt-5 text-white">

        <label className="flex gap-3">
          <input type="radio" />
          Working Professional
        </label>

        <label className="flex gap-3">
          <input type="radio" />
          College Student
        </label>

        <label className="flex gap-3">
          <input type="radio" />
          Others
        </label>

      </div>

      <input
        placeholder="Name"
        className="w-full mt-6 p-4 rounded-xl bg-[#0f1329] text-white"
      />

      <input
        placeholder="Phone"
        className="w-full mt-4 p-4 rounded-xl bg-[#0f1329] text-white"
      />

      <input
        placeholder="Email"
        className="w-full mt-4 p-4 rounded-xl bg-[#0f1329] text-white"
      />

      <button className="w-full bg-orange-500 py-4 rounded-xl mt-6 text-white font-bold">
        Continue
      </button>

    </div>
  );
}

export default HeroForm;