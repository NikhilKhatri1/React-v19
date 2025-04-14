import React, { useReducer } from 'react'

const initialState = {
  textFlag: false,
  styleChangeFlag: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ShowText":
      return {
        ...state,
        textFlag: true
      }
    case "HideText":
      return {
        ...state,
        textFlag: false
      }
    case "ToggleStyle":
      return {
        ...state,
        styleChangeFlag: !state.styleChangeFlag
      }
  }
}

const UseReducerrHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 className={`${state.textFlag ? "block" : "hidden"} ${state.styleChangeFlag ? "text-black" : "text-red-500"}`}>This is Text to be Shown and Hide and Change color on click</h1>
      <div className='mt-5'>
        <button className='bg-gray-300 p-2 rounded-lg border-gray-800 ms-2' onClick={() => dispatch({ type: "ShowText" })}>Show Text</button>
        <button className='bg-gray-300 p-2 rounded-lg border-gray-800 ms-2' onClick={() => dispatch({ type: "HideText" })}>Hide Text</button>
        <button className='bg-gray-300 p-2 rounded-lg border-gray-800 ms-2' onClick={() => dispatch({ type: "ToggleStyle" })}>Toggle Style Change</button>
      </div>
    </div>
  )
}

export default UseReducerrHook