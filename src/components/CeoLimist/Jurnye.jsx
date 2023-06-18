import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instgram from '../../assets/instgram.svg'
import linkdin from '../../assets/linkdin.svg'
import yotupe from '../../assets/yotupe.png'
import ticktook from '../../assets/ticktook.png'
function Jurnye() {
    return (
        <div className="Jurnye mt-[90px]">
            <div className="container_div">
                <div className="title_section  flex justify-center">
                    <div data-aos="fade-up" data-aos-delay="600">
                        <hr className="w-[100px] h-[6px] bg-[#4770ff] m-auto" />
                        <h1 className="text-[50px] text-bold text-[#3a395e] mt-4">
                            follow my journey
                        </h1>
                    </div>

                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-[20px] mt-[30px]">
                    <div className="Jurnye_card p-[20px]" data-aos="fade-down">
                        <img src={facebook} className='object-cover rounded-[20px]' />
                        <h4 className='text-bold text-[#3a395e] text-[30px] ml-4'>Facebook</h4>
                    </div>
                    <div className="Jurnye_card p-[20px]" data-aos="fade-right">
                        <img src={twitter} className='object-cover rounded-[20px]' />
                        <h4 className='text-bold text-[#3a395e] text-[30px] ml-4'>Twitter</h4>
                    </div>
                    <div className="Jurnye_card p-[20px]" data-aos="fade-left">
                        <img src={instgram} className='object-cover rounded-[20px]' />
                        <h4 className='text-bold text-[#3a395e] text-[30px] ml-4'>Instagram</h4>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-[20px]  sm:mt-[10px] mt-[4px]">
                    <div className="Jurnye_card p-[20px]" data-aos="fade-up-left" >
                        <img src={linkdin} className='object-cover rounded-[20px]' />
                        <h4 className='text-bold text-[#3a395e] text-[30px] ml-4'>LinkedIn</h4>
                    </div>
                    <div className="Jurnye_card p-[20px]" data-aos="fade-down-right">
                        <img src={yotupe} className='object-cover  w-[60px] rounded-[20px]' />
                        <h4 className='text-bold text-[#3a395e] text-[30px] ml-4'>YouTube</h4>
                    </div>
                    <div className="Jurnye_card p-[20px]" data-aos="fade-down-left">
                        <img src={ticktook} className='object-cover w-[60px] rounded-[20px]' />
                        <h4 className='text-bold text-[#3a395e] text-[30px] ml-4'>TikTok</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jurnye