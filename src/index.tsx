import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes, { type typeMyRoute } from '../config/routes';

function generateRoutes(routerItems: typeMyRoute[]) {
  if (routerItems && routerItems.length) {
    return routerItems.map(({ path, element, children }) =>
      children && children.length ? (
        <Route path={path} key={path} element={element}>
          {generateRoutes(children)}
        </Route>
      ) : (
        <Route key={path} path={path} element={element} />
      ),
    );
  }
  return null;
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!);

const App: React.FC = () => {
  const element = generateRoutes(routes);
  return <Routes>{element}</Routes>;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
