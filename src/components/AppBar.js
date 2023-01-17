import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import axios from 'axios';
import { API } from '../config';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AsraoImage from '../assets/asrinivasrao.jpg'
import DtuLogo from '../assets/dtuLogo.jpg'


import slugify from 'react-slugify';


import './style.css'
import { useNavigate } from 'react-router-dom';
import { Grid, Link } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {

    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [fixed, setfixed] = React.useState([])
    const [dropdown, setdropdown] = React.useState([])


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {

        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const redirectpage = (text) => {

        const url = slugify(text.name)
        navigate(`/${url}`)
    }



    React.useEffect(() => {
        axios.get(API + 'navbar/get').then(res => {
            const result = res.data.result[0]
            console.log(result)
            setfixed(result.fixed)
            setdropdown(result.dropdown)
        })
    }, [])

    return (
        <>
         <AppBar  sx={{position:'absolute', display:{sm:'none',xs:'none',md:'block',lg:'block'}, backgroundColor: '#ffffff', height: '210px' }}>
            <Container maxWidth="xl" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: '#000000' }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {fixed.map((page) => (
                                // <Link href={`/${slugify(page.name)}`}>{page.name}</Link>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link underline='none' style={{ fontSize: '20px', fontWeight: 500, color: '#000000', }} href={`/${slugify(page.name)}`}>{page.name}</Link>
                                    {/* <Typography sx={{ color: '#000000', fontSize: '20px' }} textAlign="center">{page.name}</Typography> */}
                                </MenuItem>
                            ))}


                            {dropdown.map((item, key) => (

                                <>
                                    <div>
                                        <div class="navigation">
                                            <Link style={{ fontSize: '20px', fontWeight: 600 }} href="#">{item.name}</Link>
                                            <div class="navigation-content">
                                                {item.selectedvalue.map(item1 => (

                                                    <Link href={`/${item1.slug}`}>{item1.name}</Link>
                                                ))}
                                            </div>

                                        </div>
                                    </div>

                                </>


                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { sm: 'none', xs: 'none', md: 'block', lg: 'block' }, flexGrow: 0, textAlign: 'right', paddingRight: '10px' }}>
                        <Tooltip >
                            <IconButton href='/' size='large' sx={{ p: 0 }}>
                                <Avatar sx={{ display: {}, width: 120, height: 120 }} src={AsraoImage} />
                            </IconButton>
                        </Tooltip>

                    </Box>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 9000,
                                letterSpacing: '.2rem',
                                color: '#DB4437',
                                fontSize: '40px',

                                textDecoration: 'none',

                            }}
                        >
                            Prof.A.S. Rao
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontSize: '40px',
                                letterSpacing: '.1rem',
                                color: '#a8a8a8',
                                fontSize: '20px',

                                textDecoration: 'none',

                            }}
                        >
                            Department of Applied Physics
                        </Typography>


                    </div>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'block', md: 'none', lg: 'none' },
                            fontWeight: 9000,
                            letterSpacing: '.1rem',
                            color: '#DB4437',

                            textDecoration: 'none',

                        }}
                    >
                        Prof.A.S. Rao
                    </Typography>



                    <Box sx={{display:{sm:'none',md:'block',lg:'block',xs:'none'},  flexGrow: 1, textAlign: 'right' }} >                    

                        <a href='http://dtu.ac.in/'> <img href='dtu.ac.in' sx={{ width: 110, height: 110 }} src={DtuLogo}/></a>   
                    </Box>


                </Toolbar>

                <Toolbar >

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', } }}>
                        {fixed.map((page) => (

                                <Link sx={{ fontWeight: 700, paddingTop:'7px',paddingRight:'10px', fontSize: '18px', my: 2, color: '#7d7d7d', display: 'block', textTransform: 'none' }} underline='none' href={`/${slugify(page.name)}`}>{page.name}</Link>

                        

                        ))}

                        {dropdown.map((item, key) => (

                            <>
                                <div>
                                    <div class="navigation">
                                      <Link style={{ fontSize: '18px',  fontWeight: 700,  color: '#7d7d7d',}} href="#">{item.name}</Link> 
                                        <div class="navigation-content">
                                            {item.selectedvalue.map(item1 => (

                                                <Link href={`/${item1.slug}`}>{item1.name}</Link>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </>


                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>


<AppBar  sx={{position:'fixed', display:{sm:'block',xs:'block',md:'none',lg:'none'}, backgroundColor: '#ffffff', height: '100px' }}>
            <Container maxWidth="xl" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    
                    <Box >
                        <IconButton
                            // size="large"
                        
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: '#3b3b3b',fontSize:'60px' }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                          
                        >
                            {fixed.map((page) => (
                                // <Link href={`/${slugify(page.name)}`}>{page.name}</Link>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link underline='none' style={{ fontSize: '20px', fontWeight: 500, color: '#000000', }} href={`/${slugify(page.name)}`}>{page.name}</Link>
                                    {/* <Typography sx={{ color: '#000000', fontSize: '20px' }} textAlign="center">{page.name}</Typography> */}
                                </MenuItem>
                            ))}


                            {dropdown.map((item, key) => (

                                <>
                                    <div>
                                        <div class="navigation">
                                            <Link style={{ fontSize: '20px', fontWeight: 600 }} href="#">{item.name}</Link>
                                            <div class="navigation-content">
                                                {item.selectedvalue.map(item1 => (

                                                    <Link href={`/${item1.slug}`}>{item1.name}</Link>
                                                ))}
                                            </div>

                                        </div>
                                    </div>

                                </>


                            ))}
                        </Menu>
                    </Box>


                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                
                                fontWeight: 9000,
                                letterSpacing: '.2rem',
                                color: '#DB4437',
                                fontSize: '25px',

                                textDecoration: 'none',

                            }}
                        >
                            Prof.A.S. Rao
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                               
                                fontSize: '15px',
                                letterSpacing: '.1rem',
                                color: '#a8a8a8',
                                fontSize: '20px',

                                textDecoration: 'none',

                            }}
                        >
                            Department of Applied Physics
                        </Typography>


                    </div>
                 



                </Toolbar>
{/* 
                <Toolbar >

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', } }}>
                        {fixed.map((page) => (

                                <Link sx={{ fontWeight: 700, paddingTop:'7px',paddingRight:'10px', fontSize: '18px', my: 2, color: '#7d7d7d', display: 'block', textTransform: 'none' }} underline='none' href={`/${slugify(page.name)}`}>{page.name}</Link>

                        

                        ))}

                        {dropdown.map((item, key) => (

                            <>
                                <div>
                                    <div class="navigation">
                                      <Link style={{ fontSize: '18px',  fontWeight: 700,  color: '#7d7d7d',}} href="#">{item.name}</Link> 
                                        <div class="navigation-content">
                                            {item.selectedvalue.map(item1 => (

                                                <Link href={`/${item1.slug}`}>{item1.name}</Link>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </>


                        ))}
                    </Box>

                </Toolbar> */}
            </Container>
        </AppBar>

        </>
       
    );
};
export default ResponsiveAppBar;
