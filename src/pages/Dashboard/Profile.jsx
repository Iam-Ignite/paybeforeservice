/** @format */

import { useState } from "react";
import Bankinfo from "../../components/Dashboard/Profile/Bankinfo";
import Personalinfo from "../../components/Dashboard/Profile/Personalinfo";
import Notification from "../../components/Dashboard/Profile/Notification";

export default function Profile() {
  const [tab, setTab] = useState("profile");

  const switchTab = () => {
    switch (tab) {
      case "bank":
        // Code for handling the 'home' tab
        return <Bankinfo />;
        break;
      case "profile":
        // Code for handling the 'profile' tab
        return <Personalinfo />;
        break;
      case "notification":
        // Code for handling the 'settings' tab
        return <Notification />;
        break;
      default:
        // Code for handling an unknown tab
        console.log("Unknown tab");
        break;
    }
  };

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b bg-white m-10 md:m-4 rounded-full">
        <ul className="flex  justify-between px-24 md:px-6 -mb-px">
          <li className="me-2">
            <button
              onClick={() => setTab("profile")}
              className={`inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-[#6E3EFF] dark:hover:text-[#6E3EFF] ${
                tab === "profile"
                  ? "text-[#6e3eff] border-b-2 border-[#6e3eff]"
                  : "border-transparent"
              } `}
            >
              Personal Info
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setTab("bank")}
              className={`inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-[#6E3EFF] dark:hover:text-[#6E3EFF] ${
                tab === "bank"
                  ? "text-[#6e3eff] border-b-2 border-[#6e3eff]"
                  : "border-transparent"
              } `}
              aria-current="page"
            >
              Bank Information
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setTab("notification")}
              className={`inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-[#6E3EFF] dark:hover:text-[#6E3EFF] ${
                tab === "notification"
                  ? "text-[#6e3eff] border-b-2 border-[#6e3eff]"
                  : "border-transparent"
              } `}
            >
              Notifications
            </button>
          </li>
        </ul>
      </div>

      <div className="w-auto text-sm font-medium text-center text-gray-500 border-b bg-white m-10 md:m-4 rounded ">
        {switchTab()}
      </div>
    </div>
  );
}
