# JSON Server without Express

## Source

[Link](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d)

## Step

### Installing JSON Server

```shell
npm i -g json-server
```

### Running The Server

```shell
json-server --watch db.json
```

### RESTful API

要參考 `db.json` 的組成

```text
GET    /employees
GET    /employees/{id}
POST   /employees
PUT    /employees/{id}
PATCH  /employees/{id}
DELETE /employees/{id}
```

[API reference](https://github.com/typicode/json-server)
