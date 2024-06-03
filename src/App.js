
import './App.css';
import MainLayout from './Layout/MainLayout';
import MainContent from './components/MainContent';
import Header from './components/Navbar';
import RightSidebar from './components/RightBar';
import Sidebar from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      
<MainLayout>
     <Dashboard/>
</MainLayout>
    </div>
  );
}

export default App;
