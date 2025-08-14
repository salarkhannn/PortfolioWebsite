import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = () => {
      const localAuth = localStorage.getItem("portfolio_authenticated");
      const sessionAuth = sessionStorage.getItem("portfolio_session");
      
      // User is authenticated if both localStorage and sessionStorage have the auth tokens
      const authenticated = localAuth === "true" && sessionAuth === "active";
      setIsAuthenticated(authenticated);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("portfolio_authenticated");
    sessionStorage.removeItem("portfolio_session");
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}
