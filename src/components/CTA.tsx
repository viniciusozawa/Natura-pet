import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-12 md:p-16 lg:p-20 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Pronto para Transformar a Vida do Seu Pet?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in">
              Junte-se a milhares de tutores que escolheram o melhor para seus cachorros. 
              Receba ofertas exclusivas e dicas de cuidados naturais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground h-12 text-base"
              />
              <Button size="lg" variant="secondary" className="whitespace-nowrap h-12 px-8 font-semibold shadow-xl hover:shadow-2xl">
                Quero Conhecer
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-white/80">
              🌱 Ao se cadastrar, você apoia um futuro mais sustentável
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
