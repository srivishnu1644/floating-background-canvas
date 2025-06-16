
import { useState } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Login } from "@/components/Login";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  return <BackgroundPaths title="THE VIGORS CLUB" onDiscoverClick={() => setShowLogin(true)} />;
};

export default Index;
