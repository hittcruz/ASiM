import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  usuarioLogueado: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContexto = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  const login = () => {
    setUsuarioLogueado(true);
  };

  const logout = () => {
    setUsuarioLogueado(false);
  };

  return (
    <AuthContexto.Provider value={{ usuarioLogueado, login, logout }}>
      {children}
    </AuthContexto.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContexto);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};
