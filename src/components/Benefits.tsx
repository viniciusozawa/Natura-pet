import { Heart, Leaf, Brain, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Saúde e Bem-estar',
    description: 'Produtos naturais ricos em nutrientes essenciais, colágeno e glucosamina para articulações saudáveis.',
  },
  {
    icon: Brain,
    title: 'Enriquecimento Mental',
    description: 'Estimula o instinto natural de mastigação, reduzindo ansiedade e comportamentos destrutivos.',
  },
  {
    icon: Shield,
    title: 'Higiene Dental',
    description: 'Mastigação prolongada remove placa e tártaro naturalmente, mantendo dentes limpos e hálito fresco.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Aproveitamento consciente de resíduos, reduzindo desperdício e impacto ambiental.',
  },
];

export function Benefits() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80" 
                alt="Cachorro saudável e feliz"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
          </div>
          
          {/* Right side - Benefits */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Por Que Escolher
                <span className="block text-gradient">Produtos Naturais?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Muito mais que um brinquedo, é um investimento na saúde e felicidade do seu melhor amigo.
              </p>
            </div>
            
            <div className="grid gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={benefit.title}
                    className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
