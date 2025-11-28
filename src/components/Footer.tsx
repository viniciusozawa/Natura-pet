import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">NaturaPet</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Brinquedos naturais e sustentáveis para a felicidade do seu pet e do planeta.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Orelha Bovina</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Focinho Bovino</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Traqueia</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pata Bovina</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Sobre Nós</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Sustentabilidade</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contato</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Envios</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Devoluções</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacidade</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 NaturaPet. Todos os direitos reservados.</p>
          <p>Feito com 💚 para pets e para o planeta Att. Agro G</p>
          
        </div>
      </div>
    </footer>
  );
}
