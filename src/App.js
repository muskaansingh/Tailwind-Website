import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div className='bg-[black]'>
        <Navbar />
        <Content />
      </div>
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
