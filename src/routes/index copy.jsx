import {useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminPanel from "./AdminPanel";
import Page404 from "./Page404";
import { useWallet } from "@solana/wallet-adapter-react";
import { checkIsAdmin } from "../components/Helper";

const VerifyAdmin = ({children, redirectTo})=>{
  const { publicKey } = useWallet();
  const [admin, setAdmin] = useState(null)

  const checkIfWalletIsConnected = async () => {
    try {
      console.log("publickey", publicKey.toString())
      setAdmin(null)
      if (publicKey) {
        let isAdmin = await checkIsAdmin(publicKey.toString());
        isAdmin = isAdmin?.data.success
        console.log(isAdmin)
        if(isAdmin){
          setAdmin(true)
        }else{
          setAdmin(false)
        }
      } else {
        setAdmin(false)
      }
    } catch (error) {
    }
  };
  useEffect(() => {
    let isAPISubscribed = true;
    if (isAPISubscribed) {
      setTimeout(()=>{
        checkIfWalletIsConnected()
      }, 2000)
    }
    return () => {
      isAPISubscribed = false;
    };
  }, [publicKey]);

  if(admin===true){
    return children
  }else if(admin===false){
    return <Navigate to={redirectTo} />
  }
  return <div style={{height:"100vh", width:"100%", background:"#160A38"}}></div> 
}


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<VerifyAdmin redirectTo={"/"}><AdminPanel /></VerifyAdmin>} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/asset-manifest.json" element={<Navigate to="/dashboard" replace />} />
        <Route path="/manifest.json" element={<Navigate to="/dashboard" replace />} />
        <Route path="/robots.txt" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
};

export default Router;
