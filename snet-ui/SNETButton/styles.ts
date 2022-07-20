const snetButtonStyles = (theme) => ({
  snetBtn: {
    padding: '8px 16px',
    color: theme.palette.text.secondary,
    fontFamily: 'MuliSemiBold',
    fontSize: 14,
    lineHeight: '24px',
    textAlign: 'center',
  },
  btnWithBg: {
    background: theme.palette.alertMsg.pendingBorder,
    '&:hover': {
      backgroundColor: 'rgb(44, 93, 178)',
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
    },
  },
});

export default snetButtonStyles;
