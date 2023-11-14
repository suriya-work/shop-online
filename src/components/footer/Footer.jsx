import React from 'react';
import logo from '../../../public/images/logo.png'
import { FooterJsone } from './api';

const Footer = () => {
    return (
        <footer className='bg-[#fff] w-full shadow-2xl mt-5 border-t-[2px] border-t-[#f1eeee]'>
            <div className='container mx-auto flex pt-5'>
                <div >

                    <img src={logo} alt="logo" className='w-[60px]' />
                    <p className='font-bold text-myRed text-[16px] pt-2'>Lorem, ipsum dolor sit amet consectetur</p>
                </div>
                <div className='flex gap-10 mt-8 ml-14 justify-center items-center text-center'>

                    <span className='text-myRed text-[16px]'>Mens</span>
                    <span className='text-myRed text-[16px]'>Mens</span>
                    <span className='text-myRed text-[16px]'>Mens</span>
                    <span className='text-myRed text-[16px]'>Mens</span>
                </div>

            </div>
            <p className='text-myRed text-[14px] pt-2 text-center '>Copyright © 2023.Company Www.Malls-10.Top All Rights Reserved.</p>

        </footer>
        // fixed bottom-0 overflow-hidden 
    )
}

export default Footer
