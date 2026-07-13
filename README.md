<div align="center">

# 💼 JobFlow

### Uma aplicação de gerenciamento de candidaturas criada com foco em experiência do usuário, organização visual e eficiência no acompanhamento de processos seletivos.

Produto digital desenvolvido para solucionar um problema real de organização de candidaturas, combinando princípios de UX Design, arquitetura de interface e desenvolvimento Front-end.

<br>

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-671DDF?logo=axios&logoColor=white)](https://axios-http.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)](https://job-flow-demo-1.vercel.app)

### 🚀 **Live Demo**

**https://job-flow-demo-1.vercel.app**

</div>

---

# 📖 Sobre o projeto

Durante uma busca por emprego é comum participar de diversos processos seletivos simultaneamente.

Com isso surgem desafios como:

- Em quais empresas já me candidatei?
- Qual vaga está em entrevista?
- Quais processos foram encerrados?
- Quando enviei determinada candidatura?

O **JobFlow** foi criado para centralizar essas informações em uma única aplicação, permitindo acompanhar todo o fluxo de candidaturas de forma visual e organizada.

O projeto simula uma aplicação real, utilizando consumo de API REST, gerenciamento de estado com React Hooks e uma arquitetura separada por responsabilidades.

---

# ✨ Funcionalidades

## 📋 Gerenciamento de vagas

- Cadastro de candidaturas
- Edição de informações
- Exclusão de vagas
- Atualização de status
- Persistência através de API REST

## 🔎 Organização

- Busca por empresa
- Busca por cargo
- Filtro por status
- Pipeline de acompanhamento

## 📊 Dashboard

- Total de vagas
- Enviadas
- Entrevistas
- Testes técnicos
- Ofertas
- Rejeições
- Taxa de retorno

## 💼 Informações da vaga

- Empresa
- Cargo
- Salário
- Modalidade
- Local da vaga
- Status do processo
- Datas de candidatura e atualização

---

<h2 align="center">📸 Preview</h2>

<p align="center">
  <img src="./screenshots/hero.png" width="48%">
  <img src="./screenshots/dashboard.png" width="48%">
</p>

<p align="center">
  <img src="./screenshots/job-form.png" width="48%">
  <img src="./screenshots/job-board.png" width="48%">
</p>

---

# 🛠 Tecnologias

### Front-end

- React
- TypeScript
- Vite
- CSS
- Hooks customizados

### Comunicação e dados

- Axios
- API REST
- JSON Server
- Variáveis de ambiente (`.env`)

### Arquitetura

- Componentização
- Separação de responsabilidades
- Service Layer
- Tipagem com TypeScript
- Gerenciamento de estado

---

# 📂 Estrutura do projeto

```text
src
│
├── components
│
├── hooks
│   └── useJobs.ts
│
├── services
│   ├── api.ts
│   └── jobService.ts
│
├── types
│
├── constants
│
└── App.tsx
```

---

# 🔄 Arquitetura da aplicação

```text
React Components

        ↓

Custom Hooks
(useJobs)

        ↓

Services
(jobService)

        ↓

Axios

        ↓

API REST
(JSON Server)
```

---

# 🚀 Executando localmente

Clone o projeto:

```bash
git clone https://github.com/danielescheibler/JobFlow.git
```

Entre na pasta:

```bash
cd JobFlow
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente:

Crie um arquivo `.env`:

```env
VITE_API_URL=http://localhost:3001
```

Inicie a API:

```bash
npx json-server db.json --port 3001
```

Inicie o projeto:

```bash
npm run dev
```

---

# 🎯 Roadmap

## ✅ Concluído

- Cadastro de vagas
- Dashboard
- Filtros
- Busca
- Componentização
- Hooks customizados
- Integração com API REST
- Operações CRUD
- Axios
- Service Layer
- Deploy na Vercel

## 🚧 Em desenvolvimento

- Loading states
- Tratamento visual de erros
- Prioridade das vagas
- Observações
- Link da vaga
- Melhorias no Dashboard

## 🔮 Futuro

- Drag and Drop
- Autenticação de usuários
- Backend próprio
- Node.js + Express
- PostgreSQL
- Prisma ORM
- Exportação CSV/PDF
- Tema Dark

---

# 💡 Objetivo

Este projeto foi desenvolvido para praticar conceitos modernos de desenvolvimento Front-end utilizando React e TypeScript, simulando uma aplicação baseada em uma necessidade real.

Além disso, demonstra conhecimentos em:

- Desenvolvimento de interfaces
- Consumo de APIs
- Arquitetura Front-end
- Componentização
- Tipagem
- Hooks customizados
- Organização de código
- Integração HTTP
- Boas práticas de desenvolvimento

---

# 👩‍💻 Desenvolvido por

### Daniele Scheibler

UX/UI Designer | Front-end Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielescheibler/)

[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/danielescheibler)

📧 [danielescheibler@gmail.com](mailto:danielescheibler@gmail.com)

---

<div align="center">

⭐ Se este projeto foi interessante para você, considere deixar uma estrela no repositório.

</div>
