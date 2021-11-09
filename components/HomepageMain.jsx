import Image from 'next/image'
import NavBar from './NavBar'

const HomepageMain = () => {
  return (
    <section className="max-w-screen-2xl mx-auto bg-main bg-center bg-cover flex flex-col h-screen">
      <NavBar />
      <article className="flex justify-center items-center w-full flex-1">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="shadow-2xl uppercase mb-10 font-bold tracking-wider text-3xl text-center md:text-5xl lg:text-7xl ">
              Play traditional game
            </h1>
            <p className="shadow-2xl text-3xl font-bold text-center tracking-wide mb-10 w-5/6 md:w-full">
              Experience the new traditional gameplay
            </p>
            <a
              href="/game"
              className="w-44 shadow-2xl bg-primary text-center font-bold px-8 py-3 hover:bg-black hover:text-primary hover:border-primary border border-primary rounded-lg"
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
  )
}

export default HomepageMain
