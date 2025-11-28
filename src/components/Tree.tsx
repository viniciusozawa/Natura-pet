import React from 'react';
import './css/Tree.css';

const pessoas = [
  { id: '1', nome: 'CEO', cargo: 'Ana Carolline', nivel: 1 },
  { id: '2', nome: 'Diretora Marketing', cargo: 'Giovanna', nivel: 2, pai: '1' },
  { id: '3', nome: 'Diretora de Sustentabilidade', cargo: 'Naylla', nivel: 2, pai: '1' },
  { id: '4', nome: 'Diretora Financeira', cargo: 'Sophia', nivel: 2, pai: '1' },
  { id: '5', nome: 'Gerente de Conteúdo', cargo: 'Tárik Mohallem', nivel: 3, pai: '2' },
  { id: '7', nome: 'Gerente de Projetos', cargo: 'Stefani Paes', nivel: 3, pai: '3' },
  { id: '9', nome: 'Gerente Financeiro', cargo: 'Maikon Milan', nivel: 3, pai: '4' },
];

export default function Tree() {
  const getNivelClass = (nivel) => {
    return `nivel-${nivel}`;
  };

  const renderPessoa = (pessoa) => {
    const filhos = pessoas.filter(f => f.pai === pessoa.id);
    return (
      <div key={pessoa.id} className={`pessoa ${getNivelClass(pessoa.nivel)}`}>
        <div className="card">
          <strong className="nome-text">{pessoa.nome}</strong>
          <div className="cargo-text">{pessoa.cargo}</div>
        </div>
        {filhos.length > 0 && (
          <div className="filhos">
            {filhos.map(renderPessoa)}
          </div>
        )}
      </div>
    );
  };

  const raiz = pessoas.filter(p => p.nivel === 1);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Organograma</span>
            <span className="block">da Nossa Empresa</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a estrutura hierárquica e os papéis de cada membro da equipe
          </p>
        </div>
        
        <div className="arvore-container">
          <div className="arvore">
            {raiz.map(renderPessoa)}
          </div>
        </div>
      </div>
    </section>
  );
}