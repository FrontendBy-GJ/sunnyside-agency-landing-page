const AboutCard = ({ title, text, ariaLabel, linkColor, img, alt }) => {
  return (
    <div className="flex flex-col-reverse text-center">
      <div className="px-4 py-20">
        <h2 className="font-Fraunces text-4xl font-black">{title}</h2>
        <p className="my-5 font-Barlow text-lg tracking-wide text-slate-400">
          {text}
        </p>
        <a
          aria-label={`Learn more about ${ariaLabel}`}
          className={`relative font-Fraunces text-lg font-black uppercase after:absolute after:-inset-x-2 after:bottom-0 after:-z-10 after:h-3 after:translate-y-1 after:rounded after:bg-${linkColor}-300/50 after:transition-colors after:hover:bg-${linkColor}-300`}
          href="#"
        >
          Learn more
        </a>
      </div>
      <img src={img} alt={alt} />
    </div>
  );
};

export default AboutCard;
