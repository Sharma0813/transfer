import React from 'react'

const Checkbox = ({item,isChecked,onChange}) => {
  return (
    <div>
        <input type='checkbox' checked={isChecked} onChange={onChange} />
        {item.name}
    </div>
  )
}

export default Checkbox