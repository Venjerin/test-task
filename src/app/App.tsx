import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsPage from '../pages/posts/components/PostsPage';
import PostDetailsPage from '../pages/postDetails/components/PostsDetailsPage';
import PageNotFound from '../pages/notFound/components/404';
import { Provider } from 'react-redux';
import { store } from '../widgets/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <h1>Posts App</h1>
          <Routes>
            <Route path="/" element={<PostsPage></PostsPage>}></Route>
            <Route
              path="posts/:postId"
              element={<PostDetailsPage></PostDetailsPage>}
            ></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
