const Card = ({ imgSrc, title, content }) => {
  return (
    <div className='card card-compact max-w-lg bg-base-200 shadow-xl'>
      <figure>
        <img
          className='h-40 w-full object-cover'
          src={imgSrc}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {title}
        </h2>
        <p className='text-lg'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default Card