import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route, To, createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
// import { Header } from './components/header/header';
import { ToDo } from './models/ToDoItem';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layouts } from './layouts/Layouts';
import path from 'path';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первая задача',
    isDone: false,
  },
  {
    id: 1,
    text: 'Вторая задача',
    isDone: true,
  },
  {
    id: 2,
    text: 'Третья задача',
    isDone: false,
  },
  {
    id: 3,
    text: 'Четвертая задача',
    isDone: true,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], { basename: '/app/' })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />} />
        <Route path="/list/:id" element={<ItemDescription todos={todos} />} />
        <Route path="/todo" element={<ToDoListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}

    {/* старый вариант */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

