# Api Código do Futuro

## Integrantes

-nome: Ariel Rodrigues
-nome: Guilherme Bonilha
-nome: Luan Fonseca
-nome: Sarah Cardoso
-nome: Victor Pinheiro

## Desafio

*Visando melhorar de seus associados, como Farmarcas iremos desenvolver um sistema chamado Radar, onde o seu objetivo é gerenciar o Fluxo de caixa do lojista fazendo com que o mesmo tenha a possibilidade de fazer o gerenciamento do fluxo de entrada e saída do seu negócio*

**O sistema será desenvolvido em Angular com as seguintes funcionalidades.**

- [ ] Pagina login
- [ ] Página home
- [ ] Página cadastro de produtos
- [ ] Página cadastro de clientes
- [ ] Página cadastro de pedidos dos clientes
- [ ] Página de fluxo de caixa, mostrando a movimentação do mês

## TECNOLOGIAS UTILIZADAS

- HTML
- CSS
- Angular
- REST API em Node.js
- HttpClienteModule no Angular para Rest API

## SUGESTÃO DE ORGANIZAÇÃO DO PROJETO

- Elaboração do kanban com definição dos entregáveis
- Elaboração do kanban (sugestão de utilização: Trello, Jira, etc)
- Criação do backlog
- Detalhamento descritivo das tarefas da squad dentro dos seus cards (e não apenas com títulos genéricos no card)
- Formatação do kanban padrão "to do, doing, done"
- Definição de data de entrega das tarefas nos cards
- Definição de responsável pelo card ou checklist de completude
- Priorização dos cards (ex: tags com cores para maior relevância ou com títulos descritivos para nível de importância na priorização)

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

## Solução

- `npm init`

## CRITÉRIOS DE AVALIAÇÃO

- Itens mínimos para entrega
- Organização do projeto (Kanban no Trello, Jira ou outra ferramenta)
- API básica em Node.js
- Beleza e fluidez do layout:
- Tela de login
- Telas de cadastro e listagem dos produtos
- Telas de cadastro e listagem dos usuários
- Telas de cadastro e listagem dos pedidos
- Telas de fluxo de caixa
- Repositório do GIT
- Fluidez na apresentação

### Referências

- [Link com informações do Projeto Integraor](https://docs.google.com/document/d/1t7k1-_LaiIV_jeNg0f1EuuDUcSINUSWQ/edit#)
- [Repositório - Danilo](https://github.com/torneseumprogramador/codigo-do-futuro-api-fake)
- [Torne-se um Programador - Async Await](https://www.torneseumprogramador.com.br/aula?id=3OalpxsCvTY&aula=101&tipo=back-end&professor=Danilo)