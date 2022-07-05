import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div>
      <div className='bg-[black]'>
        <Navbar />
        <Content />
      </div>
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
