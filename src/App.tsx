import { Router } from "./routes"
import { GlobalStyle } from "./styles/globaStyles"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  
  <>
    <GlobalStyle/>
    <ToastContainer />
    <Router />
  </>
)

export default App
