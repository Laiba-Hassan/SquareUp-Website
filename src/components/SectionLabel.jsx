const SectionLabel = ({ title, description, image }) => {
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

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-5 text-center">
        <h2 className="text-2xl md:text-5xl font-medium text-white mb-4 leading-tight">
          {title}
        </h2>

        {description && (
          <p className="max-w-5xl text-sm md:text-lg leading-6 md:leading-7 text-[#cfcfcf]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionLabel