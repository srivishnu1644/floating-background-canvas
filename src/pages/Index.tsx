
import { useState } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";
import { WelcomeVideo } from "@/components/WelcomeVideo";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'signup' | 'welcome'>('home');

  const handleDiscoverClick = () => setCurrentView('login');
  const handleBackToHome = () => setCurrentView('home');
  const handleShowSignup = () => setCurrentView('signup');
  const handleShowLogin = () => setCurrentView('login');
  const handleLogin = () => setCurrentView('welcome');
  const handleSignup = () => setCurrentView('welcome');
  const handleWelcomeComplete = () => {
    // For now, just go back to home. In a real app, this would go to the main dashboard
    setCurrentView('home');
  };

  if (currentView === 'welcome') {
    return <WelcomeVideo onComplete={handleWelcomeComplete} />;
  }

  if (currentView === 'signup') {
    return (
      <Signup 
        onBack={handleBackToHome}
        onSignIn={handleShowLogin}
        onSignUp={handleSignup}
      />
    );
  }

  if (currentView === 'login') {
    return (
      <Login 
        onBack={handleBackToHome}
        onSignUp={handleShowSignup}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <BackgroundPaths 
      title="THE VIGORS CLUB" 
      onDiscoverClick={handleDiscoverClick} 
    />
  );
};

export default Index;
