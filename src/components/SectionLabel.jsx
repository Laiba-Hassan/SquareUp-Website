const SectionLabel = ({ title, description}) => {
  return (
    <div className='text-center mx-auto'>
      <h2 className="text-3xl md:text-4xl font-medium text-white mt-2 mb-4">{title}</h2>
      {description && <p className="text-white/50">{description}</p>}
    </div>
  )
}
 
export default SectionLabel
