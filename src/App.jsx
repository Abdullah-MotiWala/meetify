// import { Fragment as MyFragment } from "react";

import { Route, Routes } from "react-router";
import SignUpPage from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import SignInPage from "./pages/signin";
import UserAddPage from "./pages/organization/user/add";
import UserListingPage from "./pages/organization/user/listing";

function App() {
  return (
    <Routes>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="organization">
        <Route path="user">
          <Route index element={<UserListingPage />} />
          <Route path="add" element={<UserAddPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
