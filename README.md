# Api Código do Futuro

## Desafio

Campos exigidos para as entidades:
Produtos (id, nome, descricao, valor, qtd_estoque)
Clientes (id, nome, telefone, email, cpf, cep, logradouro, numero, bairro, cidade, estado, complemento)
Pedidos (id, cliente_id, valor_total, data)
PedidosProdutos (id, pedido_id, produto_id, valor, quantidade)

Persistência:
Iremos gravar as informações em uma API Node.js com persistência em disco com arquivo.json (Conteúdo dado em aula no dia 23/11/2023) para isso devemos:
Criar uma API em Node.js básica
Fazer os CRUD's listados acima (Produtos, Clientes, Pedidos, PedidosProdutos) salvando os dados em arquivo.json
Utilizar a API básica em Node.js na aplicação front-end (Angular)


### Solução

- `npm init`

## Referências

- [Repositório - Danilo](https://github.com/torneseumprogramador/codigo-do-futuro-api-fake)
- [Torne-se um Programador - Async Await](https://www.torneseumprogramador.com.br/aula?id=3OalpxsCvTY&aula=101&tipo=back-end&professor=Danilo)