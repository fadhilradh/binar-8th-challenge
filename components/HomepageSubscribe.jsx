const HomepageSubscribe = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex col justify-between bg-black h-screen text-white md:p-14 p-5">
      <div className="flex h-3/4">
        <img
          src="/assets/Group 3.svg"
          className="opacity-40 w-1/2 hidden md:inline-flex  "
          alt=""
        />
        <div className="flex col justify-center items-start space-y-14 lg:space-y-10 md:pl-5 lg:pl-24 tracking-wider h-full">
          <div className="pl-6 pt-20 md:pt-0">
            <h5 className="mb-16 text-3xl text-center md:text-left">
              Want to stay in touch?
            </h5>
            <p>
              In order to start receiving our news, all you have to do is enter
              your email address. Everything else will be taken care of by us.
              We will send you emails containing information about game. We
              don’t spam.
            </p>
          </div>
          <div className="md:pl-6 flex col items-center lg:items-stretch lg:flex-row justify-start gap-6 w-full">
            <input
              type="text"
              id="input"
              className="text-primary px-4 py-3 w-3/4 md:w-full
              lg:w-1/2 rounded-md focus:outline-none"
              placeholder="Your Email Address"
            />
            <button
              className="
                  mt-4
                  lg:m-0
                  bg-primary
                  text-black
                  w-3/4
                  md:w-full
                  lg:w-1/2
                  xl:w-1/4
                  px-4
                  py-2
                  rounded-md
                  hover:bg-black
                  hover:text-primary
                  border border-transparent
                  hover:border-primary
                  font-bold
                "
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <footer className="flex col ">
        <div className="flex justify-evenly md:justify-end space-x-5 lg:space-x-10 xl:space-x-14 mb-5">
          <div className="hidden md:flex space-x-6">
            <a
              className="text-sm text-gray-500 font-bold hover:text-primary tracking-widest"
              href="#main"
            >
              MAIN
            </a>
            <a
              className="text-sm text-gray-500 font-bold hover:text-primary tracking-widest"
              href="#about"
            >
              ABOUT
            </a>
            <a
              className="text-sm text-gray-500 font-bold hover:text-primary tracking-widest"
              href="#features"
            >
              GAME FEATURES
            </a>
            <a
              className="text-sm text-gray-500 font-bold hover:text-primary tracking-widest"
              href="#sysreq"
            >
              SYSTEM REQUIREMENTS
            </a>
            <a
              className="text-sm text-gray-500 font-bold hover:text-primary tracking-widest"
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

        <hr className="mb-5 border border-gray-700" />

        <span className="flex col md:flex-row text-center md:text-left space-y-3 md:space-y-0 justify-between">
          <span className="text-sm text-gray-700">
            © 2021 Fadhil Games, Inc. All Rights Reserved
          </span>
          <span className="text-xs font-bold uppercase tracking-wider">
            <a className="cursor-pointer hover:text-primary">
              Privacy Policy |{' '}
            </a>
            <a className="cursor-pointer hover:text-primary">
              {' '}
              Terms of Services |{' '}
            </a>
            <a className="cursor-pointer hover:text-primary"> Code </a>
          </span>
        </span>
      </footer>
    </section>
  )
}

export default HomepageSubscribe
