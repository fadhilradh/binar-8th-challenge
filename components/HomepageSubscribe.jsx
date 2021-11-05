const HomepageSubscribe = () => {
  return (
    <section class="flex flex-col justify-between bg-black h-screen w-full text-white md:p-14 p-5">
      <div class="flex h-3/4">
        <img
          src="/assets/Group 3.svg"
          class="opacity-40 w-1/2 hidden md:inline-flex  "
          alt=""
        />
        <div class="flex flex-col justify-center items-start space-y-14 lg:space-y-10 md:pl-5 lg:pl-24 tracking-wider h-full">
          <div class="pl-6 pt-20 md:pt-0">
            <h5 class="mb-16 text-3xl text-center md:text-left">
              Want to stay in touch?
            </h5>
            <p>
              In order to start receiving our news, all you have to do is enter
              your email address. Everything else will be taken care of by us.
              We will send you emails containing information about game. We
              don’t spam.
            </p>
          </div>
          <div class="md:pl-6 flex flex-col items-center lg:items-stretch lg:flex-row justify-start gap-6 w-full">
            <input
              type="text"
              id="input"
              class="text-yellow-500 px-4 py-3 w-3/4 md:w-full
              lg:w-1/2 rounded-md focus:outline-none"
              placeholder="Your Email Address"
            />
            <button
              class="
                  mt-4
                  lg:m-0
                  bg-yellow-500
                  text-black
                  w-3/4
                  md:w-full
                  lg:w-1/2
                  xl:w-1/4
                  px-4
                  py-2
                  rounded-md
                  hover:bg-black
                  hover:text-yellow-500
                  border border-transparent
                  hover:border-yellow-500
                  font-bold
                "
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <footer class="flex flex-col ">
        <div class="flex justify-evenly md:justify-end space-x-5 lg:space-x-10 xl:space-x-14 mb-5">
          <div class="hidden md:flex space-x-6">
            <a
              class="text-sm text-gray-500 font-bold hover:text-yellow-500 tracking-widest"
              href="#main"
            >
              MAIN
            </a>
            <a
              class="text-sm text-gray-500 font-bold hover:text-yellow-500 tracking-widest"
              href="#about"
            >
              ABOUT
            </a>
            <a
              class="text-sm text-gray-500 font-bold hover:text-yellow-500 tracking-widest"
              href="#features"
            >
              GAME FEATURES
            </a>
            <a
              class="text-sm text-gray-500 font-bold hover:text-yellow-500 tracking-widest"
              href="#sysreq"
            >
              SYSTEM REQUIREMENTS
            </a>
            <a
              class="text-sm text-gray-500 font-bold hover:text-yellow-500 tracking-widest"
              href="#quotes"
            >
              QUOTES
            </a>
          </div>

          <img src="/assets/facebook.svg" alt="fb" />
          <img src="/assets/twitter.svg" alt="twitter" />
          <img src="/assets/Vector.svg" alt="youtube" />
          <img src="/assets/twitch.svg" alt="twitch" />
        </div>

        <hr class="mb-5 border border-gray-700" />

        <span class="flex flex-col md:flex-row text-center md:text-left space-y-3 md:space-y-0 justify-between">
          <span class="text-sm text-gray-700">
            © 2021 Fadhil Games, Inc. All Rights Reserved
          </span>
          <span class="text-xs font-bold uppercase tracking-wider">
            <a class="cursor-pointer hover:text-yellow-500">
              Privacy Policy |{" "}
            </a>
            <a class="cursor-pointer hover:text-yellow-500">
              {" "}
              Terms of Services |{" "}
            </a>
            <a class="cursor-pointer hover:text-yellow-500"> Code </a>
          </span>
        </span>
      </footer>
    </section>
  );
};

export default HomepageSubscribe;
