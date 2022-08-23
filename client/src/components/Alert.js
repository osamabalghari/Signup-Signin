import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Alerts(props) {
  const { alertClose, alert } = props
  return (
    alert === "" ? "" : <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={alertClose}>{alert}</Alert>
    </Stack>
  );
}
