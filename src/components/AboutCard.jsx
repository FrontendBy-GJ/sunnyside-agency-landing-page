const AboutCard = ({ title, text, ariaLabel, linkColor }) => {
  return (
    <div className="bg-white px-4 py-20 @3xl:p-16 @7xl:p-28">
      <h2 className="font-Fraunces text-4xl font-black @7xl:text-5xl">
        {title}
      </h2>
      <p className="my-5 font-Barlow text-lg tracking-wide text-slate-400">
        {text}
      </p>
      <a
        onClick={(e) => e.preventDefault()}
        aria-label={`Learn more about ${ariaLabel}`}
        className={`relative z-50 font-Fraunces text-lg font-black uppercase after:absolute after:-inset-x-2 after:bottom-0 after:-z-10 after:h-3 after:translate-y-1 after:rounded after:bg-${linkColor}-300 after:bg-opacity-70 after:transition-colors after:hover:bg-opacity-100`}
        href="#"
      >
        Learn more
      </a>
    </div>
  );
};

export default AboutCard;
