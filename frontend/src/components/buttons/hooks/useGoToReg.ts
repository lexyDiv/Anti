import { useNavigate } from "react-router-dom";

function useGoToReg() {
  const navigate = useNavigate();
  return () => {
    setTimeout(() => navigate("/test"), 700);
  };
}

export default useGoToReg;
