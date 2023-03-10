import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profiles';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo}/>
      <Routes>
        <Route 
          path='/'
          element={<Profile userName='dile2001'/>}
          />
        <Route 
          path='/projects' 
          element={<Projects userName='dile2001'/>}
          />
        <Route 
          path='/projects/:name' 
          element={<ProjectDetail userName='dile2001'/>}
          />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
