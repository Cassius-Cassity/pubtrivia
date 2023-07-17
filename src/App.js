import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';

const RootContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(4),
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function App() {
  return (
    <RootContainer>
      <TitleTypography variant="h3">
        Welcome to My Trivia Game!
      </TitleTypography>
      <Typography variant="body1">
        Get ready to test your knowledge with some trivia questions.
      </Typography>
      <ButtonStyled variant="contained" color="primary">
        Start Game
      </ButtonStyled>
    </RootContainer>
  );
}

export default App;
