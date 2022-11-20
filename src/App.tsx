import React from 'react';
import { Admin, Login, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/users/list';

import './App.css';
import Menu from './layout/Menu';
import authProvider from './authProvider';
import { Layout } from './layout';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App(): JSX.Element {
  return (
    <Admin
      loginPage={Login}
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={Layout}
    >
      <Menu />
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
