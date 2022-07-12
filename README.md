# NLW Heat Server

## API Documentation :books:
#### Base URL
```
  http://localhost:4000
```
## GET:
#### Return all user informations.
```
  GET /profile
```
| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `bearer token` (HEADER AUTH)| `string` | **Mandatory**. Token for user confirmation. |


#### Return the last 3 messages from database.
```
  GET /messages/last3
```


## POST:
#### Creates a new message on database with relation by user (through Token).
```
  POST /messages
```
| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `message` (BODY)| `string` | **Mandatory**. User message. |
| `bearer token` (HEADER AUTH)| `string` | **Mandatory**. Token for verify each user. |


#### Authenticates the user for post messages.
```
  POST /authenticate
```
| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `code` (BODY)| `string` | **Mandatory**. The code inserted is the same as returned by GitHub Oauth, following the link: http://localhost:4000/github. |



## How Install :bookmark_tabs:
```
# Create folder for store the files, like 'nlw-heat-server'

# Clone the project
git clone https://github.com/BieAnimaton/nlw-heat-server

# To install all libraries
yarn

# To start
yarn dev

# The server will start in port 4000
# Access http://localhost:4000
```

## Features :hammer_and_wrench:
- NodeJs
- Typescript
- Express
- Prisma
- Cors
- Dotenv
- Jsonwebtoken
- Axios
- Socket.io