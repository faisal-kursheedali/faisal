import { useSelector } from 'react-redux';
import './App.css';
import Main from './main';
import {useEffect} from "react"

function App() {
  const state=useSelector(store=>store.state);
  useEffect(()=>{
    if (state.isDark) {
      document.body.style.backgroundColor="#313334"
      document.body.style.color="white"
      
    }else{
      document.body.style.backgroundColor="initial"
      document.body.style.color="initial"
      
    }
  },[state.isDark])
  return (
    <div className="app">
      <Main/>
    </div>
  );
}

export default App;
