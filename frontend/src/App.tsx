import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import MenuDrawer from './components/header/menuDrawer/MenuDrawer';
import { useAppDispatch } from './store/store';

import Test from './components/Test';
import Main from './components/main/Main';


function App(): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <div className="App">


      {/* <NavBar/>
      <MenuDrawer/> */}
<Routes>

<Route path='/' element={<Main/>}/>
<Route path='/test' element={<Test />} />
</Routes>
    </div>
  );
}

export default App;
