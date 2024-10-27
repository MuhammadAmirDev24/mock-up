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

import AppleReminder from "../../Assets/icons/applereminder.png";
import Calender from "../../Assets/icons/calander.png";
import Linear from "../../Assets/icons/linear.png";
import Notion from "../../Assets/icons/notion.png";
import Spotify from "../../Assets/icons/spotify.png";
import Things from "../../Assets/icons/things.png";
import TickTick from "../../Assets/icons/ticktick.png";
import Zoom from "../../Assets/icons/zoom.png";

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
    icon: Calender,
  },
  {
    name: "Spotify",
    description: "Visualize listened songs on your calendar",
    icon: Spotify,
  },
  {
    name: "Zoom",
    description: "Create video calls from your calendar",
    icon: Zoom,
  },
  {
    name: "Linear",
    description: "Project Management and Issue tracking",
    icon: Linear,
  },
  {
    name: "Notion",
    description: "Project Management and Issue Tracking",
    icon: Notion,
  },
  {
    name: "Todoist",
    description: "Project Management and Issue Tracking",
    icon: Things,
  },
  {
    name: "TickTick",
    description: "Project Management and Issue Tracking",
    icon: TickTick,
  },
  { name: "Things", description: "Sync todos", icon: Things },
  { name: "Apple Reminders", description: "Sync todos", icon: AppleReminder },
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
              <div className="center">
                <p>Apps</p>
                <div className="list">
                  {integrations.map((integ, index) => (
                    <div className="integ-item">
                      <img
                        src={integ.icon}
                        style={{ width: "40px", height: "40px" }}
                        alt="Hello"
                      ></img>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        <strong>
                          <p style={{ margin: "0px" }}>{integ.name}</p>
                        </strong>
                        <p style={{ margin: "0px", color: "gray" }}>
                          {integ.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
