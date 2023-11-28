import React, { useState } from 'react'


const App = () => {
  const [Color, setColor ] =useState('green');
  return (
    <div>
     <div className='text-red-700 w-full h-screen  spac bg-black' style={{backgroundColor:Color}}>This is backgrounjknkjnd</div>

<div className="flex m-4 p-4 space-x-14 ">
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setColor('red')}>
red
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setColor('black')}>
  black
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setColor('pink')}>
  pink
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setColor('olive')}>
  Blue
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setColor('grey')}>
  Grey
</button>
</div>
    </div>
  )
}

export default App
