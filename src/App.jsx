import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MarkAttendance from "./pages/MarkAttendance.jsx";
import AttendanceReports from "./pages/AttendanceReports.jsx";
import Notifications from "./pages/Notifications.jsx";

import SharedLayout from "./components/layouts/sidebar.jsx"; // Updated layout

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Index />} />
                <Route path="mark-attendance" element={<MarkAttendance />} />
                <Route path="attendance-reports" element={<AttendanceReports />} />
                <Route path="notifications" element={<Notifications />} />
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;