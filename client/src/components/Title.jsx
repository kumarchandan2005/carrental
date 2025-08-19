import React from 'react'

const Title = ({title,subTitle,align}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && " md:items-start md:text-left"}`}>
       <h1>{title}</h1>
       <p className='text-sm md:text-base text-gray-5000/90 mt-2 max-w-156'>{subTitle}</p> 
    </div>
  )
}

export default Title