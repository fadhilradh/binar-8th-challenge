const HomepageSysreq = () => {
  return (
    <section className="flex flex-col justify-center h-screen bg-sysreq bg-center bg-cover lg:p-32 md:p-10 px-5 py-10 space-y-20 text-white shadow-sm">
      <h1 className="w-full lg:w-40 text-2xl sm:text-3xl md:text-4xl lg:text-6xl whitespace-nowrap lg:whitespace-normal text-white tracking-wider text-center md:text-left">
        SYSTEM REQUIREMENTS
      </h1>

      <div className="md:w-3/4 bg-black opacity-80 flex flex-col tracking-wider border border-gray-700">
        <div className="flex w-full">
          <div className="border-b border-r border-gray-700 w-1/2 p-4">
            <h3 className="text-lg lg:text-2xl text-yellow-500 mb-1">OS :</h3>
            <p>Windows 7 64-bit only (No OSX support at this time)</p>
          </div>
          <div className="border-b border-gray-700 w-1/2 p-4">
            <h3 className="text-lg lg:text-2xl text-yellow-500 mb-1">
              PROCESSOR:
            </h3>
            <p>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 border-b border-r border-gray-700 p-4">
            <h3 className="text-lg lg:text-2xl text-yellow-500 mb-1">
              MEMORY :
            </h3>
            <p>4GB RAM</p>
          </div>
          <div className="w-1/2 border-b border-gray-700 p-4">
            <h3 className="text-lg lg:text-2xl text-yellow-500 mb-1">
              STORAGE :
            </h3>
            <p>8 GB available space</p>
          </div>
        </div>
        <div className="flex p-4 flex-col">
          <h3 className="text-lg lg:text-2xl text-yellow-500 mb-1">
            GRAPHICS :
          </h3>
          <p>NVIDIA GeForce GTX 660 2GB or</p>
          <p>AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
        </div>
      </div>
    </section>
  );
};

export default HomepageSysreq;
