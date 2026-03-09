# CRUD API com Node.js e Express

Este projeto foi desenvolvido durante meus estudos de **Node.js e Express**, com o objetivo de praticar a criação de uma **API REST** e entender melhor o funcionamento de rotas, requisições e respostas no backend.

O foco principal foi aprender os **fundamentos do Express** e implementar operações básicas de um CRUD.

---

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript/TypeScript

---

## Funcionalidades da API

A API permite realizar operações básicas de CRUD:

- Criar registros
- Listar registros
- Atualizar registros
- Deletar registros

Essas operações são expostas através de rotas HTTP utilizando métodos como:

- `GET`
- `POST`
- `PUT`
- `DELETE`

---

## Estrutura básica do projeto

O backend foi desenvolvido utilizando **Express**, responsável por receber requisições, processar dados e retornar respostas em formato JSON.

---

## ▶️ Como rodar o projeto localmente

```bash
# Clonar o repositório
git clone https://github.com/MuriloCamargo12/simple-crud.git

# Entrar na pasta do projeto
cd simple-crud

# Entrar na pasta backend
cd backend

#Criar arquivo .env.local na raiz com:
ACCESS_TOKEN_SECRET=SequênciaAleatóriaDeCaracteres

# Instalar dependências
npm install
# Rodar o projeto
npm run dev

# Entrar na pasta frontend
cd frontend

# Instalar dependências
npm install
# Rodar o projeto
npm start

```

## Observação sobre o frontend

O **frontend utilizado neste projeto foi fornecido pelo curso**, já contendo grande parte da lógica implementada, incluindo funcionalidades como login, logout e comunicação com a API.

Por esse motivo, neste repositório o foco principal foi **a construção e entendimento do backend com Express**, conectando as rotas da API ao frontend já existente.

Durante o desenvolvimento, alguns conceitos utilizados pelo frontend — como **headers, autenticação e envio de tokens** — não foram aprofundados no curso. Isso motivou um estudo posterior para compreender melhor esses mecanismos e como ocorre a comunicação completa entre frontend e backend.

---

## Objetivo do projeto

O objetivo deste projeto foi consolidar conhecimentos iniciais em:

- criação de APIs com Express
- estruturação de rotas
- manipulação de requisições e respostas
- implementação de operações CRUD

Este repositório representa uma etapa do meu processo de aprendizado no desenvolvimento **backend com Node.js**.

---

## Próximos passos de aprendizado

Alguns pontos que pretendo aprofundar a partir deste projeto:

- Autenticação com JWT  
- Uso de headers em requisições HTTP  
- Integração completa entre frontend e backend  
- Conexão com banco de dados
