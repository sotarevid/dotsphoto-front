import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import keycloak from "./keycloak";
import {ReactKeycloakProvider} from "@react-keycloak/web";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={{onLoad: 'login-required'}} isLoadingCheck={(keycloak) => !keycloak.authenticated}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ReactKeycloakProvider>
);
