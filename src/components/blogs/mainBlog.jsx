// import blog from '../../assets/blogs/blog.jpg'
// import man from '../../assets/blogs/man.svg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { Animated } from "react-animated-css"
import { useState, useEffect } from 'react';
// import arrow from '../../assets/blogs/arrow.svg'
const MainBlog = () => {
    const [t] = useTranslation();
    const articles = t("articles", { returnObjects: true });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('blog');
            if (section) {
                const rect = section.getBoundingClientRect();
                const isSectionVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsVisible(isSectionVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <main className="bg-white  pr-1 sm:pr-7 " id="blog">
            <Animated animationIn="bounceInUp" isVisible={isVisible} animationInDuration={2000}>
                {articles.map((article) => {
                    return (
                        <section className="mb-8  shadow-xl section_on_hover p-[20px]" key={article.id}>
                            <div className="inner flex flex-wrap sm:flex-nowrap">
                                <div className="rounded-md  w-full sm:w-[50%] mr-[1px] sm:mr-[30px]">
                                    <div className="w-full h-[250px]  relative rounded-md before_image overflow-hidden  block">
                                        <img src={article.mainIamage} className="w-full h-full object-cover rounded-md scale_image" alt="img" />
                                    </div>
                                </div>
                                <div className="w-full sm:w-[50%]">
                                    <Link to={article.link} className=''>
                                        <h5 className="text-[#2e2d2d] text-[16px] sm:text-[20px] hover_link cario">
                                            {article.title}
                                        </h5>
                                    </Link>

                                    <div className='details flex mt-3 relative'>
                                        <div className='date flex relative'>
                                            <span className='icon'>
                                                <svg fill="#f5a34c" className='w-[30px] h-[22px] ' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                                            </span>
                                            <span className='date_span'>
                                                {article.date}

                                            </span>
                                        </div>
                                        <div className='user flex ml-7'>
                                            <span className='icon_user'>
                                                <img src={article.image} className='object-cover w-[24px] h-[25px] rounded-[50%] mr-4' />
                                            </span>
                                            <span className='user_span cario'>{article.user}</span>
                                        </div>
                                    </div>
                                    <div className='pragarph mt-5'>
                                        <p className='text-[#808080] text-[16px] pr-[10px] sm:pr-[50px] cario'>
                                            {article.desc}
                                        </p>
                                    </div>
                                    <div className='button_section mt-10'>
                                        <Link to={article.link} className=''>
                                            <button className='w-[200px] arrow_button h-[50px] cario text-[18px] rounded-[10px] flex p-[10px] justify-center items-center'>
                                                {article.button}
                                                <svg viewBox="0 0 24 24" className='w-[20px] ml-2 svg rotate' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill=""></path> </g></svg>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )

                })}
            </Animated>
        </main>
    );
};

export default MainBlog 