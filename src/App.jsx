
import { CartService } from "./components/cart/CartService"

function App() {
  return (
    <>
      <div className="flex justify-around flex-wrap ">
        <CartService/>
        <CartService/>
        <CartService/>
      </div>
    </>
  );
}
export default App;
