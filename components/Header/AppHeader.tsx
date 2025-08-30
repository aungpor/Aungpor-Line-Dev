import AppBar from "@mui/material/AppBar";
import HideOnScroll from "./HideOnScroll";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const AppHeader = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            bgcolor: "#000000",
            color: "#ffffff",
          }}
        >
          <div className="container navbar">
            <Toolbar disableGutters sx={{ justifyContent: "space-between", width: "100%", minHeight: "40px !important" }}>
              <Typography variant="h6" component="div">
                My App
              </Typography>
              <div className="flex flex-row gap-[4px]">
                <Button
                className="btn btn-outline-light btn-sm"
                size="small"
                variant="outlined"
                color="inherit"
                sx={{ minWidth: 'auto' }}
              >
                <img src="/header_search.svg" width={24} />
              </Button>
              <Button
                className="btn btn-outline-light btn-sm"
                size="small"
                variant="outlined"
                color="inherit"
                sx={{ minWidth: 'auto' }}
              >
                <img src="/header_user.svg" width={24} />
              </Button>
              </div>
              
            </Toolbar>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ mb: "12px", minHeight: "56px !important" }} />
    </>
  );
};

export default AppHeader;
