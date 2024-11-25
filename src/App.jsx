import "./App.css";
import Feature from "./component/Feature";
import Header from "./component/Header";
import Productive from "./component/Productive";
import Signin from "./component/Signin";
import Footer from "./component/Footer"
function App() {
  return (
    <>
      <Header />
      <main>
        <Feature />
        <Productive />
        <Signin />
      </main>
      <Footer />
    </>
  );
}

export default App;
