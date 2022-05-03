// styles
import './AppCss/reset.css';
import './AppCss/font.css';
import './AppCss/App.css';
import './AppCss/container.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='wraper'>
        <Header />
        <div className='main'>
          <div className="main-content __container">
              @@include('aside_left.html')
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
