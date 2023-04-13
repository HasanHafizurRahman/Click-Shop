import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Logout = () => {
    setAccount("");
  };
  return (
    <Box onClick={handleClick}>
      <Typography sx={{ cursor: "pointer" }}>{account}</Typography>
      <Menu
        sx={{ marginTop: "5px" }}
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Typography
            sx={{
              fontSize: "14px",
              marginLeft: "10px",
            }}
          >
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
