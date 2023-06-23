import './community.css'
import { images_cards, learn_image, images_cards_div } from '../../constans/constans'
// import learn from '../../assets/community/learn1.jpg'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
function Community() {
    return (
        <div className='Community  mt-[40px] pb-5 bg-[#F8F8F8] min-h-[80vh]' id="Community">
            <div className='container_div'>
                <div className='header_text pt-5' data-aos="fade-up">
                    <p className='font-bold main_color sub_font text-[20px]'>
                        What Makes Us Different
                    </p>
                    <div className='flex justify-between flex-wrap w-full overflow-hidden'>
                        <h3 className='text-[30px] sm:text-[40px] text-black sub_font font-bold pr-5 mt-[20px]'>
                            We Build Communities  <br className='hidden sm:block' />
                            That Supercharge Businesses
                        </h3>
                        <div className='right_side hidden sm:block'>
                            <Link to='/MultiStepForm'>
                                <button className="main_background p-2 rounded-[16px] w-[200px] mt-[3vh] sm:mt-[11vh] md:mt-[3vh] lg:mt-[10vh] text-white font-bold sub_font text-[20px] flex justify-evenly">Get started<span>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title></title>
                                        <g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        </polyline>
                                            <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9">
                                            </line>
                                        </g>
                                        </g>
                                        </g>
                                    </svg>
                                </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <p className='text-[17px] mt-4 opacity-75 hidden sm:block'>
                        Tap into over a decade of marketing, branding, and personal branding expertise. With our vast network of prominent social media influencers, we provide customized growth strategies to achieve your business goals in just three months. Accelerate your success with our proven approach.
                    </p>
                </div>
                <div className='images_div mt-5'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 h-[100%] gap-2 overflow-hidden'>
                        {images_cards.map((im) => {
                            return (
                                <div className='image_1 overflow-hidden h-[100%]' key={im.id}>
                                    <div className='image_inside h-[100%]'>
                                        <img src={im.image} alt="mapingimage" className='object-cover h-[100%] md:w-full' />
                                    </div>
                                </div>
                            )
                        })}
                        <div className='image_1 overflow-hidden  h-[100%] hidden sm:block sm:w-full'>
                            {images_cards_div.map((mai) => {
                                return (
                                    <div className='image_inside h-[100%]' key={mai.id}>
                                        <img src={mai.image} alt="mapingimage" className='object-cover h-[100%] md:w-full' />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    {/* <div className='grid grid-cols-2 sm:grid-cols-3 grid-row-2 gap-2 overflow-hidden'>

                        <div className='image_1 overflow-hidden max-h-[391px]  w-max sm:w-full'>
                            <div className='image_inside'>
                                <img src="" className='object-cover h-[100%] md:w-full' />
                            </div>
                        </div>
                    </div> */}
                    <div className='grid grid-cols-1 sm:grid-cols-1  gap-1 overflow-hidden mt-4'>
                        <div className='image_1 overflow-hidden max-h-[391px]  block sm:hidden sm:w-full'>
                            {images_cards_div.map((el) => {
                                return (
                                    <div className='image_inside' key={el.id}>
                                        <img src={el.image} alt="mapingimage" className='object-cover h-[100%] md:w-full' />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2  gap-1 md:grid-cols-gap-2  w-full relative items-baseline'>
                        <div className='position_class p-3 sm:p-5 bg-[#ddd] rounded-[20px]  w-[77%] sm:w-[60%] lg:w-[400px] md:w-[400px] h-[50px] sm:h-[80px] absolute items-center flex justify-center  justify-around  left-[38px] sm:left-[20%] md:left-[30%] lg:left-[34%] top-[-44%] lg:top-[-20%] items-baseline'>
                            <img src={logo} alt="logo" className='object-cover w-[90px] sm:w-[150px] ' />
                            <h3 className='text-[20px] sm:text-[30px] text-black sub_font'>
                                Community
                            </h3>
                        </div>
                        {learn_image.map((i) => {
                            return (
                                <div className='image_1 overflow-hidden  h-[100%]' key={i.id}>
                                    <div className='image_inside h-[100%]'>
                                        <img src={i.image} alt="mapingimage" className='object-cover h-[100%] w-[100%]' />
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <p className=' text-[14px] mt-4 opacity-80 block sm:hidden w-full'>
                        Tap into over a decade of marketing, branding, and personal branding expertise. With our vast network of prominent social media influencers, we provide customized growth strategies to achieve your business goals in just three months. Accelerate your success with our proven approach.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Community
