import GlobalStyle from './globalStyles';
import Nabvar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Nabvar />
      <Switch>
          <Route path="/" exact component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
