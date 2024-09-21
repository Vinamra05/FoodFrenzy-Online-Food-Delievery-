import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home"; 
// import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from "./redux/Store"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    errorElement: <Error />,  
    children: [
      {
        path: "/",  
        element: <Home />  
      },
      {
        path: "about",  
        element: <About />
      },
      {
        path: "contact",  
        element: <Contact />
      },
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
  
);
