import React, { Suspense } from 'react';

// styles
import './AppCss/reset.css';
import './AppCss/font.css';
import './AppCss/App.css';
import './AppCss/container.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AsideUser from './components/AsideUser/AsideUser';
import AsideRight from './components/AsideRight/AsideRitght';
import News from './components/News/News';
// import AuthRegister from './components/Auth/AuthRegister/AuthRegister';
// import AuthLogin from './components/Auth/AuthLogin/AuthLogin';
import ProfileContainer from './components/ProfilePage/Profile/ProfileContainer';
import ProfileContentContainer from './components/ProfilePage/ProfileContent/ProfileContentContainer';
import Users from './components/Users/Users';

const AuthRegister = React.lazy(() => import('./components/Auth/AuthRegister/AuthRegister'));
const AuthLogin = React.lazy(() => import('./components/Auth/AuthLogin/AuthLogin'));

function App() {
  return (
    <div className="App">
      <div className='wraper'>
        <Header />
        <div className='main'>
          <Routes>
            <Route path="/profile/:id" element={<ProfileContainer/>} />
          </Routes>
          <div className="main-content __container">
            <AsideUser />
            <div className='content'>
              <div className='content__container'>
                <Routes>
                  <Route path="/news" element={<News/>} />
                  <Route path="/profile/:id" element={<ProfileContentContainer />} />
                </Routes>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/auth/login" element={<AuthLogin />} />
                    <Route path="/auth/register" element={<AuthRegister/>} />
                    <Route path="/users" element={<Users />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
            <AsideRight />
          </div>

          {/* btn up */}
          <div className="btn-up main__btn-up">
            <div className="btn-up__container">
              <div className="btn-up__arrows">
                <i className="fa-solid fa-angle-up"></i>
                <i className="fa-solid fa-angle-up"></i>
              </div>
            </div>
          </div>
        </div>

        <Footer/>

      </div>
    </div>
  );
}


export default App;