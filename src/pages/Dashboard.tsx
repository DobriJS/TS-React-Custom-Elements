import Header from './Header';
import Actions from './Actions';
import TileManager from '../components/tiles/TileManager';

const Dashboard: React.FC = () => {
  return (
    <div className='container bg-gray-200 h-screen mx-auto'>
      <Header />
      <Actions />
      <TileManager />
    </div>
  );
};

export default Dashboard;
