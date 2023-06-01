
import Sidebar from './sidebar'
import MainBlog from './mainBlog'
import Footer from '../footer/footer'
import './style.css'
import BlogsNav from './blogsnav.jsx'
const Blogs = () => {


    return (
        <div className='mt-[30px]'>
            <BlogsNav />
            <div className='blogs  flex mt-[100px] p-[10px] sm:p-[20px] flex-wrap sm:flex-nowrap'>
                <div className='w-full sm:w-[70%]'>
                    <MainBlog />
                </div>
                <div className='w-full sm:w-[30%]'>
                    <Sidebar />
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Blogs