import React from 'react';
import ReactDOM from 'react-dom/client';
import { Grilla } from './Grilla';
import {LogoProvincias} from "./LogoProvincias"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogoProvincias/>
    <Grilla/>
  </React.StrictMode>
);
