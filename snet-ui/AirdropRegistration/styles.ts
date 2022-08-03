import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const airdropRegistrationStyles = makeStyles((Theme) => ({
  airdropClaimStartDateTime: {
    margin: 0,
    '& h4': { fontFamily: 'MuliSemiBold' },
  },
  viewBtnsContainer: {
    marginTop: 24,
    textAlign: 'center',
    '& button': {
      border: '1px solid #f4f8ff',
      marginRight: 24,
      '& p': { fontFamily: 'MuliSemiBold' },
      '&:last-of-type': { marginRight: 0 },
      '&:hover': {
        border: '1px solid #f4f8ff',
      },
      '@media(max-width: 480px)': { margin: '0 0 10px 0' },
    },
    '@media(max-width: 480px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  claimedContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    borderColor: Theme.palette.text.secondary,
    '@media9max-width: 900px)': {
      width: '100%',
      margin: '40px 0',
    },
  },
  claimOrMapBtnContainer: {
    '& button': {
      '@media(max-width: 600px)': { width: '100%' },
    },
  },
  mappedWalletDateTimeContainer: {
    backgroundColor: Theme.palette.bgHighlight.main,
    borderRadius: 2,
    padding: '15px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media(max-width: 900px)': {
      maxWidth: '100%',
      flexBasis: '100%',
    },
  },
}));

export default airdropRegistrationStyles;
