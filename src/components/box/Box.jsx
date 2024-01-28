import { BoxImage } from '../api/box'
const Box = () => {
    return (
        <div className='container mx-uto  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 my-12'>
            {
                BoxImage.map((box) => {
                    return (
                        <div key={box.id}>
                            <img className='w-[48px] h-[48px] m-auto' src={box.image} alt="" />
                            <p className='text-[#000] text-center text-[16px] font-bold mt-7'>{box.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Box
