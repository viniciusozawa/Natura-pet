import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        {/* Número 404 Grande */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-bold text-gradient mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </div>

        {/* Título e Descrição */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Oops! Página Não <span className="text-gradient">Encontrada</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Desculpe, a página que você está procurando não existe ou foi removida.
          </p>
          <p className="text-base text-muted-foreground">
            URL tentada: <code className="bg-muted px-2 py-1 rounded text-primary font-mono text-sm">{location.pathname}</code>
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Home className="w-5 h-5" />
              Ir para Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="gap-2 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Button>
        </div>

        {/* Elemento Decorativo */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-3 h-3 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-3 h-3 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-3 h-3 bg-secondary/50 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
