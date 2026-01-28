import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
            ],
        },
        {
            path: '/login',
            element: <Login />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
