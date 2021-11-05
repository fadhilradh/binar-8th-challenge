const HomepageFeatures = () => {
  return (
    <section className="flex h-screen w-full bg-features bg-cover bg-center">
      <div className="lg:w-3/5 md:w-1/2 h-full bg-black opacity-40"></div>
      <div className="flex flex-col items-center md:items-start justify-center bg-black opacity-70 md:pl-16 lg:pl-none text-white">
        <h1 className="text-2xl">What's so special ?</h1>
        <h1 className="text-4xl md:text-6xl mb-10">FEATURES</h1>

        <div className="flex flex-col pl-10 md:pl-0">
          <div className="flex items-baseline">
            <div className="flex flex-col h-full">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="ml-2 h-32 w-1 border-white border-l"></div>
            </div>
            <div className="flex ml-2">
              <div className="ml-10">
                <div className="text-xl text-yellow-500 tracking-wider">
                  TRADITIONAL GAMES
                </div>
                <p className="mt-3 w-3/4 tracking-wider">
                  If you miss your childhood, we provide many traditional games
                  here
                </p>
              </div>
            </div>
          </div>
          <div className="flex mb-5">
            <div className="w-4 h-4 border border-white rounded-full"></div>
            <div className="ml-10">
              <div className="text-xl text-yellow-500 tracking-wider">
                GAME SUIT
              </div>
            </div>
          </div>
          <div className="flex items-baseline">
            <div className="w-4 h-4 border border-white rounded-full"></div>
            <div className="ml-10">
              <div className="text-xl text-yellow-500 tracking-wider">TBD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
