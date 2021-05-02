import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Responses } from './components/Responses';
import { SubmitResponse } from './components/SubmitResponse';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <>
      <Header />
      <GlobalProvider>
        <Router className="router">
          <Switch>
            <Route exact path="/" component={SubmitResponse} />
            <Route path="/viewdata" component={Responses} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>


  );
}
export default App;