import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
}
else {
    throw new Error("Root element with id 'root' not found");
}
//# sourceMappingURL=main.js.map