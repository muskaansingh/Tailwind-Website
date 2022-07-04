import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Analytics from './Components/Analytics';

function App() {
  return (
    <div>
      <div className='bg-[black]'>
        <Navbar />
        <Content />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
