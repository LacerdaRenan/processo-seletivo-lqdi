# PROCESSO SELETIVO LQDI - FULL STACK PHP ENGINEER

## Teste prático

Inicio: 03/11/2023 10:42

## Iniciar serviço

Ao fazer o download do repositório, podemos subir a aplicação rodando o comando onde está o arquivo docker-compose.yml

```
docker-compose up --build
```

Em seguida devemos atualizar o banco de dados rodando as migrations com o seguinte comando

```
docker-compose exec laravel-docker php artisan migrate
```

### api
A api será iniciada em localhost:8000

### app
O app será iniciado em localhost:3001