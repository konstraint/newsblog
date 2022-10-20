import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Activation } from './components/activation/Activation';
import { Articles } from './components/arcticles/Articles';
import { Header } from './components/header/Header';
import { SignIn } from './components/signin/SignIn';
import { SignUp } from './components/signup/SignUp';
import { getUser } from './redux/action_creators';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/menu/Menu';
import { Blogs } from './components/blogs/Blogs';
import { SelectedArticle } from './components/arcticles/SelectedArticle';
import { SelectedBlog } from './components/blogs/SelectedBlog';
import { StoreState } from './redux/storeTypes';
import { Home } from './components/home/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('jwtAccess');
    console.log('token1=', token);
    if (token) {
      dispatch(getUser());
    } else {
      const { pathname } = window.location;
      if (pathname !== '/signin' && pathname !== '/signup') {
        console.log('token2=', token);
        window.location.href = '/signin';
      }
    }
  }, [localStorage.getItem('jwtAccess')]);

  const idLaunch = useSelector((state: StoreState) => state.articles.idLaunch);

  return (
    <div className="App">
      <Header />
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element = {<Home />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='activate'>
              <Route path='*' element={<Activation />}  />
            </Route>
            <Route path='articles'>
              <Route index element = {<Articles idLaunch={idLaunch} />} />
              <Route path=':id' element = {<SelectedArticle />} />
              <Route path='launch/:idLaunch' element = {<Articles idLaunch={idLaunch} />} />
            </Route>
            <Route path='blogs'>
              <Route index element = {<Blogs />} />
              <Route path=':id' element = {<SelectedBlog />} />
            </Route>       
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
