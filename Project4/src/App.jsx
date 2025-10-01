import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null)
  // useCallback hook

  const passwordGenerator = useCallback (()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NumberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, NumberAllowed, charAllowed , setPassword])
  // copy to clipboard function
  const copyPasswordToClipboard = useCallback (()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 21)
    passwordRef.current?.alert("copied to clipboard")
  }, [password])
  // here we will use useEffect hook 
  useEffect(()=>{
    passwordGenerator()
  }, [length, NumberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Passwod Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex items-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={NumberAllowed}
            id="numberInput"
            onChange={(e) => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={charAllowed}
            id="CharacterInput"
            onChange={(e) => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="CharacterInput">Characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
