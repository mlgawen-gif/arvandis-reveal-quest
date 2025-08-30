import { Button } from "@/components/ui/button";

interface RejectMessageProps {
  onBack: () => void;
}

const RejectMessage = ({ onBack }: RejectMessageProps) => {
  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center relative overflow-hidden">
      {/* Sad background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-destructive/50 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-destructive/30 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="text-center px-4 animate-in zoom-in-50 duration-1000">
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-bounce">😤</div>
          <h1 className="text-5xl font-bold text-destructive mb-6 animate-in slide-in-from-top-4 duration-1000 delay-200">
            Fine dickhead
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            have it ur way ig
          </p>
        </div>

        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-1000 delay-600">
          <Button
            variant="reject"
            size="xl"
            onClick={onBack}
          >
            Actually... maybe I do want to see it
          </Button>
          <p className="text-sm text-muted-foreground">
            (You know you're curious...)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RejectMessage;