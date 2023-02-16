import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout/AuthLayout';
import SessionLayout from './layouts/SessionLayout/SessionLayout';

function App() {
  return (
    <div className="App">
      <div className="Router">
        <Router>
          <Routes>

            <Route path="/" element={<Navigate to='/auth/login' />} />

            <Route path="/auth">
              <Route path=":pageId" element={<AuthLayout/>}/>
            </Route>

            <Route path="/pages">
              <Route path=":pageId" element={<SessionLayout/>}/>
            </Route>

            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />

          </Routes>
        </Router>

      </div>
    </div>
  );
}

export default App;
