import React from "react";
import { useEffect } from "react";
import { useState, useCallback,useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passward, setPassward] = useState("");

  //ref hook 
  const passwardRef = useRef(null);

  const passwardGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassward(pass);
  }, [length, numberAllowed, charAllowed, setPassward]);

  useEffect(() => {
    passwardGenerator();
  }, [length, numberAllowed, charAllowed, passwardGenerator]);

const copyPassward =useCallback(()=>{
//isko abhi banana hai
  passwardRef.current?.select();
  passwardRef.current?.setSelectionRange(0,30);
    //for copying the code 
window.navigator.clipboard.writeText(passward)
},[passward])

  return (
    <div>
      <h2 className="text-4xl text-center text-black">Passward Generator </h2>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-9 text-orange-500 bg-gray-100 ">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passward}
            readOnly
            className="outline-none w-full py-1 px-3"
            placeholder="passward "
            ref={passwardRef}
          />

          <button class="bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0 hover:bg-blue-900" onClick={copyPassward()}>
            Button
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              name=""
              id="charInput"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="charInput"> Length :{length}</label>
          </div>
          <div className="flex item-center gap-x-1 ">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>

          <div className="flex item-center gap-x-1 ">
            <input
              type="checkbox"
              name=""
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput"> Charcter</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
