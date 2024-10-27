import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import "../../index.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import VideocamIcon from "@mui/icons-material/Videocam";
import PentagonIcon from "@mui/icons-material/Pentagon";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PaidIcon from "@mui/icons-material/Paid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

const navigations = [
  {
    category: "Workspace Settings",
    items: [{ name: "Overview", icon: SettingsIcon }],
  },
  {
    category: "User Settings",
    items: [
      { name: "Profile", icon: AccountCircleIcon },
      { name: "Accounts", icon: WorkspacesIcon },
      { name: "Integrations", icon: AppRegistrationIcon },
    ],
  },
  {
    category: "App Settings",
    items: [
      { name: "General", icon: SettingsIcon },
      { name: "Appearance", icon: AppRegistrationIcon },
      { name: "Calendars", icon: DateRangeIcon },
      { name: "Lists", icon: DynamicFormIcon },
      { name: "Todos", icon: CheckBoxIcon },
      { name: "Meetings", icon: VideocamIcon },
    ],
  },
  {
    category: "Billing Settings",
    items: [
      { name: "Plans", icon: PentagonIcon },
      { name: "Subscriptions", icon: SpaceDashboardIcon },
      { name: "Billings", icon: PaidIcon },
    ],
  },
];

const Settings = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        rowSpacing={3}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* Left Column with Navigation */}
        <Grid item size={4} sx={{ alignSelf: "flex-start" }}>
          {navigations.map((cat) => (
            <ul
              className="settings-nav"
              key={cat.category}
              style={{
                listStyleType: "none",
                padding: "0",
                marginBottom: "16px",
              }}
            >
              <li style={{ fontWeight: "bold", marginBottom: "8px" }}>
                {cat.category}
              </li>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="settings-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                  >
                    <item.icon
                      style={{ marginRight: "8px", fontSize: "20px" }}
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </Grid>

        {/* Main Content Column */}
        <Grid item size={6}>
          <Grid item size={12}>
            <Item>Column 2, Row 1</Item>
          </Grid>
          <Grid item size={12} sx={{ mt: 2 }}>
            <Item>Column 2, Row 2</Item>
          </Grid>
        </Grid>

        {/* Optional Right Column */}
        <Grid item size={1}>
          <Grid item size={12}>
            <Item>Column 3, Row 1</Item>
          </Grid>
          <Grid item size={12} sx={{ mt: 2 }}>
            <Item>Column 3, Row 2</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
