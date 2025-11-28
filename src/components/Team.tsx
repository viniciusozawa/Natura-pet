import { Card, CardContent } from '@/components/ui/card';
import { Info, Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Carol from '@/components/assets/carol.jpeg';
import Giovanna from '@/components/assets/giovanna.jpeg';
import Naylla from '@/components/assets/naylla.jpeg';
import Sophia from '@/components/assets/sophia.jpeg';

const team = [
  {
    name: 'Ana Carolline Lima',
    role: 'CEO (Diretora Geral)',
    image: Carol,
    info: ' Líder da empresa, toma as decisões e organiza tudo',
    phone: '+55 11 98765-4321',
  },
  {
    name: 'Naylla Ribeiro ',
    role: 'Diretora de Sustentabilidade',
    image: Naylla,
    info: 'Cuida da parte ambiental e do reaproveitamento dos materiais.',
    phone: '+55 11 98765-4322',
  },
  {
    name: 'Giovanna Gomes',
    role: 'Diretora de Marketing',
    image: Giovanna,
    info: 'Responsável pela divulgação, nome, logo e redes sociais.',
    phone: '+55 11 98765-4323',
  },
  {
    name: 'Sophia Lemes',
    role: 'Diretora Financeira',
    image: Sophia,
    info: 'Controla gastos, lucros e orçamento da empresa.',
    phone: '+55 11 98765-4324',
  },
];

export function Team() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conheça Nossa
            <span className="block text-gradient">Equipe Apaixonada</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais dedicados que trabalham diariamente para transformar
            resíduos em produtos que fazem a diferença na vida dos pets e do planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-slide-up flex flex-col h-full overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                {/* Photo */}
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-2xl flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="text-center mb-3 sm:mb-4 flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary font-semibold mb-2 sm:mb-3">
                    {member.role}
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-2 mb-3 sm:mb-4 flex-shrink-0">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                     <Info className="w-4 h-4 flex-shrink-0" />

                    <span className="truncate">{member.info}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{member.phone}</span>
                  </div>
                </div>

                {/* LinkedIn button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Quer Falar Conosco?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe está sempre disponível para parcerias, dúvidas ou
            sugestões. Entre em contato diretamente com qualquer membro da equipe.
          </p>
          <Button size="lg" className="shadow-lg hover:shadow-xl">

            <Mail className="w-4 h-4 flex-shrink-0" />

            Enviar Mensagem
          </Button>
        </div>
      </div>
    </section>
  );
}