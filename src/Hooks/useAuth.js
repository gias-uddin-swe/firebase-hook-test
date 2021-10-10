import { AuthContext } from "../components/Context/AuthProvider";
import { useContext } from "react";
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
