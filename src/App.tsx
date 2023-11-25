import box from './assets/images/illustration-box-desktop.svg';
import Questions from './components/Questions/Questions';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div>
      <div>
        <div>
          <Hero />
          <Questions />
        </div>
        <img src={box} alt="box" />
      </div>
    </div>
  );
}

export default App;
