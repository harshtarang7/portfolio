import React from 'react'

export default function ProjectTab({name , onClick, isSelected}) {
    const buttonStyles=isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <div>
      <button className={`${buttonStyles} rounded-full border-2  px-6 py-3 text-xl cursor-pointer`}
      onClick={()=>onClick(name)}>
        {name}
     
      </button>
    </div>
  )
}
