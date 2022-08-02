import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { GiDeliveryDrone } from "react-icons/gi";
import { pages, userActions } from "../../utils/navigationItems";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      className="h-[72px]"
      sx={{ backgroundColor: "#7773a5", width: "100vw" }}
    >
      <Container maxWidth={false} className="bg-[#38346D] h-[68.5px] ">
        <Toolbar disableGutters>
          <div className="hidden md:flex mr-8 ">
            <GiDeliveryDrone className="w-10 h-10 logo  " />
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={handleCloseNavMenu}
                  className="w-screen"
                >
                  <Button
                    key={item.name}
                    startIcon={item.icon}
                    sx={{ color: "#38346D" }}
                  >
                    <Typography textAlign="left" variant="button">
                      {item.name}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <GiDeliveryDrone className="flex md:hidden mr-2 w-10 h-10 logo " />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) =>
              index <= 3 ? (
                <Link key={page.name} to={`/${page.name}`}>
                  <Button
                    startIcon={page.icon}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      mr: 1,
                      "&:hover": {
                        backgroundColor: "#38346D",
                        color: "#8f8bd3",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ) : null
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {userActions.map((action) => (
              <Link key={action.name} to={`/${action.name}`}>
                <Button
                  key={action.name}
                  startIcon={action.icon}
                  variant="contained"
                  sx={{
                    color: "white",
                    mr: 1,
                    backgroundColor: "#38346D",
                    "&:hover": {
                      backgroundColor: "#39366b",
                    },
                  }}
                >
                  {action.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
