import React from 'react'

const Title = ({ children }) => {
    return (
        <div className="my-20 flex justify-center items-center flex-col">
            <h1 className="md:text-[2rem] text-[1rem] ">{children}</h1>
            <div className="flex flex-col">
                <div className="w-[80px] h-[2px] bg-red-500 mt-1 ml-2"></div>
                <div className="w-[80px] h-[2px] bg-red-500 mt-2"></div>
            </div>
        </div>
    )
}

export default Title
