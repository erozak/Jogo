import React, { memo, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Paper from 'components/Paper';
import Button from 'components/Button';
import Container from 'components/Container';
import Grid from 'components/Grid';

import useSignIn from './SignInPage.useSignIn';

const SignInPageContainer: FC<RouteComponentProps> = () => {
  const { signInWithGoogle } = useSignIn();

  return (
    <Container maxWidth="xs">
      <Paper>
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item xs>
            <Button variant="contained" onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default memo(SignInPageContainer);
