import React from 'react'
import Checkbox from './Checkbox'

const Container = ({items,selectedItems,onselect}) => {
  return (
    <div>
        {items.map(item=>(
            <Checkbox key={item.id} item={item} isChecked={selectedItems.includes(item.id)} onChange={()=> onselect(item.id)}/>
        ))}
    </div>
  )
}

export default Container