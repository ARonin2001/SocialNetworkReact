import React, { Suspense } from 'react';

// styles
import './AppCss/reset.css';
import './AppCss/font.css';
import './AppCss/App.css';
import './AppCss/container.css';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
// import AuthRegister from './components/Auth/AuthRegister/AuthRegister';
// import AuthLogin from './components/Auth/AuthLogin/AuthLogin';
// import ProfileContainer from './components/ProfilePage/Profile/ProfileContainer';
// import ProfileContentContainer from './components/ProfilePage/ProfileContent/ProfileContentContainer';
import Users from './components/Users/Users';
import AsideUserContainer from './components/AsideUser/AsideUserContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import AsideRitghtContainer from './components/AsideRight/AsideRitghtContainer';

const AuthRegister = React.lazy(() => import('./components/Auth/AuthRegister/AuthRegister'));
const AuthLogin = React.lazy(() => import('./components/Auth/AuthLogin/AuthLogin'));
const ProfileContainer = React.lazy(() => import('./components/ProfilePage/Profile/ProfileContainer'));
const ProfileContentContainer = React.lazy(() => import('./components/ProfilePage/ProfileContent/ProfileContentContainer'));

function App() {
  return (
    <div className="App">
      <div className='wraper'>
        <HeaderContainer />
        <div className='main'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/profile/:id" element={<ProfileContainer/>} />
            </Routes>
          </Suspense>

          
          <div className="main-content __container">
            <AsideUserContainer />
            <div className='content'>
              <div className='content__container'>
                <Routes>
                  <Route path="/news" element={<News/>} />
                </Routes>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/profile/:id" element={<ProfileContentContainer />} />
                    <Route path="/auth/login" element={<AuthLogin />} />
                    <Route path="/auth/register" element={<AuthRegister/>} />
                    <Route path="/users" element={<Users />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
            {/* <AsideRitghtContainer /> */}
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