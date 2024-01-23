import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'



import Footer from '../../components/Footer';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Locations', "Login"];
const settings = ['Profile', "List Property", 'Logout'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (e) => {
        console.log(`HANDLE-CLOSE:-`, e.target.innerText)

        switch (e.target.innerText) {
            case "Logout":
                localStorage.clear();
                break;
            case "Profile":
                navigate("/profile")
                break;
            case "List Property":
                navigate('/add-location')
                break;
            default:
                break;
        }
        setAnchorElUser(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const handleClickListItem = (e) => {

        switch (e.target.value) {
            case "Home":
                navigate("/")
                break;
            case "Locations":
                navigate("/properties");
                break;
            case "About":
                navigate("/about");
                break;
            case "Contact":
                navigate("/contact");
                break;
            case "Login":
                navigate("/login")
                break;
        }
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Typography variant="h6" color="text.primary" sx={{ my: 2 }}>
                    Proximity Pods
                </Typography>
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    (localStorage.user && item === "Login")
                        ? (<></>)
                        : (
                            <ListItem key={item} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }} value={item} onClick={
                                    (e) => {
                                        switch (item) {
                                            case "Home":
                                                navigate("/")
                                                break;
                                            case "Locations":
                                                navigate("/properties");
                                                break;
                                            case "About":
                                                navigate("/about");
                                                break;
                                            case "Contact":
                                                navigate("/contact");
                                                break;
                                            case "Login":
                                                navigate("/login");
                                                break;
                                        }
                                    }
                                }>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        )
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} marginBottom={8}>
            <CssBaseline />
            <AppBar component="nav" style={{backgroundColor:"#1976d2"}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/** USER SETTINGS */}

                    {
                        localStorage.user && (
                            <Box marginLeft={2} sx={{ flexGrow: 0, mr: 2, display: { sm: 'none' }, marginLeft: "auto" }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={`${JSON.parse(localStorage.user).username}`} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        )
                    }

                    
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link to="/" style={{textDecoration:'none', color:"#fff"}}>
                            Proximity Pods
                            </Link>
                        </Typography>
                    

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (

                            (localStorage.user && item === "Login")
                                ? (<></>)
                                : (
                                    <Button value={item} key={item} sx={{ color: '#fff' }} onClick={handleClickListItem}>
                                        {item}
                                    </Button>
                                )

                        ))}

                    </Box>
                    {/** USER SETTINGS */}

                    {
                        localStorage.user && (
                            <Box key="user" marginLeft={2} sx={{ flexGrow: 0, mr: 2, display: { xs: 'none', sm: 'block' } }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={`${JSON.parse(localStorage.user).firstName}`} src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        )
                    }
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

function Layout() {
    return (
        <>
            <div><DrawerAppBar /></div>
            <Outlet />
            <div><Footer /></div>
        </>
    )
}

export default Layout;