import MultiStepForm from './components/multi/multi';
import Index from './components/index'
import Blogs from './components/blogs/blogs';
import BlogDetails from './components/blogs/blogDetails';
import BlogDetails2 from './components/blogs/blogDetails2';
import BlogDetails3 from './components/blogs/blogDetails3';
// import BlogDetails from './components/blogs/blogDetails'
// import { InlineWidget, PopupWidget, } from "react-calendly";
// import Chat from './components/chat'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app overflow-hidden'>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/MultiStepForm" element={<MultiStepForm />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/BlogDetails" element={<BlogDetails />} />
          <Route path="/Blogs/BlogDetails2" element={<BlogDetails2 />} />
          <Route path="/Blogs/BlogDetails3" element={<BlogDetails3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
