import {useState} from 'react'
const app =()=>{

  const [count,setCount] = useState(0);
const Add =()=>{

  //interview question 
  if(count < 20){

    setCount(prevCounter => prevCounter+1);
    setCount(prevCounter => prevCounter+1);
    setCount(prevCounter => prevCounter+1);
  }
}
const Sub =()=>{
  if(count >0 ){
    setCount(count-1)
  }
}

  return (
   <>

   <h2>Counter app  </h2>
   value : 
   {count}
   <button onClick={()=>{Add()}}>Increment</button>
   <button onClick={()=>{Sub()}}>Decrement </button>

   </>
  )
}
export default app 