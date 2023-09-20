import React from 'react'
import { Manrope } from "next/font/google";
import Privacy from '@/components/privacypolicy/Privacy';
import Wrapper from '@/components/shared/Wrapper';
import Layout from '@/components/shared/Layout';
const font = Manrope({ subsets: ["latin"] });
const index = () => {
    return (
        <div className={`dark:bg-primary-dark ${font.className}`}>
            <Wrapper>
                <div className=''>
                    <Layout>
                        <div className='border dark:border-primary-blue/20 py-2 px-8 rounded-md mt-10'>
                            <p className='text-[18px] font-[500]  dark:text-primary-blue/20'>Home <span className='dark:text-white text-black'> {'>'} Privacy Policy </span>
                            </p>
                        </div>
                    </Layout>
                    <div className='pb-20'>
                        <Privacy />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default index