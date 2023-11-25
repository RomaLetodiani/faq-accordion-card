import girl from '../../assets/images/illustration-woman-online-desktop.svg';
import shadow from '../../assets/images/bg-pattern-desktop.svg';
import MobileHero from './mobileHero/MobileHero';
import useMediaQuery from '../../hooks/useMediaQuery';
import './hero.scss';
const Hero = () => {
  return (
    <>
      {useMediaQuery('(min-width: 769px)') && (
        <div className="images-div">
          <img className="girl" src={girl} alt="girl" />
          <img className="shadow" src={shadow} alt="shadow" />
        </div>
      )}
      {useMediaQuery('(max-width: 769px)') && <MobileHero />}
    </>
  );
};

export default Hero;
