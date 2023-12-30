import React from "react";
// import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";

function NavListDrawer({ navLinks }) {
  return (
    <nav>
      {navLinks.map((item, index) => (
        <ListItem key={index}>
          <ListItemButton>
            <ListItemText>{item.title}</ListItemText>
            <IconButton fontFamily="Jost" size="large" color="inherit" sx={{ flexGrow: 5 }}>
                {item.icon}
          </IconButton>
          </ListItemButton>
        </ListItem>

      ))}
    </nav>
  );
}

export default NavListDrawer;
