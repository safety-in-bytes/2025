import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider} from "react-router-dom";
import {Index} from "./pages/Index";
import {Speaker} from "./pages/Speaker/2024";
import {CallForParticipation} from "./pages/CallForParticipation";

const router = createHashRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/speaker/2024",
        element: <Speaker />
    },
    {
        path: "/call-for-participation",
        element: <CallForParticipation />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
