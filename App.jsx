import React, { useState } from 'react'



const App = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [image, setImage] = useState('')


  function Formhandler(dets){
    dets.preventDefault();

    setUsers([... users, {name,email,number,image}])
    
    setNumber('')
    setEmail('')
    setName('')
    setImage('')
  }
  return (
    <div className='flex flex-wrap'>
      <form className='bg-amber-500 border-amber-50 gap-1.5 h-30  w-full px-4 py-1.5 flex  justify-between relative' 
      onSubmit={(e)=>{
          Formhandler(e)
        }}>
        <input className=' bg-amber-700 h-14 w-62 rounded-2xl' type="text" placeholder='Enter your name'
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        />
        <input className='bg-blue-400 px-1.5 mr-1.5 h-14 w-62 rounded-2xl'  type="text" placeholder='Enter your email'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />
        <input className='bg-green-400 px-1.5 ml-1.5 h-14 w-62 rounded-2xl' type="number" placeholder='Enter your number'
        value={number}
        onChange={(num)=>{
          setNumber(num.target.value)
        }}
        />
        <input className='bg-yellow-400 px-1.5 ml-1.5 h-14 w-62 rounded-2xl' type="text" placeholder='Enter profile link'
        value={image}
        onChange={(num)=>{
          setImage(num.target.value)
        }}
        />
        <button  className='absolute bottom-2 left-[48%] border-b-gray-800 border py-1 px-2 rounded-3xl cursor-pointer active:scale-0'>Submit</button>
      </form>
      {users.map(function(elem, idx){
        return <div key={idx} className='flex flex-col items-center justify-center h-58 w-58 bg-blue-400 rounded m-3.5'>
          <img className='h-18 w-18 object-cover rounded-4xl mb-5.5' src={elem.image} alt="" />
          <h1 className='uppercase mb-3.5 font-bold text-2xl'>{elem.name}</h1>
          <p className='text-xs font-semibold'>Email: {elem.email}</p>
          <h4 className='py-1.5 font-semibold'>Number: {elem.number}</h4>
          
        </div>
      })}
    </div>
  )
}

export default App