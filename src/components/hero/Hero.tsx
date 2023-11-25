import girl from '../../assets/images/illustration-woman-online-desktop.svg';
import shadow from '../../assets/images/bg-pattern-desktop.svg';
import MobileHero from './mobileHero/MobileHero';
const Hero = () => {
  return (
    <div>
      <div>
        <img src={girl} alt="girl" />
        <img src={shadow} alt="shadow" />
      </div>
      <MobileHero />
    </div>
  );
};

export default Hero;
