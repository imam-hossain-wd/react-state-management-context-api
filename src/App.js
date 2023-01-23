import { useContext } from "react";
import { authContext } from "./components/AuthContext/AuthContext";
import CartEight from "./components/Cart/CartEight";
import CartFive from "./components/Cart/CartFive";
import CartFour from "./components/Cart/CartFour";
import CartNine from "./components/Cart/CartNine";
import CartOne from "./components/Cart/CartOne";
import CartSeven from "./components/Cart/CartSeven";
import CartSix from "./components/Cart/CartSix";
import CartThree from "./components/Cart/CartThree";
import CartTwo from "./components/Cart/CartTwo";


function App() {
  const {name} = useContext(authContext)
  console.log(name);
  return (
    <section className="ml-10 mt-5" >
      <h1 className="text-center font-bold text-3xl text-green-400 mb-5">React State Management Context Api</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div>
        <CartOne/>
        <CartTwo/>
        <CartThree/>
      </div>
      <div>
        <CartFour/>
        <CartFive/>
        <CartSix/>
        
        </div>
      <div>
    <CartSeven/>
    <CartEight/>
    <CartNine/>

      </div>
      </div>
    </section>
  );
}

export default App;
