# Toolz - Back End

Essa pasta contêm todo o código do back-end da aplicação. Essa aplicação é contruída utilizando as seguintes tecnologias:

- Nest JS com Express
- TypeORM
- PostgreSQL

## Como executar o projeto?

Para executar os aplicativos sem a presença das tecnologias necessárias, você precisa do Docker. Ele irá suprir toda a necessidade de infraestrutura da aplicação. Instale-o e siga o passo a passo abaixo.

Primeiro, você precisa clonar o projeto e acessar a pasta `toolz-backend`. Depois disso, você pode executar: `docker-compose up -d` para buildar e levantar todo o backend. Ele irá levantar o banco de dados, criará o usuário padrão `toolz` com a senha `toolz` e, por fim, disponibilizará a aplicação na porta `8080`.

### Como executar sem docker?

Para executar sem o docker, você precisará ter o node 20.13.1, o npm instalado. Depois de instalar e garantir que o `node` está no seu path, você pode executar: `npm install` dentro da pasta `toolz-backend` para instalar as dependências. Além disso, você irá precisar instalar o `postgresql`. Depois disso, crie um arquivo `.env` na pasta raiz do projeto. Esse arquivo deve conter as seguintes variáveis:

```
DB_HOST= Host no qual o banco está sendo executado
DB_PORT= Porta na qual o banco está sendo executado
DB_USERNAME= Username do banco
DB_PASSWORD= Senha do banco
DB_DATABASE= Nome do database que você irá se conectar
```

Por fim, basta executar a aplicação com o comando `npm run start:dev`. Ela será servida no endereço `localhost:8080`.