import logo2 from '../../assets/logo/logo2.png'
import './footer.css'
function Footer() {
    return (
        // <div className='footer min-h-[20vh] main_background mt-[80px]'>
        //     <div className='logo w-full flex justify-center pt[60px]'>
        //         <img src={logo2} className='oject-cover h-[297px] footer_logp' />
        //     </div>
        // </div>
        <div className="main_background py-4 min-h-[18h] mt-10">
            <div className="container mx-auto flex  justify-center">
                <div className="items-center flex text-center  w-[100%] justify-between flex-wrap  sm:text-left p-5">
                    <div className='logo_section'>
                        <img src={logo2} alt="Logo" className="h-[46px] mr-4" />
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
