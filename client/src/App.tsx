import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import Start from './screens/Start';
import Options from './screens/Options';
import Detects from './screens/Detects';
import Home from './screens/Home';

// Providers
import { FileProvider } from './context/FileContext';

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <FileProvider>
            <Route exact path='/' component={Start} />
            <Route path='/home' component={Home} />
            <Route path='/options' component={Options} />
            <Route path='/detects' component={Detects} />
          </FileProvider>
        </Switch>
      </Router>
    </>
  );
};

export default App;
