// styles
import './AppCss/reset.css';
import './AppCss/font.css';
import './AppCss/App.css';
import './AppCss/container.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AsideUser from './components/AsideUser/AsideUser';

function App() {
  return (
    <div className="App">
      <div className='wraper'>
        <Header />
        <div className='main'>
          <div className="main-content __container">
            <AsideUser />
          </div>

          {/* btn up */}
          <div class="btn-up main__btn-up">
            <div class="btn-up__container">
              <div class="btn-up__arrows">
                <i class="fa-solid fa-angle-up"></i>
                <i class="fa-solid fa-angle-up"></i>
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
