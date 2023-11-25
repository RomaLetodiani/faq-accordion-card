import box from './assets/images/illustration-box-desktop.svg';
import Questions from './components/Questions/Questions';
import Hero from './components/hero/Hero';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <div className="container">
          <Hero />
          <Questions />
        </div>
        {useMediaQuery('(min-width: 769px)') && (
          <img className="box" src={box} alt="box" />
        )}
      </div>
    </div>
  );
}

export default App;
