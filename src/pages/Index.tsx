import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RejectMessage from "@/components/RejectMessage";

const Index = () => {
  const [showReject, setShowReject] = useState(false);
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/collection");
  };

  const handleNo = () => {
    setShowReject(true);
  };

  if (showReject) {
    return <RejectMessage onBack={() => setShowReject(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-accent/40 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12 animate-in zoom-in-50 duration-1000">
            <div className="text-6xl mb-6 animate-bounce">🤔</div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-8 leading-tight animate-in slide-in-from-top-8 duration-1000 delay-200">
              Are you ready to see the coolest thing ever?
            </h1>
            <p className="text-xl text-muted-foreground mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
              This is your moment of truth... Choose wisely 👀
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in slide-in-from-bottom-8 duration-1000 delay-600">
            <Button
              variant="choice"
              size="xl"
              onClick={handleYes}
              className="text-2xl py-6 px-12 min-w-[200px]"
            >
              YES! 🎉
            </Button>
            
            <div className="text-2xl text-muted-foreground animate-pulse">
              or
            </div>
            
            <Button
              variant="outline"
              size="xl"
              onClick={handleNo}
              className="text-2xl py-6 px-12 min-w-[200px] hover:border-destructive hover:text-destructive"
            >
              No... 😒
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8 animate-in fade-in duration-1000 delay-1000">
            (Seriously though, you'll regret saying no)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
