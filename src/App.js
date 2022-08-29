// import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import './App.css';
import React from 'react';

class App extends React.Component {
  state={
    isLog:false
  }

  handleLogin = (isLog) => this.setState({isLog})
  render(){
    const {isLog} = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' render={() => !isLog ?<Login isLogin={this.handleLogin}/>:<Home/>}/>
          </Routes>
        </BrowserRouter>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
