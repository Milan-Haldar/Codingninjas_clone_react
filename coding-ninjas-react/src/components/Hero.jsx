function Hero() {
  return (
    <section className="bg-[#060b22] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="grid grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <div>
            <div className="inline-flex items-center gap-3 border border-orange-500 rounded-full px-6 py-3 text-white">
              ⚡ Ready to 10X your career!
            </div>

            <h1 className="text-white font-bold text-[72px] leading-[82px] mt-10">
              Give your career an
              <br />
              <span className="text-[#4f8dfd]">
                unfair AI advantage
              </span>
            </h1>

            <p className="text-gray-400 text-2xl leading-10 mt-10 max-w-xl">
              Become future-ready with industry-focused programs designed by
              experts. Learn AI, Full Stack, Data Analytics and much more.
            </p>
          </div>

          {/* RIGHT */}

          <div className="relative h-[760px]">

            {/* Glow Ring */}

            <div className="absolute right-10 top-12 w-[470px] h-[470px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-10">

              <div className="w-full h-full rounded-full bg-[#161d33] flex items-center justify-center text-[140px]">
                🤖
              </div>

            </div>

            {/* AI */}

            <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-xl px-6 py-4 flex gap-3 items-center">

              <div className="text-3xl">
                🤖
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  AI
                </h3>

                <p className="text-sm text-gray-500">
                  Artificial Intelligence
                </p>
              </div>

            </div>

            {/* CODE */}

            <div className="absolute top-56 right-0 bg-white rounded-2xl shadow-xl px-6 py-4 flex gap-3 items-center">

              <div className="text-3xl">
                💻
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Code
                </h3>

                <p className="text-sm text-gray-500">
                  Full Stack
                </p>
              </div>

            </div>

            {/* Analytics */}

            <div className="absolute left-10 bottom-40 bg-white rounded-2xl shadow-xl px-6 py-4 flex gap-3 items-center">

              <div className="text-3xl">
                📈
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Analytics
                </h3>

                <p className="text-sm text-gray-500">
                  Data Science
                </p>
              </div>

            </div>

            {/* FORM */}

            <div className="absolute bottom-0 right-0 w-[420px] bg-[#1b203d] rounded-[30px] p-8 shadow-2xl">

              <h2 className="text-white text-[44px] font-bold leading-tight">
                Let's find the right course for you
              </h2>

              <p className="text-gray-400 mt-6">
                Experience Level
              </p>

              <div className="space-y-4 mt-5 text-white">

                <label className="flex gap-3">
                  <input type="radio" name="exp" />
                  Working Professional
                </label>

                <label className="flex gap-3">
                  <input type="radio" name="exp" />
                  College Student
                </label>

                <label className="flex gap-3">
                  <input type="radio" name="exp" />
                  Others
                </label>

              </div>

              <select className="w-full mt-6 bg-[#10162e] border border-gray-600 rounded-xl p-4 text-white">
                <option>Select Topic</option>
              </select>

              <input
                type="text"
                placeholder="Name"
                className="w-full mt-5 bg-[#10162e] border border-gray-600 rounded-xl p-4 text-white"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full mt-5 bg-[#10162e] border border-gray-600 rounded-xl p-4 text-white"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full mt-5 bg-[#10162e] border border-gray-600 rounded-xl p-4 text-white"
              />

              <button className="w-full bg-orange-500 hover:bg-orange-600 py-4 mt-7 rounded-xl text-white font-bold">
                Continue
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
