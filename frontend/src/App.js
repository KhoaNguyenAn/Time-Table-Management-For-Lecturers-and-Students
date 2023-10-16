import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/Home';

// pages & components

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element={<SignIn />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
