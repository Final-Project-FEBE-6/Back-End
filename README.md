# Back-End Final Project

---
## CRUD USER/ADMIN

### Get All Data User ( Admin )

Request

```
GET: http://localhost:3000/user
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Response

```
{
  "message": "success get All users data",
  "data": [
    {
      "_id": "63831e9388852b9feb47022c",
      "name": "dinooo",
      "email": "dino@gmail.com",
      "password": "1234",
      "role": "admin",
      "__v": 0
    },
    {
      "_id": "6383c37c505fc48d0abec5cf",
      "name": "dinoooooooo",
      "email": "dinooo@gmail.com",
      "password": "$2b$10$LNYs45n2OO2tQRdoa6YklO/toUh6PTKriGq77CRuKLwtKVs7FSrN6",
      "role": "admin",
      "__v": 0
    },
  ]
}
```

### Get User By Id ( Admin )

Request

```
GET: http://localhost:3000/user/63831e9388852b9feb47022c
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Response

```
{
  "message": "success get data users by id",
  "data": {
    "_id": "63831e9388852b9feb47022c",
    "name": "dinooo",
    "email": "dino@gmail.com",
    "password": "1234",
    "role": "admin",
    "__v": 0
  }
}
```

### Delete User By Id ( Admin )

Request

```
DELETE: http://localhost:3000/user/63831e9388852b9feb47022c
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Response

```
{
  "message": "Users Data Deleted!"
}
```

### Update User By Id ( User with auth & Admin )

Request

```
PUT: http://localhost:3000/user/63845c2e4ccf12e1727dda9f
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Body

```
{
  "name": "admin2",
  "email": "admin@gmail.com",
  "role": "admin"
}
```

Response

```
{
  "message": "success update user data",
  "data": {
    "_id": "63845c2e4ccf12e1727dda9f",
    "name": "admin2",
    "email": "admin@gmail.com",
    "password": "$2b$10$D6m8NVClKkvsLrxaSiGqT.4bwxQysd/CHgo3FZm0ANGEG/BYakPfm",
    "role": "admin",
    "__v": 0
  }
}
```

### Register ( User & Admin )

Request

```
POST: http://localhost:3000/user/register
```

Body

```
{
  "name": "user21",
  "email": "admin21@gmail.com",
  "password": "123"
  "role": "user"
}
```

Response

```
{
  "message": "register success"
}
```

### Login ( User & Admin )

Request

```
POST: http://localhost:3000/user/login
```

Body

```
{
  "email": "admin21@gmail.com",
  "password": "123"
}
```

Response

```
{
  "message": "success login",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMjFAZ21haWwuY29tIiwiaWF0IjoxNjY5NjI1OTA5fQ.9WtuYO7j3PUZ8nihEFQHXccbXL0ecv-xfmqUZUaTrJw"
}
```
