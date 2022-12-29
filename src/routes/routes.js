import Main from '../layouts/Main/Main.jsx';
import FirstPage from '../Pages/FirstPage/FirstPage.jsx';
import Login from '../Pages/Login/Login.jsx';
import Register from '../Pages/Register/Register.jsx';
import Home from '../layouts/Home/Home.jsx';
import AddTask from '../Pages/Add Task/AddTask.jsx';
import MyTask from '../Pages/My Task/MyTask.jsx';
import CompletedTask from '../Pages/Completed Task/CompletedTask.jsx';

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
         },
         {
            path:'/home',
            element:<Home></Home>,
            children:[
                {
                    path:'/home',
                    element:<MyTask></MyTask>
                },
                {
                    path:'/home/add-task',
                    element:<AddTask></AddTask>
                },
                {
                    path:'/home/completed-task',
                    element:<CompletedTask></CompletedTask>
                }
            ]
         }
])

export default router;