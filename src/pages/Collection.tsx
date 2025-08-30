import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import arvandis1 from "@/assets/arvandis-1.png";
import arvandis2 from "@/assets/arvandis-2.png";
import arvandis3 from "@/assets/arvandis-3.png";

const Collection = () => {
  const navigate = useNavigate();

  const images = [
    { src: arvandis1, alt: "Arvandis with headphones" },
    { src: arvandis2, alt: "Arvandis in banana costume" },
    { src: arvandis3, alt: "Arvandis gaming setup" }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-in slide-in-from-top-4 duration-1000">
            The Arvandis Collection
          </h1>
          <p className="text-xl text-muted-foreground animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            Behold the legendary moments captured in time ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 animate-in fade-in-50 slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
          <Button
            variant="hero"
            size="xl"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            Back to the Beginning
          </Button>
          <p className="text-muted-foreground">
            Hope you enjoyed this legendary collection! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;