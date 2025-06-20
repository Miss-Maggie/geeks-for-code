
import { jwtDecode } from "jwt-decode";
export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode<{ id: number; role: string ; username:string ; email:string}>(token);
    return decoded;
  } catch (err) {
    return null;
  }
};