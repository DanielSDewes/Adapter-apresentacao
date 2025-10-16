# Padrão Adapter - Site Educacional

Site moderno e responsivo sobre o padrão de design estrutural **Adapter**, com conteúdo completo, exemplos de código, diagramas e recursos interativos.

## 🎯 Características

- **Design Moderno**: Interface limpa com gradientes, animações suaves e tipografia elegante
- **Navegação Inteligente**: Menu fixo com scroll spy para destacar a seção ativa
- **Código Interativo**: Blocos de código com syntax highlighting e botão de cópia
- **Busca Interna**: Sistema de busca para encontrar rapidamente conteúdo e código
- **Responsivo**: Layout mobile-first que funciona perfeitamente em todos os dispositivos
- **SEO Otimizado**: Meta tags completas, semântica HTML adequada e acessibilidade WCAG AA
- **Imagens Zoom**: Clique nas imagens para visualizá-las em tamanho maior
- **Download PDF**: Acesso fácil ao documento original

## 📚 Conteúdo

O site apresenta integralmente o conteúdo sobre o padrão Adapter:

- Intenção e motivação
- Problema que resolve
- Solução proposta
- Analogia do mundo real
- Estrutura (Adaptador de Objeto e Classe)
- Pseudocódigo completo
- Aplicabilidade
- Guia de implementação
- Prós e contras
- Relações com outros padrões

## 🚀 Tecnologias

- **React 18** - Biblioteca de interface do usuário
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI
- **Prism.js** - Syntax highlighting
- **Lucide React** - Ícones

## 🎨 Design System

O projeto utiliza um design system completo com:

- **Paleta de Cores**: Azul índigo profundo (primário), laranja/âmbar (acentos)
- **Tipografia**: Inter para títulos, Fira Code para código
- **Gradientes**: Primário e acentos com transições suaves
- **Animações**: Fade-in, slide-up, glow e bounce
- **Sombras**: Múltiplos níveis com efeito glow

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+ e npm

### Instalação

```bash
# Clone o repositório
git clone <YOUR_GIT_URL>

# Navegue até o diretório
cd <YOUR_PROJECT_NAME>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens extraídas do PDF
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   ├── CodeBlock.tsx   # Bloco de código com copy
│   ├── Footer.tsx      # Rodapé com links
│   ├── Hero.tsx        # Seção hero
│   ├── ImageCard.tsx   # Card de imagem com zoom
│   ├── Navigation.tsx  # Menu de navegação
│   ├── SearchDialog.tsx # Dialog de busca
│   └── Section.tsx     # Container de seção
├── pages/
│   └── Index.tsx       # Página principal
├── index.css           # Design system e estilos globais
└── main.tsx            # Entry point

public/
└── Adapter1.pdf        # PDF original para download
```

## 🎯 Recursos Implementados

- ✅ Todas as seções do PDF preservadas
- ✅ Imagens do PDF nas seções corretas
- ✅ Blocos de código com syntax highlighting
- ✅ Botão copiar em cada bloco de código
- ✅ Navegação fixa com scroll spy
- ✅ Busca interna por palavra-chave
- ✅ Download do PDF original
- ✅ Zoom nas imagens (modal)
- ✅ Design responsivo mobile-first
- ✅ SEO completo (title, meta, OG tags)
- ✅ Acessibilidade (semântica, ARIA, contraste)
- ✅ Tipografia legível com fontes web
- ✅ Animações e transições suaves

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. O deploy será automático a cada push

### Netlify

1. Conecte seu repositório no [Netlify](https://netlify.com)
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📖 Referências

- [Refactoring Guru - Adapter Pattern](https://refactoring.guru/design-patterns/adapter)
- [SourceMaking - Adapter](https://sourcemaking.com/design_patterns/adapter)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)

## 📄 Licença

Este projeto é baseado em conteúdo educacional sobre padrões de design.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Reportar bugs
2. Sugerir melhorias
3. Adicionar novos exemplos de código
4. Melhorar a documentação

---

Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS
