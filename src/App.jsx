import NavBar from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormContainer } from "./Components/formContainer/formContainer";
import { CartCountainer } from "./Components/CartCountainer/CartCountainer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/form" element={<FormContainer />} />
          <Route path="/cartContountainer" element={<CartCountainer />} />

          {/*<Route path="/form" element={<FormContainer />} />  no olvidar importar esto*/}
          {/* <Route path="*" element={<Navigate to="/404notfound" />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
