import React, {useState} from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



export default function App(){
 let API_key=process.env.REACT_APP_API_KEY;
const[country,setCountry]=useState("in");
const[pageSize, setPageSize]=useState(20);
const[progress, setProgres]=useState(0);
let setProgress=(progress)=>{
  //  setState({progress : progress})
  setProgres(progress)
    }

    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <NavBar/>
      <Routes>
     <Route exact path='/' element={<News progress={setProgress} API_key={ API_key} key="general" country={  country} pageSize={  pageSize} category="general"/>}/> 
     <Route exact path='/business' element={<News progress={setProgress} API_key={ API_key} key="business" country={  country} pageSize={  pageSize} category="business"/>}/> 
     <Route exact path='/entertainment' element={<News progress={setProgress} API_key={ API_key} key="entertainment" country={  country} pageSize={  pageSize} category="entertainment"/>}/> 
     <Route exact path='/health' element={<News progress={setProgress} API_key={ API_key} key="health" country={  country} pageSize={  pageSize} category="health"/>}/> 
     <Route exact path='/sports' element={<News progress={setProgress} API_key={ API_key} key="sport" country={  country} pageSize={  pageSize} category="sport"/>}/> 
     <Route exact path='/science' element={<News progress={setProgress} API_key={ API_key} key="science" country={  country} pageSize={  pageSize} category="science"/>}/> 
     <Route exact path='/technology' element={<News progress={setProgress} API_key={ API_key} key="technology" country={  country} pageSize={  pageSize} category="technology"/>}/> 
     
      </Routes>
      </BrowserRouter>
      </div>
    )

}
