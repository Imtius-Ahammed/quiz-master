import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,children:[
        {
          path:'/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home> 
        },
        {
          path:'/quiz/:quizId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)

          },
          element: <Quiz></Quiz>

        },
      
        {
          path:'/topics',
          element:<Topics></Topics>
        },
        {
          path:'/statistics',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
      

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
