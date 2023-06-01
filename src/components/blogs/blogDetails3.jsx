import Sidebar from './sidebar'
import SingleBlog3 from './singleblog3'
import Footer from '../footer/footer'
import BlogsNav from './blogsnav'
const BlogDetails3 = () => {
    return (
        <div className='mt-[30px]'>
            <BlogsNav />
            <div className='blogs  flex mt-[100px] p-[10px] sm:p-[20px] flex-wrap sm:flex-nowrap'>
                <div className='w-full sm:w-[70%]'>
                    <SingleBlog3 />
                </div>
                <div className='w-full sm:w-[30%]'>
                    <Sidebar />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BlogDetails3