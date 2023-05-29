import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
             <br />
             <h1>To DO List</h1>
             <br/>
             <input type='text' placeholder='Add Item'/>
             <button> + </button>


             <ol>
              <li>Buy Apple</li>
             </ol>
        </div>
      </div>
    </>
  )
}

export default App