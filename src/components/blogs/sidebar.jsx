import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import blog1 from '../../assets/blogs/blog1.png'
import blog2 from '../../assets/blogs/blog2.png'
import blog3 from '../../assets/blogs/blog3.png'
const Sidebar = () => {
    const [t] = useTranslation();
    const saidbar = t("saidbar", { returnObjects: true });
    return (
        <aside className="bg-white w-full shadow-xl p-[40px]">
            <div className="latest_title mt-5">

                <h2 className="text-black text-[23px]  cario" >
                    {saidbar[0].title}
                </h2>
            </div>

            <section className="flex mt-8">
                <img src={blog1} alt="صورة 3" className="w-[80px] h-[80px] object-cover mr-4" />
                <div className='padd_div'>
                    <Link to="/Blogs/BlogDetails">
                        <a href='#' className=''>
                            <h5 className="text-[#2e2d2d] text-[17px] latset cario">
                                {saidbar[0].sidemain1}
                            </h5>
                        </a>
                    </Link>
                    <div className='flex relative mt-3'>
                        <span className='icon'>
                            <svg fill="#f5a34c" className='w-[30px] h-[22px]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path>
                                </g>
                            </svg>
                        </span>
                        <span className='date_span cario'>
                            May 10, 2023
                        </span>
                    </div>
                </div>
            </section>
            <hr className="  hr_border mt-4" />

            <section className="flex mt-8">
                <img src={blog2} alt="صورة 3" className="w-[80px] h-[80px] object-cover mr-4" />
                <div className='padd_div'>
                    <Link to="/Blogs/BlogDetails2">
                        <a href='#' className=''>
                            <h5 className="text-[#2e2d2d] text-[17px] latset cario">
                                {saidbar[0].sidemain2}
                            </h5>
                        </a>
                    </Link>
                    <div className='flex relative mt-3'>
                        <span className='icon'>
                            <svg fill="#f5a34c" className='w-[30px] h-[22px]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path>
                                </g>
                            </svg>
                        </span>
                        <span className='date_span cario'>
                            May 17, 2023
                        </span>
                    </div>
                </div>
            </section>
            <hr className="  hr_border mt-4" />

            <section className="flex mt-8">
                <img src={blog3} alt="صورة 3" className="w-[80px] h-[80px] object-cover mr-4" />
                <div className='padd_div'>
                    <Link to="/Blogs/BlogDetails3">
                        <a href='#' className=''>
                            <h5 className="text-[#2e2d2d] text-[17px] latset cario">
                                {saidbar[0].sidemain3}
                            </h5>
                        </a>
                    </Link>
                    <div className='flex relative mt-3'>
                        <span className='icon'>
                            <svg fill="#f5a34c" className='w-[30px] h-[22px]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path>
                                </g>
                            </svg>
                        </span>
                        <span className='date_span cario'>
                            May 25, 2023
                        </span>
                    </div>
                </div>
            </section>
            <hr className="  hr_border mt-4" />
        </aside>
    );
};


export default Sidebar