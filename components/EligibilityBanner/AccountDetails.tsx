import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { Grid, Typography, Avatar, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { SupportedChainId } from 'snet-ui/Blockchain/connectors';
import { useActiveWeb3React } from 'snet-ui/Blockchain/web3Hooks';
import styles from './styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(styles);

const AccountDetails = ({ type, avatar, avatarSrc, onBtnClick, address }) => {
  const { chainId } = useActiveWeb3React();
  const network = useMemo(() => SupportedChainId[chainId ?? ''], [chainId]);
  const classes = useStyles();

  const addEllipsisInBetweenString = (str) => `${str.substr(0, 15)}...${str.substr(str.length - 15)}`;

  return (
    <Grid item xs={12} md={6} className={classes.walletDetailsContainer}>
      <Avatar alt={avatar} src={avatarSrc} />
      <div>
        <span>{type === 'etherum' ? 'Connected Wallet Address' : 'Mapped Cardano Wallet Address'}</span>
        <Button onClick={onBtnClick}>
          {/* <Typography noWrap variant="priority" component="p">
            {addEllipsisInBetweenString(address)}
            <ContentCopyIcon />
          </Typography> */}
          <span>Copied!</span>
        </Button>
        <Typography variant="h5">Ethereum {network?.toLowerCase()}</Typography>
      </div>
    </Grid>
  );
};

AccountDetails.propTypes = {
  type: propTypes.string,
  avatar: propTypes.string.isRequired,
  avatarSrc: propTypes.string.isRequired,
  onBtnClick: propTypes.func,
  address: propTypes.string,
};

export default AccountDetails;
