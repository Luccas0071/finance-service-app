import { RouterProvider } from 'react-router-dom';
import { router } from './config/Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
