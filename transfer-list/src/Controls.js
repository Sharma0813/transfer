import React from 'react'
import { ArrowLongRightIcon, ArrowLongLeftIcon } from '@heroicons/react/24/outline'

const Controls = ({ transferToRight, transferToLeft, disableLeft, disableRight }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        onClick={transferToRight}
        disabled={disableRight}  
        className="p-2 border rounded hover:bg-gray-200 disabled:opacity-50 transition-colors"
      >
        <ArrowLongRightIcon className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={transferToLeft}
        disabled={disableLeft}  
        className="p-2 border rounded hover:bg-gray-200 disabled:opacity-50 transition-colors"
      >
        <ArrowLongLeftIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  )
}

export default Controls;