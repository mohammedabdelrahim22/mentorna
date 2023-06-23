import logo2 from '../../assets/logo/logo2.png'
import './footer.css'

function Footer() {
    return (
        <div className="main_background py-4 min-h-[18h] mt-10">
            <div className="container mx-auto flex  justify-center">
                <div className="items-center flex text-center  w-[100%] justify-between flex-wrap  sm:text-left p-5">
                    <div className='logo_section'>
                        <img src={logo2} alt="Logo" className="h-[46px] mr-4" />
                        <div className='flex w-[100px] justify-evenly mt-2 flex-wrap'>
                            <span className='svg_icon'>
                                <a href='https://t.me/mentorna'>
                                    <svg stroke="currentColor" fill="#ffff" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                                </a>
                            </span>
                            <span className='svg_icon'>
                                <a href='https://www.facebook.com/mentorna'>
                                    <svg stroke="currentColor" fill="#ffff" stroke-width="0" viewBox="0 0 320 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                </a>
                            </span>
                            <span className='svg_icon'>
                                <a href='https://www.linkedin.com/company/mentorna/'>
                                    <svg stroke="currentColor" fill="#ffff" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                </a>
                            </span>

                        </div>
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
