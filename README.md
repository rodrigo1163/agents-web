# NLW Agents

Projeto desenvolvido durante o evento **NLW Agents** da [Rocketseat](https://rocketseat.com.br/).

> **📋 Projeto Frontend**: Esta é a interface web do NLW Agents. Para funcionar corretamente, é necessário configurar o backend disponível em: [agents-server](https://github.com/rodrigo1163/agents-server.git)

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool e servidor de desenvolvimento
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[React Router DOM](https://reactrouter.com/)** - Roteamento para React
- **[TanStack Query](https://tanstack.com/query/)** - Gerenciamento de estado e cache para requisições
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de interface baseados em Radix UI
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[Day.js](https://day.js.org/)** - Manipulação de datas

## 🔧 Padrões de Projeto

- **Component Composition**: Uso de componentes shadcn/ui baseados em Radix UI
- **Custom Hooks**: Hooks personalizados para requisições HTTP (`use-*`)
- **Type Safety**: Tipagem completa com TypeScript e validação com Zod
- **Atomic Design**: Componentes organizados em diferentes níveis de complexidade
- **Path Mapping**: Alias `@/` configurado para imports absolutos

## ⚙️ Configuração e Instalação

> **⚠️ IMPORTANTE**: Este é o frontend da aplicação. Para o funcionamento completo do projeto, é **obrigatório** configurar também o backend que está disponível em: [https://github.com/rodrigo1163/agents-server.git](https://github.com/rodrigo1163/agents-server.git)

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Backend do projeto configurado e rodando (veja instruções abaixo)

### Instalação

#### 1. Configure o Backend

Primeiro, clone e configure o servidor backend:

```bash
# Clone o repositório do backend
git clone https://github.com/rodrigo1163/agents-server.git
cd agents-server

# Siga as instruções do README do backend para instalação e configuração
# Certifique-se de que o servidor esteja rodando antes de prosseguir
```

#### 2. Configure o Frontend

Em um novo terminal, clone e configure este projeto frontend:

```bash
# Clone o repositório do frontend
git clone <url-do-repositorio>
cd web

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

#### 3. Acesse a aplicação

- **Frontend**: `http://localhost:5173`
- **Backend**: Consulte o README do backend para a porta configurada

### Scripts Disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente

## 🎯 Funcionalidades

- Criação de salas
- Gerenciamento de perguntas em tempo real
- Interface responsiva e acessível
- Gravação de áudio

---

Desenvolvido com ❤️ durante o NLW Agents da Rocketseat
