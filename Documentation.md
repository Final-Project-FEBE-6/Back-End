# API Spec

## 1. Artikel Collection

### **a. Create Artikel**

This route is connected to Artikel collection of MongoDB. Only user with **admin** role can add the article.

Request :

- Method : POST
- Endpoint : `/artikel`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "judul": "string",
  "isi": "string",
  "image": "string",
  "tgl_publish": "string",
  "sumber": "string"
}
```

Response :

```json
{
  "message": "Success create artikel"
  "data": [
    {
      "_id": "ObjectID",
      "judul": "string",
      "isi": "string",
      "image": "string",
      "tgl_publish": "string",
      "sumber": "string",
      "__v": 0
    },
  ]
}
```

### **b. Read All Artikel**

This route is connected to Artikel collection of MongoDB. User with **admin and member** role can read the article.

Request :

- Method : GET
- Endpoint : `/artikel`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "success get all artikel"
  "data": [
    {
      "_id": "ObjectID",
      "judul": "String",
      "isi": "String",
      "image": "String",
      "tgl_publish": "String",
      "sumber": "String",
      "__v": 0
    },
  ]
}
```

### **c. Read Artikel by ID**

This route is connected to Article collection of MongoDB. User with **admin and member** role can read the article by id.

Request :

- Method : GET
- Endpoint : `/artikel/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "success get artikel by id",
  "data": {
    "_id": "ObjectID",
    "judul": "string",
    "isi": "string",
    "image": "string",
    "tgl_publish": "string",
    "sumber": "string",
    "__v": 0
  }
}
```

### **d. Update Artikel**

This route is connected to Artikel collection of MongoDB. Only user with **admin** role can update the article by id.

Request :

- Method : PATCH
- Endpoint : `/artikel/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "judul": "string",
  "isi": "string",
  "image": "string",
  "tgl_publish": "string",
  "sumber": "string",
}
```

Response :

```json
{
  "message": "success update artikel",
  "data": {
    "_id": "ObjectID",
    "judul": "string",
    "isi": "string",
    "image": "string",
    "tgl_publish": "string",
    "sumber": "string",
    "__v": 0
  }
}
```

### **e. Delete Artikel**

This route is connected to Article collection of MongoDB. Only with **admin** role can delete the article by id.

Request :

- Method : DELETE
- Endpoint : `/artikel/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "artikel Data Deleted!"
}
```