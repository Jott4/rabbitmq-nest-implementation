# RabbitMQ NestJs microservice implementation

Olá, o intuito do repositório é mostrar como implementar o RabbitMQ em uma aplicação NestJs, utilizando microserviços.
A aplicação consiste em um app que consome as mensagens da fila, e um client que produz mensagens.

## Como rodar o projeto

Suba o docker com o rabbitMQ com o comando:

```bash
docker-compose up -d
```

Instale as dependências dos projetos _app_ e _client_ com o comando:

```bash
yarn
# ou npm install
```

Rode os projetos _app_ e _client_ com o comando:

```bash
yarn start:dev
# ou npm run start:dev
```

## Como testar o projeto

Primeiro crie uma queue no rabbit com o nome _user-messages_. Faça um GET para o <a href="http://localhost:3000">endpoint</a> para produzir uma mensagem na fila. Você pode ver a mensagem sendo consumida no terminal do projeto _app_ e no em <a href="http://localhost:15672">admin do rabbit</a>.

Outro teste interessante é parar o serviço _app_ e fazer um GET para o <a href="http://localhost:3000">endpoint</a>. Quando o serviço _app_ for iniciado novamente, a mensagem será consumida.
