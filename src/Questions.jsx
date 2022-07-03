import React,{useState} from 'react'
import {AiOutlinePlus,AiOutlineLine} from 'react-icons/ai';
function Questions({title,info}) {
    const [Icon, setIcon] = useState(<AiOutlinePlus className='text-white' />);
const [Text, setText] = useState(false)
const ClickHandeler=()=>{
if (Text===false) {
    setIcon(<AiOutlineLine className='text-white'/>)
    setText(true)
} else {
    setIcon(<AiOutlinePlus className='text-white'/>)
    setText(false)
}
}
  return (
    <div className='bg-gray-200 mt-5 py-2 lg:mx-20 mx-3 rounded-md px-4 shadow-lg shadow-gray-300 transition-all '>
        <header  className=' bg-red- flex font-semibold text-lg '>
            <button className=' w-8 h-8 border rounded-3xl flex items-center justify-center bg-gray-700 ' onClick={ClickHandeler}>{Icon}</button>
            <h4 className='ml-auto select-none'>{title}</h4>
        </header>
        {
            Text&&<p className=' mt-5 text-sm' dir='rtl'>{info}</p>
        }
    </div>
  )
}

export default Questions