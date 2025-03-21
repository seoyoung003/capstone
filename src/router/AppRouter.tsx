import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';


const AppRouter: React.FC = () => {
  return (
    <div>
      <Router>
     
        <Routes>  
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
    </Router>
    
    </div>
  );
};

export default AppRouter;