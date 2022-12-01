import * as React from 'react';
import { useState } from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import BaseAlert from '../alerts/BaseAlert';

export interface NFT {
  name: string;
  SYMBOL: string;
  description: string;
  royalty: number;
}

export const NFTList = (props: NFT) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="SYMBOL" />
      <TextField source="description" />
      <TextField source="royalty" />
    </Datagrid>
  </List>
);
