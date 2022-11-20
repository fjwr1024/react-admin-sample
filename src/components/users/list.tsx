import * as React from 'react';
import { useState } from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import BaseAlert from '../alerts/BaseAlert';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const UserList = (props: User) => {
  const [open, setIsOpen] = useState(true);
  const updateIsOpen = () => setIsOpen(false);
  return (
    <>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField source="website" />
        </Datagrid>
      </List>
      <BaseAlert
        open={open}
        updateIsOpen={updateIsOpen}
        severity="info"
        text="close"
      />
    </>
  );
};
