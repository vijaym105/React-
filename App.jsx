import React from 'react'
import Card from './Component/Card';


const App = () => {
  const people = [
  {
    username: "vj_codes",
    name: "Vijay Malusare",
    bio: "Frontend dev | MERN learner | Building cool stuff 🚀",
    profilePic: "https://i.pravatar.cc/150?img=12",
    media: 24,
    followers: 1320,
    following: 310
  },
  {
    username: "codewithayush",
    name: "Ayush Sharma",
    bio: "JavaScript | React | Teaching code daily 💻",
    profilePic: "https://i.pravatar.cc/150?img=32",
    media: 58,
    followers: 8450,
    following: 120
  },
  {
    username: "travelwithriya",
    name: "Riya Patel",
    bio: "Solo traveler 🌍 | Capturing moments",
    profilePic: "https://i.pravatar.cc/150?img=47",
    media: 142,
    followers: 21400,
    following: 540
  },
  {
    username: "designbyneel",
    name: "Neel Verma",
    bio: "UI/UX Designer | Figma & Framer 🎨",
    profilePic: "https://i.pravatar.cc/150?img=56",
    media: 36,
    followers: 5600,
    following: 410
  },
  {
    username: "fitlife_karan",
    name: "Karan Singh",
    bio: "Fitness coach | Healthy mind & body 💪",
    profilePic: "https://i.pravatar.cc/150?img=64",
    media: 89,
    followers: 9800,
    following: 290
  }
];

  return (
    <div className='flex flex-row gap-2.5 '>
      {people.map((elem)=>{
      return <Card dets={elem}/> 
})}
    </div>
  )
}

export default App