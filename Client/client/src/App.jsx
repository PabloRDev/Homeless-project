import "./App.scss";
import Header from "../src/components/Header/Header"
import Home from "./pages/Home/Home"
import AppGallery from "./pages/AppGallery/AppGallery"
import UserGallery from "./pages/UserGallery/UserGallery"



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AppGallery/>
      <UserGallery/>
      
      
    </div>
  );
}

export default App;
