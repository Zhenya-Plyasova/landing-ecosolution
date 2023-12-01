import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div
      className={css.mainWrapper}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
