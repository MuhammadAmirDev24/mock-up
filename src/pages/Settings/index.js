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
import CloseIcon from "@mui/icons-material/Close";

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

const integrations = [
  {
    name: "Apple Calenders",
    description: "Sync Events (macOS only)",
    icon: "",
  },
  {
    name: "Spotify",
    description: "Visualize listened songs on your calendar",
    icon: "",
  },
  {
    name: "Zoom",
    description: "Create video calls from your calendar",
    icon: "",
  },
  {
    name: "Linear",
    description: "Project Management and Issue tracking",
    icon: "",
  },
  {
    name: "Notion",
    description: "Project Management and Issue Tracking",
    icon: "",
  },
  {
    name: "Todoist",
    description: "Project Management and Issue Tracking",
    icon: "",
  },
  {
    name: "TickTick",
    description: "Project Management and Issue Tracking",
    icon: "",
  },
  { name: "Things", description: "Sync todos", icon: "" },
  { name: "Apple Reminders", description: "Sync todos", icon: "" },
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
        <Grid
          item
          size={4}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
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
              <div className="hr-tag" />
            </ul>
          ))}
        </Grid>

        {/* Main Content Column */}
        <Grid item size={6} sx={{ marginTop: "15px" }}>
          <Grid item size={12}>
            <div className="center-content">
              <div className="heading">
                <p style={{ fontSize: "20px", fontWeight: "500" }}>
                  Integrations
                </p>
                <p style={{ marginTop: "-10px", color: "gray" }}>
                  Connect Amie with your existing tools.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Optional Right Column */}
        <Grid item size={1} sx={{ marginTop: "30px" }}>
          <Grid item size={12}>
            <div className="leave-btn">
              <CloseIcon />
            </div>

            <span className="esc">ESC</span>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
