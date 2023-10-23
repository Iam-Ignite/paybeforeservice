import './App.css';
import { Home } from './pages';
import { Routes, Route, useLocation  } from "react-router-dom";
import { ContextProvider } from "./utils/contextShop";
import Dashboard from './pages/Dashboard/Dashboard';
import Referrals from './pages/Dashboard/Referrals';
import Contacts from './pages/Dashboard/Contacts';
import Profile from './pages/Dashboard/Profile';
import Transactions from './pages/Dashboard/Transactions';
import Protected from './components/Protected';


const App = () => {
  
  const location = useLocation();
  

  return (
    <ContextProvider >
     <div className="bg-[#1E1E1E] relative bg-center bg-cover bg-no-repeat h-[100%]" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(/backgroundPonzi.svg)`}}>
        <div className={`absolute w-0 xl:w-[500px] h-[500px] top-[0] left-[32%] z-[99] ${location.pathname  !== "/" && "hidden" }`} style={{
          borderRadius: '500px',
          background: 'rgba(51, 68, 98, 0.73)',
          filter: "blur(150px)"
        }}></div>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/dashboard" element={
                   <Protected component={Dashboard} /> 
                 } />
            <Route path="/transactions" element={ 
                    <Protected component={Transactions} />
                  } />
            <Route path="/refferals" element={
                   <Protected component={Referrals} /> 
                  } />
            <Route path="/profile" element={
                   <Protected component={Profile} /> 
                  } />
            <Route path="/contacts" element={
                   <Protected component={Contacts} /> 
                  } />
        </Routes>
        {/* <div className="absolute w-[100%] md:w-[200px] h-[200px] bottom-[0] right-[0] z-[99]" style={{
          borderRadius: '840px',
          background: 'rgba(51, 68, 98, 0.73)',
          filter: "blur(50px)"
        }}></div> */}
      </div>
      </ContextProvider>
  )
}

export default App