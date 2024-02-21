import { BoxImage } from '../api/box'
const Box = () => {
    return (
        <div className='container hidden md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 my-12'>
            {
                BoxImage.map((box) => {
                    return (
                        <div key={box.id}>
                            <img className='w-[40px] h-[40px] m-auto' src={box.image} alt="" />
                            <p className='text-[#000] text-center text-[14px]  mt-5'>{box.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Box
