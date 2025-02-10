import React from 'react'
import './addbtn.scss'

const AddBtn = (props) => {

  const handleOnSubmit = (e) => {
   e.preventDefault(); // prevent to refresh the page
   console.log('Data sumbmitted....')
   //add new item and axios.post(`/api/${userID}/...`)
  }

  return (
    <div className='addbtn'>
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new {props.value}</h1>
        <form onSubmit={handleOnSubmit}>
            {
                props.columns
                .filter((item) => item.field != 'id' && item.field !== 'img')
                .map(column => (
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))
            }
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default AddBtn
