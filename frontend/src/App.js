import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';
import Cart from './containers/Cart/Cart';
import Product from './containers/Product/Product';
import notFound from './components/404/404';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/cart/:id?/:amount?" component={Cart} exact />
          <Route path="/product/:id" component={Product} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signup" component={Signup} exact />
          <Route component={notFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
