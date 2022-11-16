
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className='max-x-[1440px] mx-14 my-10' >
      <RouterProvider router={router}> </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
