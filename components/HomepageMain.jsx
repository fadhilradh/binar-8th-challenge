import Image from "next/image";
import { NavItem } from "./NavItem";

const HomepageMain = () => {
  return (
    <section className="bg-main bg-center bg-cover flex flex-col w-full h-screen">
      <header>
        <nav className="flex items-center font-bold text-white justify-between h-16 px-5 md:px-10 bg-black opacity-60">
          <p className="cursor-pointer hover:text-yellow-500 tracking-widest">
            LOGO
          </p>
          <ul className="hidden lg:flex justify-center gap-x-20 md:w-1/2 w-1/3 mr-4">
            <NavItem title="HOME" />
            <NavItem title="GAME" href="#game" />
            <NavItem title="SYSREQ" href="#sysreq" />
            <NavItem title="SUBSCRIBE" href="#subscribe" />
          </ul>
          <ul className="w-auto space-x-10 flex gap-5">
            <NavItem title="Login" href="/login" />
            <NavItem title="Register" href="/register" />
          </ul>
        </nav>
      </header>

      <article className="flex justify-center items-center w-full flex-1">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-white uppercase mb-10 font-bold tracking-widest text-3xl text-center md:text-5xl lg:text-7xl ">
              Play traditional game
            </h1>
            <p className="text-white text-3xl font-semibold text-center tracking-wide mb-10 w-5/6 md:w-full">
              Experience new traditional game play
            </p>
            <a
              href="/game"
              className="w-44 bg-yellow-500 text-center font-bold px-8 py-3 hover:bg-black hover:text-yellow-500 hover:border-yellow-500 border border-yellow-500 rounded-lg"
            >
              PLAY NOW
            </a>
          </div>
        </div>
      </article>

      <div className="flex justify-center text-white text-md w-full h-1/5">
        <div className="flex flex-col items-center">
          <p className="mb-2">THE STORY</p>

          <Image
            width={50}
            height={50}
            src="/../public/assets/down.svg"
            alt="down-arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageMain;
