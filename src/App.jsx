import React from 'react'
import Questions from './Questions';
import Data from './data';
function App() {
  return (
 <React.Fragment>

     <div className='flex items-center justify-center h-screen px-0 py-0 lg:px-96 lg:py-40'>
      <div className='bg-gray-100 shadow-lg   shadow-gray-300 w-full h-full rounded-xl'>
      <h1 className='text-center font-semibold text-xl mt-6'>ایا سوالی برایتان پیش امده ؟</h1>
      <div id='info' className=''>
     
{
  Data.map(e=> <Questions key={e.id} {...e}/>)
}
      </div>
      </div>
      </div>
 </React.Fragment>
  )
}

export default App