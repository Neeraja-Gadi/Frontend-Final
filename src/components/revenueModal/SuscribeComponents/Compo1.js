import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
const tiers = [
  {
    title: 'Silver',
    price: '1200',
    description: [
      '3 Job Post',
      '20 Portfolio',
      '2 Month',
    ],
    buttonText: 'buy',
    buttonVariant: 'outlined',
    cardVariant: {
      backgroundColor: 'silver',
    },
  },
  {
    title: 'Gold',
    price: '15600',
    description: [
        '3 Job Post',
        '20 Portfolio',
        '3 Month',
    ],
    buttonText: 'buy',
    buttonVariant: 'contained',
    cardVariant: {
      backgroundColor: 'goldenrod',
    },
  },
  {
    title: 'Platinum',
    price: '55200',
    description: [
        '3 Job Post',
        '10 Portfolio',
        '3 Month',
    ],
    buttonText: 'buy',
    buttonVariant: 'outlined',
    cardVariant: {
      backgroundColor: '#E5E4E2',
    },
  },
];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const user = JSON.parse(localStorage.getItem('userDetails'));
export default function PricingOne() {
  const handleBuy = async (plan) => {
    const info = {
      userDetailsID: user._id,
      recruiterPlan: plan.title,
      jobPostno: 3,
    }
    fetch("http://localhost:8000/revenueR", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info)
    }).then(response => response.json().then(data => {
      console.log(data)
      if (data.status === true) {
        alert("Created Plan Sucessfully")
      }
    }))
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={tier.cardVariant}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                //   action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h4" variant="h4" color="text.primary">
                      ₹{tier.price}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                      /-
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}  onClick={() => handleBuy(tier)}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </ThemeProvider>
  );
}  