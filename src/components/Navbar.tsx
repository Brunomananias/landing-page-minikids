import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const links = [
    { label: "Home", to: "/" },
    { label: "Quem somos", to: "/quem-somos" },
    { label: "Serviços", to: "/nossos-servicos" },
    { label: "Galeria", to: "/galeria" },
    // { label: "Depoimentos", to: "/depoimentos" },
    { label: "Contato", to: "#contato" },
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleClick = (link: { label: string; to: string }) => {
    if (link.to.startsWith("#")) {
      const sectionId = link.to.substring(1);

      if (location.pathname === "/") {
        // Já estou na home → só faz scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Estou em outra página → navega pra home e manda a "seção"
        navigate("/", { state: { scrollTo: sectionId } });
      }
    } else {
      // Links normais (ex: /galeria, /quem-somos)
      navigate(link.to);
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          backgroundColor: "#07A5C3",
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <img
              src="/images/logominikids.png"
              alt="Mini Kids Logo"
              style={{ height: 60, width: 140, objectFit: "contain" }}
            />
          </Box>

          {isMobile ? (
            <>
              {/* Ícone de menu em mobile */}
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Drawer */}
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {links.map((link) => (
                      <ListItem key={link.label} disablePadding>
                        <ListItemButton component={Link} to={link.to}>
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex" }}>
              {links.map((link) => (
                <Button
                  key={link.label}
                  color="inherit"
                  sx={{
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    marginLeft: 2,
                  }}
                  onClick={() => handleClick(link)}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
