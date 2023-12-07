import { Routes, Route } from "react-router-dom";

import "./App.css";

// import { Navigation } from "./components";

import { Home, AboutUs, Faq, CreateAccount } from "./pages";
import { ContextProvider } from "./utils/contextShop";
import Dashboard from "./pages/Dashboard/Dashboard";
import Referrals from "./pages/Dashboard/Referrals";
import Contacts from "./pages/Dashboard/Contacts";
import Profile from "./pages/Dashboard/Profile";
import Transactions from "./pages/Dashboard/Transactions";
import Protected from "./components/Protected";
import Login from "./pages/Login";
import ForgetPassword from "./pages/Login/ForgetPassword";
import ResetPassword from "./pages/Login/ResetPassword";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        {/* <Route path="/" element={<Navigation />} /> */}

        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/*" element={<ResetPassword />} />
        <Route
          path="/dashboard"
          element={<Protected component={Dashboard} />}
        />
        <Route
          path="/transactions"
          element={<Protected component={Transactions} />}
        />
        <Route
          path="/refferals"
          element={<Protected component={Referrals} />}
        />
        <Route path="/profile" element={<Protected component={Profile} />} />
        <Route path="/contacts" element={<Protected component={Contacts} />} />
        <Route path="*" element={"NOT FOUND"} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
