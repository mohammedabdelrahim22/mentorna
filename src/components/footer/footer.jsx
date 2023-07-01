import logo2 from '../../assets/logo/logo2.png'
import './footer.css'
import Face from '../../assets/social/facebook.png'
import telegram from '../../assets/social/telegram.png'
import linkenin from '../../assets/social/linkedin.png'
function Footer() {
    return (
        <div className="main_background py-4 min-h-[18h] mt-10">
            <div className="container mx-auto flex  justify-center">
                <div className="items-center flex text-center  w-[100%] justify-between flex-wrap  sm:text-left p-5">
                    <div className='logo_section'>
                        <img src={logo2} alt="Logo" className="h-[46px] mr-4" />
                    </div>
                    <div className='flex'>
                        <span className='svg_icon mr-[20px]'>
                            <a href='https://t.me/mentorna'>
                                <img src={Face} />
                            </a>
                        </span>
                        <span className='svg_icon mr-[20px]'>
                            <a href='https://www.facebook.com/mentorna'>
                                <img src={telegram} />
                            </a>
                        </span>
                        <span className='svg_icon'>
                            <a href='https://www.linkedin.com/company/mentorna/'>
                                <img src={linkenin} />
                            </a>
                        </span>

                    </div>
                    <div className='cpyright text-white'>
                        <span>Copyright © 2023  Mentorna. All rights reserved.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
