
import blog1 from '../../assets/blogs/blog1.png'
import blog4 from '../../assets/blogs/blog4.jpg'
import { useTranslation } from 'react-i18next';
const SingleBlog = () => {
    const [t] = useTranslation();
    const singleBlog = t("singleBlog", { returnObjects: true });
    return (
        <main className="bg-white w-full pr-1 sm:pr-7 section_details">
            <section className="mb-8 p-[20px]">
                <div className="content_main">
                    <h3 className="title_conent text-[20px] sm:text-[30px] text-black mt-3 cario">
                        {singleBlog[0].detailsblogTitle}
                    </h3>
                    <div className='details flex mt-3 relative'>
                        <div className='date flex relative'>
                            <span className='icon'>
                                <svg fill="#f5a34c" className='w-[30px] h-[22px]' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                            </span>
                            <span className='date_span'>May 17, 2023</span>
                        </div>
                        <div className='user flex ml-7'>
                            <span className='icon_user'>
                                <img src={blog4} className='object-cover w-[25px] h-[25px] rounded-[50%] mr-[10px]' />
                            </span>
                            <span className='user_span'>Ramzy Abdelaziz</span>
                        </div>
                    </div>
                    <div className='thumpnal mt-[50px] mb-[50px]'>
                        <img src={blog1} className='object-cover w-[100%] rounded-[20px]' />
                    </div>
                    <p className='text-[#808080] cario'>
                        {singleBlog[0].detailsblogdesc1}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].detailsblogdesc2}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title2}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].detailsblogdesc3}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title3}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].detailsblogdesc4}
                    </p>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].detailsblogdesc5}
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
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list6}
                        </li>
                    </ul>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].detailsblogdesc6}
                    </p>
                    <ul className='list mt-4'>
                        <li className='text-[#181818] cario'>
                            {singleBlog[0].list7}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list8}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list9}
                        </li>
                        <li className='text-[#181818] cario'>
                            {singleBlog[0].list10}
                        </li>
                        <li className='mt-3 text-[#181818] cario'>
                            {singleBlog[0].list11}
                        </li>
                    </ul>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title4}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].detailsblogdesc10}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title6}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc6}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title7}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc7}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title8}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc8}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title9}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc9}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title10}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc10}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title11}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc11}
                    </p>
                    <h3 className="title_conent text-[30px] text-black mt-3 cario">
                        {singleBlog[0].title12}
                    </h3>
                    <p className='mt-[20px] text-[#808080] cario'>
                        {singleBlog[0].desc12}
                    </p>
                </div>
            </section>
        </main>
    )
}

export default SingleBlog