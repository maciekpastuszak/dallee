import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurtpriseMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-grey-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurtpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text black"
          >
            Surprise me
          </button>
        )}
      </div>
    </div>
  )
}

export default FormField