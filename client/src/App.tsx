import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Providers
import { FileProvider } from './context/FileContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';

// Screens
import Start from './screens/Start';
import Options from './screens/Options';
import Detects from './screens/Detects';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

const App = () => {

  return (
    <Router>
      <Switch>
        <FileProvider>
          <AuthProvider>
            <Route exact path='/' component={Home} />
            <Route path='/start' component={Start} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/options' component={Options} />
            <Route path='/detects' component={Detects} />
          </AuthProvider>
        </FileProvider>
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
