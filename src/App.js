 import  "./App.css";
 import Head from "./components/Head";
 import Body from "./components/Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Payment from "./comp onents/Payment";
function App() {
  return (
  
<Provider store={store}>
     <Head/>
    <Outlet/>
    </Provider>
      
    
  )
}
 export const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/Cart",
      element:<Cart/>,
    },
    {
      path:"Cart/payment",
      element:<Payment/>
    }
        
    
    
  ]
}

])




export default App;
