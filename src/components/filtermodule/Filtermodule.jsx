import React from 'react'
import { Link } from 'react-router-dom'

const Filtermodule = ({ searchMyData }) => {
    return (
        <>
            {searchMyData && searchMyData.length > 0 && (
                <div className='!bg-[#ffff] !opacity-100 md:w-[90%] md:top-[7%] w-[95%] top-[8%] lg:w-[40%] z-50 h-[900px] shadow-lg fixed right-0 lg:top-[11%] overflow-y-auto '>
                    {searchMyData.map((search) => {
                        return (
                            <div className='flex items-center my-10'>
                                <div className='w-[100px] h-[100px] mx-5'>
                                    <Link to={`/products/${search.id}`}>
                                        <img src={search.image} alt="" className='w-[100px] h-[100px]' />
                                    </Link>
                                </div>
                                <p className='text-center truncate'>{search.title}</p>
                            </div>
                        )
                    })}

                </div>

            )}

        </>

    )
}

export default Filtermodule
