import React, { useState } from 'react'
import Container from './Container'
import Controls from './Controls'
import { items } from './data'

const TransferList = ({ initialItems = items }) => {
    const [leftItems, setLeftItems] = useState(initialItems)
  const [rightItems, setRightItems] = useState([])
  const [selectedLeft, setSelectedLeft] = useState([])
  const [selectedRight, setSelectedRight] = useState([])

  const handleSelectLeft = (id) => {
    setSelectedLeft((prev) =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const handleSelectRight = (id) => {
    setSelectedRight((prev) =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const transferToRight = () => {
    const newLeftItems = leftItems.filter(item => !selectedLeft.includes(item.id))
    const newRightItems = [...rightItems, ...leftItems.filter(item => selectedLeft.includes(item.id))]
    setLeftItems(newLeftItems)
    setRightItems(newRightItems)
    setSelectedLeft([])
  }

  const transferToLeft = () => {
    const newRightItems = rightItems.filter(item => !selectedRight.includes(item.id))
    const newLeftItems = [...leftItems, ...rightItems.filter(item => selectedRight.includes(item.id))]
    setRightItems(newRightItems)
    setLeftItems(newLeftItems)
    setSelectedRight([])
  }

  return (
    <div className="flex items-center gap-4">
      <Container items={leftItems} selectedItems={selectedLeft} onSelect={handleSelectLeft} />
      <Controls
        transferToRight={transferToRight}
        transferToLeft={transferToLeft}
        disableLeft={!selectedLeft.length}
        disableRight={!selectedRight.length}
      />
      <Container items={rightItems} selectedItems={selectedRight} onSelect={handleSelectRight} />
    </div>
  )
}

export default TransferList
