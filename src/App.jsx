import Student from "./components/Student";
import Propsexample from "./components/Propsexample";
import Destructing from "./components/Destructing";
import Counter from "./components/UseState";
import Input from "./components/Input";
import UseEffectbasic from "./components/UseEffect";
import UseEffect from "./components/UseEffectApi";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
function App(){
  return(
    <div>
      <h1> this is main file in react</h1>
      <Student />
      <Propsexample name="Ganesh" address="Guntur" age="20"/>
      <Destructing name="Bharath" address="Ongole" age="19"/>
      <Counter/>
      <Input/>
      <UseEffect/>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;