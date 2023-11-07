import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn'; 
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path="/" element={<SignIn />} /> {/* Always render the SignIn component */}
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
