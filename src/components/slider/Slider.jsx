import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { sliderCards } from '../../constans/constans';
import './slider.css'

function Slider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='slider_partner mt-[60px] pt-[70px] relative  p-[20px]'>
            <div className='pt-2 p-2'>
                <h2 className='text-[60px] text-black  sub_font' data-aos="fade-up">
                    Our Network.
                </h2>
            </div>
            <Carousel responsive={responsive} showDots={true} className='relative' transitionDuration={60}>

                {sliderCards.map((el) => {
                    return (
                        <div className='padding_section' key={el.id}>
                            <div className='overflow-hidden item relative'>
                                <div className='inside_item absolute top-0 bottom-0 flex left-0 justify-center items-center'>
                                    <div className='overlay_section'></div>
                                    <img src={el.image} className='object-cover block w-[100%]  top-0 left-0 h-[100%]' alt="slider" />
                                    <div className='caption'>
                                        <div className='inside_caption'>
                                            <div className='title_option'>
                                                <div className='inner_option max-w-[220px] text-center'>
                                                    <h1 className="text-white recolta text-[40px] block">
                                                        {el.title}
                                                    </h1>
                                                    <div className='inspaction'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default Slider