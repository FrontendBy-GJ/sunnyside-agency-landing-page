const Testimonial = ({ img, quote, name, jobTitle }) => {
  return (
    <div className="text-center @5xl:max-w-xs">
      <img
        src={img}
        alt={name}
        className="mx-auto aspect-square w-16 rounded-full"
      />
      <p className="mt-5 font-Barlow text-slate-600">{quote}</p>
      <span className="mt-6 block font-Fraunces text-lg font-black">
        {name}
      </span>
      <span className="mt-2 block font-Barlow text-slate-400">{jobTitle}</span>
    </div>
  );
};

export default Testimonial;
