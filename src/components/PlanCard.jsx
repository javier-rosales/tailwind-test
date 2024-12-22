import IconCheck from './IconCheck'

const PlanCard = ({ title, price, items }) => {
  return (
    <div className='card bg-neutral text-neutral-content shadow-lg overflow-hidden'>
      <div className='card-body relative'>
        <h4 className='card-title mb-5'>
          {title}
        </h4>
        <p className='grow-0 text-4xl font-bold mb-5'>
          {price}
        </p>
        <ul className='flex flex-col gap-4 text-base'>
          {items.map(item => (
            <li
              key={item}
              className='grid grid-cols-[auto,1fr] gap-2 items-center'
            >
              <IconCheck />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlanCard