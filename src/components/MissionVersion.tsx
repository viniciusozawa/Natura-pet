import { Target, Eye, Heart, Users, Award, Smile } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { icon: Heart, text: 'Bem-estar animal' },
  { icon: Users, text: 'Trabalho em equipe' },
  { icon: Award, text: 'Respeito' },
  { icon: Target, text: 'Compromisso' },
  { icon: Eye, text: 'Criatividade' },
  { icon: Smile, text: 'Bom humor sempre' },
];

export function MissionVersion() {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso Propósito e
            <span className="block text-gradient">Nossa Essência</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais que uma empresa, somos um movimento pela sustentabilidade e bem-estar animal.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Missão */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-slide-up group">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">🌱 Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transformar resíduos de abates de diferentes animais em brinquedos seguros, 
                úteis e sustentáveis para pets, reduzindo o impacto ambiental e promovendo o 
                bem-estar animal.
              </p>
            </CardContent>
          </Card>
          
          {/* Visão */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-slide-up group" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">🌱 Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como uma empresa referência em inovação sustentável no setor pet, 
                mostrando que é possível unir cuidado com os animais e responsabilidade ambiental.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Valores */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-3">🌱 Valores</h3>
              <p className="text-muted-foreground">
                Princípios que guiam cada decisão e ação da nossa equipe
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={value.text}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <span className="font-semibold text-foreground">{value.text}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        {/* Quote section */}
        <div className="mt-12 text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic">
            "Cada produto que criamos é um passo em direção a um futuro mais sustentável 
            e um mundo melhor para nossos pets."
          </blockquote>
        </div>
      </div>
    </section>
  );
}