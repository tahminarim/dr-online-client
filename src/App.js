
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-x-[1440px] mx-14 my-10' >
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
