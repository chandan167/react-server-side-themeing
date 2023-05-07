import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Center = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    textAlign: 'center'
}))

const CustomTypography = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    fontSize: theme.spacing(5),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('lg')] : {
        fontSize: theme.spacing(4)
    },
    [theme.breakpoints.down('md')] : {
        fontSize: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')] : {
        fontSize: theme.spacing(2)
    }
}))

const CustomButton = styled(Button)(({theme}) => ({
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(10),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
}))

export default function Home() {
    return (
        <Center>
            <Box>
                <CustomTypography variant='h1'>Breathe Easy</CustomTypography>
                <CustomTypography variant='h1'>Supporting our members when they need it most</CustomTypography>
                <CustomButton variant='contained' disableElevation endIcon={<ArrowForwardIosIcon />}>Get Started</CustomButton>
            </Box>
        </Center>
    )
}
