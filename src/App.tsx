import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Providers
import { FileProvider } from './context/FileContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

// Screens
import Home from './pages/Home';
import Login from './pages/Login';
import Detect from './pages/Detect';
import Options from './pages/Options';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <FileProvider>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/options' component={Options} />
            <Route path='/detect' component={Detect} />
            <Route component={NotFound} />
          </Switch>
        </AuthProvider>
      </FileProvider>
      <ToastContainer />
    </Router>
  );
};

export default App;
