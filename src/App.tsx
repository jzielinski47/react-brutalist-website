import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

import Root from './elements/Root';
import Home from './screens/Home';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )

}



export default App
