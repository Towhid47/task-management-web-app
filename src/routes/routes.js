import Main from '../layouts/Main/Main.jsx';
import FirstPage from '../Pages/FirstPage/FirstPage.jsx';
import Login from '../Pages/Login/Login.jsx';
import Register from '../Pages/Register/Register.jsx';

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
         {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<FirstPage></FirstPage>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                }
            ]
         }
])

export default router;