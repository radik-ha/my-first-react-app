import Header from "./Header";
import TopBar from "./TopBar";
import "./styles/App.css";
import lotusImg from "./images/lotus.jpg";
import roseImg from "./images/rose.jpg";
import ChrysanthemumImg from "./images/Chrysanthemum.jpg";
import gloriosaImg from "./images/gloriosa.webp";

function App(){
  return (
    <>
      <TopBar/>
      <Header imglink = {lotusImg} name = "LOTUS"/>
      <Header imglink = {roseImg} name = "ROSE"/>
      <Header imglink = {ChrysanthemumImg} name = "CHRYSANTHEMUM"/>
      <Header imglink = {gloriosaImg} name = "GLORIOSA"/>;
    </>
  );
}

export default App;