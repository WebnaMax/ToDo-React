import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
// import { store } from '/store';
import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalStyle } from './styles/GlobalStyle';

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
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

