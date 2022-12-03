import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import MonthlyRevenue from './MonthlyRevenue';
import NbNewOrders from './MonthlyNewOrders';
import NewCustomer from './NewCutomer';

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '0.5em' },
  rightCol: { flex: 1, marginLeft: '0.5em' },
  singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

export const DashBoard = () => (
  <div style={styles.flex}>
    <div style={styles.leftCol}>
      <div style={styles.flex}>
        <MonthlyRevenue value={4000} />
        <Spacer />
        <VerticalSpacer />
        <NbNewOrders value={50} />
        <Spacer />
        <VerticalSpacer />
      </div>
      <div style={styles.singleCol} />
      <div style={styles.singleCol} />
    </div>
    <div style={styles.rightCol}>
      <div style={styles.flex}>
        <Spacer />
        <NewCustomer />
      </div>
    </div>
  </div>
);
