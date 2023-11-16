
import './Footer.css'



import { Box, Grid, Container, Typography, Button } from '@mui/material'

function Footer() {
  const elements = [
    {
      header: 'Help',
      links: ['Contact', 'Support', ]
    },
    {
      header: 'Account',
      links: ['Login', 'Register', ]
    },
    {
      header: 'REVIEWS',
      links: ['People', 'Company', ]
    }
  ]

  function generateFooterElements() {
    const footerElements = elements.map((column) => (
      <Grid item xs={12} md={4} key={column.header}>
        <Box borderBottom={1}>
          <Button sx={{ color: 'white', fontWeight: 'bold' }}>
            {column.header}
          </Button>
        </Box>
        {column.links.map((link, i) => (
          <Box key={i}>
            <Button sx={{ color: 'white' }}>{link}</Button>
          </Box>
        ))}
      </Grid>
    ));
    return footerElements;
  }
  

  return (
    <footer className='footer'>
      <Box bgcolor="primary.main" color="white" padding={2}>
        <Container>
          <Grid container columnSpacing={2}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box textAlign={'center'} py={2} m={0} bgcolor="black" color={'white'}>
        <Typography>© Glowork 2023 - All Rights Reserved</Typography>
      </Box>
    </footer>
  )
}

export default Footer
