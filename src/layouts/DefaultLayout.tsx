import { Box, Link } from "@mui/material";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <Box>
      {/* Header */}
      <Box>Header</Box>

      <main>
        <Outlet />
      </main>
      <footer>ahihihi</footer>
    </Box>
  );
}

export default DefaultLayout;
