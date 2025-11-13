import Produto from "../models/Produto.js";

let produtos = [];
let proximoId = 1;

export default class ProdutoController {
  listarTodos(req, res) {
    res.json(produtos);
  }

  buscarPorId(req, res) {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    res.json(produto);
  }

  criar(req, res) {
    const { nome, categoria, preco } = req.body;
    if (!nome || !categoria || preco == null) {
      return res.status(400).json({ mensagem: "Dados inválidos" });
    }
    const novoProduto = new Produto(proximoId++, nome, categoria, preco);
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
  }

  atualizar(req, res) {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    const { nome, categoria, preco } = req.body;
    if (nome) produto.nome = nome;
    if (categoria) produto.categoria = categoria;
    if (preco != null) produto.preco = preco;
    res.json(produto);
  }

  deletar(req, res) {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    produtos.splice(index, 1);
    res.status(204).send();
  }
}
