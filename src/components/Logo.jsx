const Logo = ({
  showText = true,
  iconContainerClassName = "",
}) => {
  return (
    <div className='flex items-center gap-2 shrink-0'>
      <span
        className={`bg-lime-400 rounded-md flex items-center justify-center text-ink-950 ${iconContainerClassName}`}
      >
        <i className='ri-box-3-line '></i>
      </span>

      {showText && (
        <span
          className = 'text-white font-medium tracking-tight'
        >
          SquareUp
        </span>
      )}
    </div>
  );
};

export default Logo