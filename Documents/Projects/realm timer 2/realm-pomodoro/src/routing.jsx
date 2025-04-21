import { createBrowserRouter} from 'react-router-dom'

import App from './App.jsx'
import Layout from './layout.jsx';
import RealmPage from './page/RealPage/RealmPage.jsx'
import PomodoroPage from './page/PomodoroPage/PomodoroPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <App />
        },
        {
            path: '/ChooseRealm',
            element: <RealmPage />
        },
        {
          path: '/Pomodoro',
          element: <PomodoroPage />
      }
    ]
  }
]);

export default router