# Toolz Desafio

Esse repositório contêm todo o código do desafio da Toolz. O front-end está na pasta `toolz-frontend` e, o back-end, está na pasta `toolz-backend`. Cada um deles pode ser executado separadamente, mas, para facilitar, na raiz dessa pasta existe um `docker-compose.yaml` para levantar a infra necessária. 

> Cada pasta contêm um README explicando quais tecnologias foram utilizadas e como levantar os serviços separadamente.

## Como executar o projeto?
Para executar o projeto, você deve possuir o Docker instalado na sua máquina. Se você estiver no Windows e tiver instalado o `Docker Desktop`, você já possui todos os requisitos necessários. Caso esteja no linux, mac ou não possua o `docker-compose` instalado, você precisará realizar a instalação desse componente.

Para executar todo o projeto, basta clonar esse projeto e, na raiz, digitar o comando `docker-compose up -d`. Ele irá levantar o front-end na url `localhost:3000` e, o back-end, na porta `localhost:8080`.

O usuário que já existe tem o username de `toolz` e a senha é `toolz`.