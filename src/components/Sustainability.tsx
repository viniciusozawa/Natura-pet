import { Recycle, TreePine, Droplets, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: Recycle,
    number: '100%',
    label: 'Aproveitamento',
    description: 'Resíduos transformados',
  },
  {
    icon: TreePine,
    number: '0',
    label: 'Químicos',
    description: 'Apenas natural',
  },
  {
    icon: Droplets,
    number: '70%',
    label: 'Menos Água',
    description: 'No processamento',
  },
  {
    icon: Sparkles,
    number: '100%',
    label: 'Rastreável',
    description: 'Origem certificada',
  },
];

export function Sustainability() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compromisso com o
            <span className="block text-gradient">Futuro do Planeta</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transformamos o que seria descartado em produtos valiosos. 
            Cada brinquedo representa nossa dedicação à economia circular e sustentabilidade.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
        
        {/* Process flow */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-xl animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Nosso Processo Sustentável
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Coleta Seletiva', desc: 'Parcerias com abatedouros certificados' },
              { step: '02', title: 'Processamento Natural', desc: 'Secagem e preparação sem químicos' },
              { step: '03', title: 'Controle de Qualidade', desc: 'Inspeção rigorosa de segurança' },
              { step: '04', title: 'Entrega Consciente', desc: 'Embalagens biodegradáveis' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-2">{item.step}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
