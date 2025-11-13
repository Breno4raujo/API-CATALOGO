# 🛒 API REST - Catálogo de Produtos

API simples construída em **Node.js com Express**, aplicando o conceito de **Model, Controller e Routes** com **CRUD completo em memória**.

---

## 🚀 Tecnologias usadas

- Node.js
- Express.js
- JavaScript (ESM)
- Programação Orientada a Objetos

---

## 🏗️ Estrutura do Projeto

```
src/
├── app.js
├── controllers/
│   └── ProdutoController.js
├── models/
│   └── Produto.js
└── routes/
    └── produtoRoutes.js
```

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seuusuario/api-catalogo.git

# Entre na pasta
cd api-catalogo

# Instale as dependências
npm install
```

Crie um arquivo `package.json` com:

```json
{
  "type": "module",
  "scripts": {
    "dev": "node --watch src/app.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## 🧠 Como rodar o servidor

```bash
npm run dev
```

O servidor será iniciado em:

👉 `http://localhost:3000`

---

## 📚 Rotas disponíveis

| Método | Rota | Descrição |
|--------|------|------------|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca um produto pelo ID |
| POST | `/produtos` | Cria um novo produto |
| PUT | `/produtos/:id` | Atualiza um produto existente |
| DELETE | `/produtos/:id` | Remove um produto |

### Exemplo de JSON (POST ou PUT)

```json
{
  "nome": "Notebook",
  "categoria": "Eletrônicos",
  "preco": 3500
}
```

---

## 💡 Explicação simples

- **Model**: Define o formato do produto.  
- **Controller**: Contém a lógica (criar, listar, atualizar, deletar).  
- **Routes**: Liga as URLs aos métodos do controller.  
- **app.js**: Ponto inicial do servidor Express.

---

👨‍💻 **Feito por:** Breno Araujo  
📅 Projeto de estudo — API REST com Node.js e Express
