import React from 'react';
import { Grid, Typography, Button, Link } from '@mui/material';

export default function Footer() {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Company
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            About
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Blog
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Press
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Jobs
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Partners
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Solutions
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Marketing
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Analytics
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Commerce
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Insights
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Support
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Documentation
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Guides
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            ApiStatus
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom>
                        Legal
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Claims
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Privacy
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text text-white'>
                            Terms
                        </Button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Icons made by{' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>{' '}
                        from{' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
}
