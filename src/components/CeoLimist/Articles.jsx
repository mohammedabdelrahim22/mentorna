import React from 'react'
import Arecle1 from '../../assets/artecle1.png'
import Arecle2 from '../../assets/artecle2.jpeg'
import Arecle3 from '../../assets/arecle3.png'
import Arecle4 from '../../assets/artecle4.png'
import Arecle5 from '../../assets/artecle5.png'
import Arecle6 from '../../assets/artecel6.png'
function Articles() {
    return (
        <div className=' articles mt-[70px]'>
            <div className='container_div'>
                <div className="title_section">
                    <hr className="w-[100px] h-[6px] bg-[#4770ff]" />
                    <h1 className="text-[50px] text-bold text-[#3a395e] mt-4">
                        latest articles
                    </h1>
                </div>
                <div className='grid_section mt-[40px]'>
                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 text-center'>
                        <div className='card_Arecle'>
                            <div className='image_section w-[100]  h-[262px;]'>
                                <img src={Arecle1} className='w-[100] d-inline-block h-[100%] object-cover' />
                            </div>
                            <div className='text_side p-[25px] mb-[30px]'>
                                <h1 className='text-[#3a395e] text-[20px]'>From $0 to $150M valuation in 3.5 years without any funding</h1>
                            </div>
                        </div>
                        <div className='card_Arecle'>
                            <div className='image_section w-[100] h-[262px;]'>
                                <img src={Arecle2} className='w-[100] d-inline-block h-[100%] object-cover' />
                            </div>
                            <div className='text_side p-[25px] mb-[30px]'>
                                <h1 className='text-[#3a395e] text-[20px]'>From $0 to $150M valuation in 3.5 years without any funding</h1>
                            </div>
                        </div>
                        <div className='card_Arecle '>
                            <div className='image_section w-[100] h-[262px;]'>
                                <img src={Arecle3} className='w-[100] d-inline-block  object-cover' />
                            </div>
                            <div className='text_side p-[25px] mb-[30px]'>
                                <h1 className='text-[#3a395e] text-[20px]'>From $0 to $150M valuation in 3.5 years without any funding</h1>
                            </div>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 text-center sm:mt-[50px] mt-[2px]'>
                        <div className='card_Arecle'>
                            <div className='image_section w-[100] h-[262px;]'>
                                <img src={Arecle4} className='w-[100] d-inline-block  object-cover' />
                            </div>
                            <div className='text_side p-[25px] mb-[30px]'>
                                <h1 className='text-[#3a395e] text-[20px]'>From $0 to $150M valuation in 3.5 years without any funding</h1>
                            </div>
                        </div>
                        <div className='card_Arecle'>
                            <div className='image_section w-[100] h-[262px;]'>
                                <img src={Arecle5} className='w-[100] d-inline-block object-cover' />
                            </div>
                            <div className='text_side p-[25px] mb-[30px]'>
                                <h1 className='text-[#3a395e] text-[20px]'>From $0 to $150M valuation in 3.5 years without any funding</h1>
                            </div>
                        </div>
                        <div className='card_Arecle'>
                            <div className='image_section w-[100] h-[262px;]'>
                                <img src={Arecle6} className='w-[100] d-inline-block object-cover' />
                            </div>
                            <div className='text_side p-[25px] mb-[30px]'>
                                <h1 className='text-[#3a395e] text-[20px]'>From $0 to $150M valuation in 3.5 years without any funding</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles