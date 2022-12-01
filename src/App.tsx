import { Admin, EditGuesser, Login, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/users/list';

import './App.css';
import Menu from './layout/Menu';
import authProvider from './authProvider';
import { Layout } from './layout';

// apiURL
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = (): JSX.Element => (
  <Admin
    loginPage={Login}
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={Layout}
  >
    <Menu />
    <Resource name="users" list={UserList} edit={EditGuesser} />
  </Admin>
);

export default App;
