import clsx from 'clsx'

const IconCheck = () =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    className='h-5 w-5'>
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
      clipRule='evenodd' />
  </svg>

const TimelineEntry = ({ year, title, content, isEven }) => {
  const entryBodyClasses = clsx('mb-10', {
    'timeline-start md:text-end': isEven,
    'timeline-end': !isEven
  })

  return (
    <li>
      <div className='timeline-middle'>
        <IconCheck />
      </div>
      <div className={entryBodyClasses}>
        <time>
          {year}
        </time>
        <div className='text-lg font-black'>
          {title}
        </div>
        {content}
      </div>
      <hr />
    </li>
  )
}

const Timeline = ({ entries }) => {
  return (
    <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
      {entries.map(({id, ...entry}, index) =>
        <TimelineEntry
          key={id}
          isEven={index % 2 === 0}
          {...entry}
        />
      )}
    </ul>
  )
}

export default Timeline