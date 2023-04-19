import AccordionPage from './pages/AccordionPage';
import Sidebar from './components/Sidebar';
import DropdownPage from './pages/DropdownPage';
import Route from './components/Route';

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
