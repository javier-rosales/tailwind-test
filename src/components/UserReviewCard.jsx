const UserReviewCard = ({ avatarSrc, name, review }) => {
  return (
    <div className='bg-base-200 rounded-lg p-8 shadow-md'>
      <div className='flex items-center gap-4'>
        <div className='avatar flex'>
          <div className='mask mask-squircle w-12'>
            <img src={avatarSrc} />
          </div>
        </div>
        <p className='text-base font-medium'>
          {name}
        </p>
      </div>
      <div className='divider'></div>
      <p>
        {review}
      </p>
    </div>
  )
}

export default UserReviewCard