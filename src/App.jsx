import MultiStepForm from './components/multi/multi';
import Index from './components/index'
import Blogs from './components/blogs/blogs';
import BlogDetails from './components/blogs/blogDetails';
import BlogDetails2 from './components/blogs/blogDetails2';
import BlogDetails3 from './components/blogs/blogDetails3';
import MainCeo from './components/CeoLimist/MainCeo'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app overflow-hidden'>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/MultiStepForm" element={<MultiStepForm />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Blogs/BlogDetails" element={<BlogDetails />} />
          <Route path="/Blogs/BlogDetails2" element={<BlogDetails2 />} />
          <Route path="/Blogs/BlogDetails3" element={<BlogDetails3 />} />
          <Route path="/MainCeo" element={<MainCeo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
