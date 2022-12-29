import React, {lazy, Suspense} from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Route, Link, Routes} from 'react-router-native';

import {SITE_MAP} from '../utils/constants/Path';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));

const listRoute = [
  {
    path: SITE_MAP.LOGIN,
    exact: true,
    component: <Login />,
  },
  {
    path: SITE_MAP.REGISTER,
    exact: true,
    component: <Register />,
  },
  {
    path: SITE_MAP.INDEX.path,
    exact: true,
    component: <Home />,
  },
  {
    path: SITE_MAP.CONTACT.path,
    exact: true,
    component: <Contacts />,
  },
];

const MainRoute = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Routes>
        {listRoute.map(({path, exact, component}, index) => (
          <Route exact={exact} path={path} element={component} key={index} />
        ))}
      </Routes>
    </Suspense>
  );
};
export default MainRoute;
