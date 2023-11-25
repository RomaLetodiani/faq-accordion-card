import './mobileHero.scss';
import girl from '../../../assets/images/illustration-woman-online-mobile.svg';
import shadow from '../../../assets/images/bg-pattern-mobile.svg';

const MobileHero = () => {
  return (
    <div>
      <img src={girl} alt="girl" />
      <img src={shadow} alt="shadow" />
    </div>
  );
};

export default MobileHero;
