import { Button } from '@/components/ui/button';
import { Leaf, Heart, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Leaf className="w-4 h-4" />
              100% Natural e Sustentável
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Diversão Natural
              <span className="block text-gradient">Para Seu Melhor Amigo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Transformamos resíduos de abatedouros em brinquedos naturais e saudáveis. 
              Enriquecimento ambiental que cuida do seu pet e do planeta.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                Conhecer Produtos
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Saiba Mais
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span>Zero desperdício</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>100% natural</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="w-5 h-5 text-primary" />
                <span>Sustentável</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80" 
                alt="Cachorro feliz brincando"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Aproveitamento Consciente</p>
                  <p className="text-sm text-muted-foreground">Reduzindo desperdício</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
