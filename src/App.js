import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './components/home'
import DetailUser from './components/detailUser'
function App() {
  return (
    <div className="App">
    {/*Quitar el contenido ya existende del header*/}
      <BrowserRouter>
        <Routes>
          {/*Route requiere dos parametros, path y element */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/user/:id" element={<DetailUser></DetailUser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
