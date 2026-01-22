import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="container">
          <Outlet />
        </div>
      </div>
    );
  };

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
