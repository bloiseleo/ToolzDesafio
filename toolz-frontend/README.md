# Toolz - Front End

Essa pasta contêm todo o código do front-end da aplicação. Essa aplicação é contruída utilizando as seguintes tecnologias:

- Next.JS (React com power ups)
- Tailwind CSS

Não foi utilizada nenhuma outra biblioteca para construção de componentes e, também, templates.

## Como executar o projeto?

Para executar os aplicativos sem a presença das tecnologias necessárias, você precisa do Docker. Ele irá suprir toda a necessidade de infraestrutura da aplicação. Instale-o e siga o passo a passo abaixo.

Primeiro, você precisa clonar o projeto e acessar a pasta `toolz-frontend`. Depois disso, você pode executar: `docker build -t toolz:frontend .` para buildar o projeto e, em seguida, `docker run -p 3000:3000 toolz:frontend` para executar a aplicação e conseguir acessá-la.

### Como executar sem docker?

Para executar sem o docker, você precisará ter o node 20.13.1 e o npm instalado. Depois de instalar e garantir que o `node` está no seu path, você pode executar: `npm install` dentro da pasta `toolz-frontend` para instalar as dependências. Por fim, basta executar `npm run dev` para acessar a aplicação.