import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Providers
import { FileProvider } from './context/FileContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

// Screens
import Home from './screens/Home';
import Login from './screens/Login';
import Detects from './screens/Detects';
import Options from './screens/Options';
import Register from './screens/Register';
import NotFound from './screens/NotFound';

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
            <Route path='/detects' component={Detects} />
            <Route component={NotFound} />
          </Switch>
        </AuthProvider>
      </FileProvider>
      <ToastContainer />
    </Router>
  );
};

export default App;
