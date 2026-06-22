const Logo = ({
  showText = true,
  iconContainerClassName = "",
}) => {
  return (
    <div className='flex items-center gap-2 shrink-0'>
      <span
        className={`w-10 h-10 rounded bg-lime-400 flex items-center justify-center text-ink-950 text-2xl ${iconContainerClassName}`}
      >
        <i className='ri-box-3-line '></i>
      </span>

      {showText && (
        <span
          className = 'text-white font-semibold tracking-tight'
        >
          SquareUp
        </span>
      )}
    </div>
  );
};

export default Logo