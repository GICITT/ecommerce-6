import NavBar from "./Components/NavBar/NavBar";

import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartCountainer } from "./Components/CartCountainer/CartCountainer";
import { CartEmpty } from "./Components/CartEmpty/CartEmpty";
import { CartContextProvider } from "./Components/Context/CartContexts";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:cid" element={<ItemListContainer />} />
            <Route path="/detail/:pid" element={<ItemDetailContainer />} />
            <Route path="/cartContountainer" element={<CartCountainer />} />
            <Route path="/CartEmpty" element={<CartEmpty />} />
            {/*<Route path="/form" element={<FormContainer />} />  no olvidar importar esto*/}
            {/* <Route path="*" element={<Navigate to="/404notfound" />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}
