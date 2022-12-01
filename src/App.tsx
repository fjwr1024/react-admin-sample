import { Admin, EditGuesser, Login, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/users/list';
import { PostList } from './components/posts/list';

import './App.css';
import Menu from './layout/Menu';
import authProvider from './authProvider';
import { Layout } from './layout';
import { PostCreate } from './components/posts/create';

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
    <Resource
      name="users"
      list={UserList}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    <Resource name="posts" list={PostList} edit={EditGuesser} />
  </Admin>
);

export default App;
