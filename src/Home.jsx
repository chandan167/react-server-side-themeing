import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Center = styled(Container)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    textAlign: 'center'
}))

const CustomTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    fontSize: theme.spacing(5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
        fontSize: theme.spacing(4)
    },
    [theme.breakpoints.down('md')]: {
        fontSize: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: theme.spacing(2)
    }
}))

const CustomButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(10),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
}))

const FooterContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    justifyContent: 'space-between',
    width: '92%',
    padding: '2rem'
}))

export default function Home() {
    return (
        <Center>
            <Box >
                <CustomTypography variant='h1'>Breathe Easy</CustomTypography>
                <CustomTypography variant='h1'>Supporting our members when they need it most</CustomTypography>
                <CustomButton 
                variant='contained' disableElevation 
                endIcon={<ArrowForwardIosIcon />}>Get Started</CustomButton>
            </Box>
            <FooterContainer>
                <img style={{
                    width: '150px'
                }} src="data:image/png;base64,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" />
                <Box sx={{
                    width: '100%'
                }}>
                    <Typography color="primary" alignItems="center">Powered by Sopra Steria and The University of Edinburgh in collaboration with various charities</Typography>
                </Box>

            </FooterContainer>
        </Center>

    )
}
