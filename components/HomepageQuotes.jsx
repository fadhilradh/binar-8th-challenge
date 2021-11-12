import QuoteCard from './QuoteCard'

const HomepageQuotes = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex md:flex-row col h-auto md:h-screen bg-quotes bg-center bg-cover px-7 py-20 md:p-20 lg:p-32 tracking-wider">
      <div className="flex col items-center md:items-start justify-center text-white h-full md:w-1/2 lg:w-full space-y-10 mb-12">
        <h1 className="text-3xl md:text-6xl">TOP SCORES</h1>
        <p className="font-sans w-full lg:w-1/2 text-center md:text-left">
          This top score from various games provided on this platform
        </p>
        <button
          className="p-3 bg-primary w-1/3 md:w-40 rounded-sm text-black hover:bg-black hover:text-primary hover:border-primary border border-transparent"
          href=""
        >
          see more
        </button>
      </div>

      <div
        className="flex col justify-center items-center md:items-end lg:items-baseline w-full lg:w-1/2 space-y-10"
        id="tweets"
      >
        <QuoteCard
          name="Evan Lahti"
          job="PC Gamer"
          quote='“One of my gaming highlights of the year."'
          date="Jan 12, 2018"
          image="/photos/image.png"
        />

        <QuoteCard
          name="Jada Griffin"
          job="Nerdreactor"
          quote="“The next big thing in the world of streaming and survival games. ”"
          date="December 21, 2018"
          image="/photos/image-1.png"
        />

        <QuoteCard
          name="Aaron Williams"
          job="Uproxx"
          quote="“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous ”"
          date="December 24, 2018"
          image="/photos/image 8.png"
        />
      </div>
    </section>
  )
}

export default HomepageQuotes
