import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Aboutus from './component/Aboutus'
import Page404 from './component/Page404';
import User from './component/User';
import Youtube from './component/Youtube';
import Login from './component/Login';
import Protected from './component/Protected';
import Adduser from './component/Adduser';
import Manageuser from './component/Manageuser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter> 

        <Routes>
              <Route path='/' element={<Protected Cmp={App}/>}/> 
              <Route path='/aboutus/' element={<Aboutus/>}> 
                    <Route path='youtube' element={<Youtube/>}/> 
                    
              </Route>     
              <Route path='/*' element={<Page404/>}/> 
              <Route path='/user/:name' element={<User/>}/>
              <Route path='/login' element={<Login/>}/>  
              <Route path='/manageuser/' element={<Manageuser/>}>
                    <Route path='adduser' element={<Adduser/>}/>
              </Route>
        </Routes>

</BrowserRouter>

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
