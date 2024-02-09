import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider clientId='2f03ec29e09f66a8c44dff7e204a7b1b' activeChain={Sepolia} >
    <Router>
    <StateContextProvider>
      <App />
     </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
