import React from 'react'
import './addbtn.scss'

const AddBtn = (props) => {
  return (
    <div className='addbtn'>
      <div className="model">
        <span className="close"></span>
        <h1>Add new {props.user}</h1>
        <form>
            {
                props.columns.map(columns => (
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input type={columns.type} placeholder={columns.field} />
                    </div>
                ))
            }
        </form>
      </div>
    </div>
  )
}

export default AddBtn
