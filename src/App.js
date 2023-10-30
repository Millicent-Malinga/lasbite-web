import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import BiteDetails from './components/biteDetails';
import Message from './components/messages';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Message />} path="/messages" />
          <Route element={<Profile />} path="/saved" />
          <Route element={ <BiteDetails /> } path="/bite/:id" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
