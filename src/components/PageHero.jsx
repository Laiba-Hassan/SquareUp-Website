const PageHero = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <section
      className="relative h-[280px] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div
        className="absolute inset-0 bg-black/55 z-10"
      />

      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center px-5">
        <h1 className="text-white text-3xl md:text-5xl font-medium mb-4">
          {title}
        </h1>

        <p className="text-[#cfcfcf] text-lg leading-7 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero