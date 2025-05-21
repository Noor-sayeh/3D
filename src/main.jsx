import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GiftBoxPage from "./pages/GiftBoxPage"; // ✅ تأكدنا إنها موجودة

ReactDOM.createRoot(document.getElementById("root")).render( <BrowserRouter> 
<Routes>
  <Route path="/" element={<App />} />          {/* هذا هو الراوت الرئيسي */}
  <Route path="/cups" element={<App />} />
  <Route path="/giftbox" element={<GiftBoxPage />} />
</Routes>


</BrowserRouter>
);

