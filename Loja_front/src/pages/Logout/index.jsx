import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import autentificaService from '../../services/autentificaService'

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      autentificaService.logout();
      navigate('/login');
      window.location.reload();
    },500);
  }, []);

  return (
    <div>
      <h1>Deslogando...</h1>
    </div>
  )
}