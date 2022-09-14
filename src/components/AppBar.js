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
        <AppBar position="fixed" sx={{ backgroundColor: '#ffffff' }}>
            <Container maxWidth="xl">
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

                    <Box sx={{ flexGrow: 0,textAlign:'right',paddingRight:'10px' }}>
                        <Tooltip >
                            <IconButton size='large'  sx={{ p: 0 }}>
                                <Avatar  sx={{ width: 50, height: 50 }} src="https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/48365020_808368382835391_8131439694916354048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4fI3p7ggmCwAX84tMrz&_nc_oc=AQlc8U6LP3uI1gB5cebN-1jhzpoCSfLD7mfuyVHcWk1osTpFgE4yf18shwHV1GZIj0U&_nc_ht=scontent.fdel29-1.fna&oh=00_AT8yrnUdX__INwvmM_TX-u-jlbn4uSk47ZEAILmQZr5GHw&oe=6348596A" />
                            </IconButton>
                        </Tooltip>

                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontWeight: 9000,
                            letterSpacing: '.2rem',
                            color: '#DB4437',

                            textDecoration: 'none',

                        }}
                    >
                        A.S.Rao
                    </Typography>



                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', } }}>
                        {fixed.map((page) => (


                            <Link sx={{ padding: '6px', fontWeight: 500, fontSize: '20px', my: 2, color: '#3d3d3d', display: 'block', textTransform: 'none' }} underline='none' href={`/${slugify(page.name)}`}>{page.name}</Link>
                        ))}

                        {dropdown.map((item, key) => (

                            <>
                                <div>
                                    <div class="navigation">
                                        <Link style={{ fontSize: '20px', color: '#3d3d3d', fontWeight: 600 }} href="#">{item.name}</Link>
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


                    <Box sx={{ flexGrow: 1,textAlign:'right' }}>
                        <Tooltip >
                            <IconButton sx={{ p: 0 }}>
                                <Avatar sx={{ width: 50, height: 50 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hsIxCIhrsIW-YK6qvsb-PFRGhQ7sjbplhuOE8Jsv7w&s" />
                            </IconButton>
                        </Tooltip>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
