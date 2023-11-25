import './mobileHero.scss';
import girl from '../../../assets/images/illustration-woman-online-mobile.svg';
import shadow from '../../../assets/images/bg-pattern-mobile.svg';

const MobileHero = () => {
  return (
    <div className="mobile-images-div">
      <img className="mobile-girl" src={girl} alt="girl" />
      <img className="mobile-shadow" src={shadow} alt="shadow" />
    </div>
  );
};

export default MobileHero;
