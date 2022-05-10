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
import AuthRegister from './components/Auth/AuthRegister/AuthRegister';
import AuthLogin from './components/Auth/AuthLogin/AuthLogin';

function App() {
  return (
    <div className="App">
      <div className='wraper'>
        <Header />
        <div className='main'>
          <div className="main-content __container">
            <AsideUser />
            <div className='content'>
              <div className='content__container'>
                <Routes>
                  <Route path="/" element={<News/>} />
                  <Route path="/auth/login" element={<AuthLogin />} />
                  <Route path="/auth/register" element={<AuthRegister/>} />
                </Routes>
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