const QuoteCard = ({ name, job, quote, date, image }) => {
  return (
    <div
      className="
        flex flex-col justify-between
        card
        h-auto
        w-4/5
        rounded-xl
        lg:ml-24
        p-3
        transition
        duration-200
        transform
        ease-in
        hover:scale-105
        hover:animate-pulse
        hover:cursor-pointer
        bg-[#1c1b1b]
      "
    >
      <div className="flex">
        <img
          src={image}
          className="bg-cover bg-center rounded-full w-12 mr-5"
          alt="user-photo"
        />
        <div>
          <p className="tracking-wider text-primary">{name}</p>
          <p className="text-gray-400">{job}</p>
        </div>
        <img
          src="/assets/twitter.svg"
          className="w-5 ml-auto cursor-pointer"
          alt="twitter"
        />
      </div>
      <div className="text-gray-300">{quote}</div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
};

export default QuoteCard;
