import { useState } from 'react'


function App() {
  const [color , setColor] = useState("#FFB5A7")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12'>
        <div className=' flex flex-wrap justify-center px-10 py-10 rounded-3xl gap-3 border-white'>
          <button onClick={()=>setColor("Red")} className='outline-none px-4 rounded-3xl border-2 border-white hover:scale-125 duration-200'
          style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>setColor("Yellow")} className='outline-none px-4 rounded-3xl border-2 border-white hover:scale-125 duration-200'
          style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 rounded-3xl border-2 border-white hover:scale-125 duration-200'
          style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={()=>setColor("black")} className='text-white outline-none px-4 rounded-3xl border-2 border-white hover:scale-125 duration-200'
          style={{backgroundColor: "black"}}>black</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 rounded-3xl border-2 border-white hover:scale-125 duration-200'
          style={{backgroundColor: "green"}}>green</button>
          <button onClick={()=>setColor("purple")} className='outline-none px-4 rounded-3xl border-2 border-white hover:scale-125 duration-200'
          style={{backgroundColor: "purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
