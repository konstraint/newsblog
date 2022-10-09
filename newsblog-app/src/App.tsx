import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signin/SignIn';
import { SignUp } from './components/signup/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element = {
              <div>
                  <h1>home page</h1>
                  <nav>
                    <Link to='/'>Home</Link>
                    <Link to='signup'>SignUp</Link>
                    <Link to='signin'>SignIn</Link>
                  </nav>
              </div>} 
            />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
