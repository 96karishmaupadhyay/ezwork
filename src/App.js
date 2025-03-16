import './App.css';
import Home from './page/Home';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
   <>
   <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
    <Home />
  </SnackbarProvider>,
   </>
  );
}

export default App;
