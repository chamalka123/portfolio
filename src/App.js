import './App.css';
import Home from './Home';
import GlobalStyles from './Components/Styled/GlobalStyled';
import { useEffect } from 'react';

function App() {
   useEffect(() => {
      document.title = "Sasini Perera's Portfolio";
   }, []);
   return (
      <div>
         <GlobalStyles />
         <div className="App">
            <Home />
         </div>
      </div>
   );
}

export default App;
