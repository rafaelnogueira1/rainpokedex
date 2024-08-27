import { createContext, useMemo, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks";

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (data: User) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const navigate = useNavigate();

  const login = useCallback(
    async (data: User) => {
      setUser(data);
      navigate("/");
    },
    [navigate, setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate("/login", { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
