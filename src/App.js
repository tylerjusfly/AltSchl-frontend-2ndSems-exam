import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Farewell, FallBackError, Home, Layout } from "./components";
import { Login } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={FallBackError}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Farewell />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
