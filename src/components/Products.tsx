import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    name: 'Orelha Bovina',
    description: 'Rica em colágeno, promove saúde dental e entretenimento duradouro',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80',
    benefits: ['Limpa os dentes', 'Alto em colágeno', 'Longa duração'],
  },
  {
    name: 'Focinho Bovino',
    description: 'Textura única para mastigação prolongada e fortalecimento da mandíbula',
    image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&q=80',
    benefits: ['Fortalece mandíbula', 'Muito saboroso', 'Natural'],
  },
  {
    name: 'Traqueia Bovina',
    description: 'Crocante e saborosa, fonte natural de glucosamina',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&q=80',
    benefits: ['Rica em glucosamina', 'Textura crocante', 'Saúde articular'],
  },
  {
    name: 'Pata Bovina',
    description: 'Desafio de mastigação para cães de todos os portes',
    image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&q=80',
    benefits: ['Longa duração', 'Todos os portes', 'Entretenimento'],
  },
];

export function Products() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <Badge className="mb-4">Nossos Produtos</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Natureza em Cada Mordida
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada produto é cuidadosamente processado, livre de aditivos químicos,
            conservantes artificiais ou corantes. Apenas natureza pura.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary text-primary-foreground">Natural</Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit) => (
                    <Badge key={benefit} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
