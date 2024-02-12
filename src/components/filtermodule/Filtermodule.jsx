import { Link } from 'react-router-dom'

const Filtermodule = ({ searchMyData }) => {
    return (
        <>
            {searchMyData && searchMyData.length > 0 && (
                <div className="bg-white w-[92%] h-[450px] lg:w-[28%] lg:h-[450px] shadow-2xl border rounded-md  absolute z-[99] lg:left-[300px] lg:top-[80px]  overflow-y-scroll scrollbar-hide">
                    {searchMyData.map((search , index) => {
                        return (
                            <div key={index} className='flex items-center my-10'>
                                <div className='w-[100px] h-[100px] mx-5'>
                                    <Link to={`/products/${search.id}`}>
                                        <img src={search.image} alt="" className='w-full h-full' />
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
