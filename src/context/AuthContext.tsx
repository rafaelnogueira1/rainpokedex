import { createContext, useMemo, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks";
import { useToast } from "@/components/ui/use-toast";

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
  const { toast } = useToast();

  const register = useCallback(
    async (data: User) => {
      const hasUserExists = registeredUsers.find(
        (user) => user.email === data.email
      );

      if (hasUserExists) {
        toast({
          title: "Register Error",
          description: "User already exists",
          variant: "destructive",
        });

        return;
      }

      const newuser = { ...data, id: crypto.randomUUID() };

      setRegisteredUsers([...registeredUsers, newuser]);
      navigate("/login", { replace: true });
    },
    [navigate, setRegisteredUsers, registeredUsers, toast]
  );

  const login = useCallback(
    async (data: User) => {
      const hasUserExists = registeredUsers.find(
        (user) => user.email === data.email
      );

      if (!hasUserExists) {
        toast({
          title: "Login Error",
          description: "User not found",
          variant: "destructive",
        });

        return;
      }

      if (data.password !== hasUserExists.password) {
        toast({
          title: "Login Error",
          description: "Invalid credentials",
          variant: "destructive",
        });

        return;
      }

      setUser(hasUserExists);
      navigate("/");
    },
    [navigate, setUser, registeredUsers, toast]
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
