import { createContext, useMemo, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks";

interface User {
  id?: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (data: User) => Promise<void>;
  register: (data: User) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [registeredUsers, setRegisteredUsers] = useLocalStorage<User[] | []>(
    "registeredUsers",
    []
  );
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const navigate = useNavigate();

  const register = useCallback(
    async (data: User) => {
      const hasUserExists = registeredUsers.find(
        (user) => user.email === data.email
      );

      if (hasUserExists) {
        return console.info("User already exists");
      }

      const newuser = { ...data, id: crypto.randomUUID() };

      setRegisteredUsers([...registeredUsers, newuser]);
      navigate("/login", { replace: true });
    },
    [navigate, setRegisteredUsers, registeredUsers]
  );

  const login = useCallback(
    async (data: User) => {
      const hasUserExists = registeredUsers.find(
        (user) => user.email === data.email
      );

      if (!hasUserExists) {
        return console.info("User not found");
      }

      if (data.password !== hasUserExists.password) {
        return console.info("Invalid credentials");
      }

      setUser(hasUserExists);
      // setUser(data);
      navigate("/");
    },
    [navigate, setUser, registeredUsers]
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate("/login", { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
    }),
    [user, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
