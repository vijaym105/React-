import React from 'react'
import Counts from './Counts'

const Card = ({ dets, data }) => {
  return (

    <div className='h-80 w-68 bg-gray-500  m-2.5 flex flex-col items-center rounded-2xl shadow-(2px 2px 5px bg-gray-500)'>
      <img src="https://plus.unsplash.com/premium_photo-1675073085303-9c7c624b8c24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJnfGVufDB8fDB8fHww" alt="" className='h-20 w-full object-cover rounded-2xl'/>
      <img src={dets.profilePic} alt="" className='h-14 w-14  rounded-full object-cover py-0.5 m-3 absolute top-10' />
      <h2 className='text-center mt-6'>@{dets.username}</h2>
      <h1 className='text-center font-semibold py-0'>{dets.name}</h1>
      <p className='text-center py-2.5'>{dets.bio}</p>
      <div className='flex gap-2.5 py-3.5' >
        <Counts label="Posts" count={dets.media} />
        <Counts label="Followers" count={dets.followers} />
        <Counts label="Following" count={dets.following} />
      </div>
    </div>
  )
}

export default Card