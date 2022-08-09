import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import React from 'react';

type ExtensionError = {
  title: string;
  message: string;
};
type NoWalletInstalledModalProps = {
  open: boolean;
  onClose: () => void;
  error: ExtensionError | null;
};

export default function NoWalletInstalledModal({ open, error, onClose }: NoWalletInstalledModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography color="primary.main" variant="h5">
          {error?.title}
        </Typography>
      </DialogTitle>
      <DialogContent dividers sx={{ py: 4 }}>
        <Typography color="text.primary" variant="priority">
          {error?.message}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
