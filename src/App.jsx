import MultiStepForm from './components/multi/multi';
import Index from './components/index'

// import { InlineWidget, PopupWidget, } from "react-calendly";
// import Chat from './components/chat'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app overflow-hidden'>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/MultiStepForm" element={<MultiStepForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
