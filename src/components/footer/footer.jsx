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
                <div className="items-center">
                    <img src={logo2} alt="Logo" className="h-[46px] mr-4" />
                    <div className="flex items-center  justify-center mt-4">
                        <a href="#" className="text-gray-500 hover:text-white mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#fff" d="M17.4 0H6.6C2.964 0 0 2.964 0 6.6v10.8C0 21.036 2.964 24 6.6 24h10.8c3.636 0 6.6-2.964 6.6-6.6V6.6c0-3.636-2.964-6.6-6.6-6.6zM12 18c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6zm4.2-12.6c0 .816-.684 1.5-1.5 1.5s-1.5-.684-1.5-1.5.684-1.5 1.5-1.5 1.5.684 1.5 1.5zM12 7.2c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm4.2 10.2c0 .816-.684 1.5-1.5 1.5s-1.5-.684-1.5-1.5.684-1.5 1.5-1.5 1.5.684 1.5 1.5z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#fff" d="M17.4 0H6.6C2.964 0 0 2.964 0 6.6v10.8C0 21.036 2.964 24 6.6 24h10.8c3.636 0 6.6-2.964 6.6-6.6V6.6c0-3.636-2.964-6.6-6.6-6.6zM12 18c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6zm4.2-12.6c0 .816-.684 1.5-1.5 1.5s-1.5-.684-1.5-1.5.684-1.5 1.5-1.5 1.5.684 1.5 1.5zM12 7.2c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm4.2 10.2c0 .816-.684 1.5-1.5 1.5s-1.5-.684-1.5-1.5.684-1.5 1.5-1.5 1.5.684 1.5 1.5z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <path fill="#fff" d="M17.4 0H6.6C2.964 0 0 2.964 0 6.6v10.8C0 21.036 2.964 24 6.6 24h10.8c3.636 0 6.6-2.964 6.6-6.6V6.6c0-3.636-2.964-6.6-6.6-6.6zM12 18c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6zm4.2-12.6c0 .816-.684 1.5-1.5 1.5s-1.5-.684-1.5-1.5.684-1.5 1.5-1.5 1.5.684 1.5 1.5zM12 7.2c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm4.2 10.2c0 .816-.684 1.5-1.5 1.5s-1.5-.684-1.5-1.5.684-1.5 1.5-1.5 1.5.684 1.5 1.5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
