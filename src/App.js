import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';


const isLogin = true;

function App() {
  return (
    // 범위가 작은 루트부터 위로 그럼 exact를 쓰지 않아도 된다.
    <BrowserRouter> 
      <Links />
      <NavLinks />
      <Switch>
        <Route 
          path="/login" 
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;