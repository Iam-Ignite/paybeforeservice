
import React, { createContext, useEffect, useState } from "react";



export const ShopContext = createContext('context');



export const ContextProvider = (props) => {
  

  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [balances, setBalances] = useState([0,0,0]);
  const [refs, Setrefs] = useState([]);
  const [inputAddress, setInputAddress] = useState();
  const [inputAmount, setInputAmount] = useState(10);
  const [errShow, seterrShow] = useState(false);
  const [clickout, setClickout] = useState(false);




  




    //Useeffect
    useEffect(() => {

    
        // setTimeout(() => {
        //   setClickout(false);
        //   //console.log(RefData, balancesData, Vaccinator, "Logging data two trial");
        // }, 3500);
    
         
        }, [])

        const contextValue = { 

                    };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
