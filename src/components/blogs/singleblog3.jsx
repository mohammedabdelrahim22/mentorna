import blog4 from '../../assets/blogs/blog4.jpg'

import blog5 from '../../assets/blogs/blog5.jpg'
// import blog3 from '../../assets/blogs/blog3.jpg'
import { useTranslation } from 'react-i18next';
const SingleBlog3 = () => {
    const [t] = useTranslation();
    const singleBlog = t("details1", { returnObjects: true });
    return (
        <main className="bg-white w-full pr-1 sm:pr-7 section_details">
            <section className="mb-8 p-[20px]">
                <div className="content_main">
                    <h3 className="title_conent text-[20px] sm:text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title1}
                    </h3>
                    <div className='details flex mt-3 relative'>
                        <div className='date flex relative'>
                            <span className='icon'>
                                <svg fill="#f5a34c" className='w-[30px] h-[22px]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                            </span>
                            <span className='date_span'>May 10, 2023</span>
                        </div>
                        <div className='user flex ml-7'>
                            <span className='icon_user'>
                                <img src={blog4} className='object-cover w-[25px] h-[25px] rounded-[50%] mr-[10px]' />
                            </span>
                            <span className='user_span'>Ramzy Abdelaziz</span>
                        </div>
                    </div>
                    <div className='thumpnal mt-[50px] mb-[50px]'>
                        <img src={blog5} className='object-cover w-[100%] rounded-[20px]' />
                    </div>
                    <p className='text-[#808080] cario mt-[20px]'>
                        {singleBlog[0].desc}
                    </p>
                    <p className='text-[#808080] cario mt-[20px]'>
                        {singleBlog[0].desctitle1}
                    </p>
                    <p className='text-[#808080] cario mt-[20px]'>
                        {singleBlog[0].desctitle2}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desctitle3}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title2}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc2title}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc3title}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title3}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desctitles}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desctitles1}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title4}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desct1}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desct2}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desct3}
                    </p>
                    <div className='thumpnal mt-[50px] mb-[50px]'>
                        <img src={blog5} className='object-cover w-[100%] rounded-[20px]' />
                    </div>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title5}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desct4}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desct5}
                    </p>
                    <div className='grid grid-cols-2 gap-4 mt-6'>
                        <div>
                            <img src={blog5} className='object-cover w-[100%] rounded-[20px]' />
                        </div>
                        <div>
                            <img src={blog5} className='object-cover w-[100%] rounded-[20px]' />
                        </div>
                    </div>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desct6}
                    </p>

                    <ul className='list mt-4'>
                        <li className='text-[#181818] cario'>
                            {singleBlog[0].list1}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list2}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list3}
                        </li>
                        <li className='text-[#181818] cario'>
                            {singleBlog[0].list4}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list5}
                        </li>
                    </ul>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title6}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].listdesc}
                    </p>
                    <ul className='list mt-4'>
                        <li className='text-[#181818] cario'>
                            {singleBlog[0].list6}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list7}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list8}
                        </li>
                        <li className='text-[#181818] cario'>
                            {singleBlog[0].list9}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list10}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list11}
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default SingleBlog3