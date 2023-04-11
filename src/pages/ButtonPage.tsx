import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage: React.FC = () => {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button secondary rounded className='mb-5' onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
