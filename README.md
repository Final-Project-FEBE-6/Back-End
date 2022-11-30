# Back-End Final Project

---

## CRUD USER/ADMIN

### Get All Data User ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/user
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Response

```json
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
		}
	]
}
```

### Get User By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/user/63831e9388852b9feb47022c
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Response

```json
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
DELETE: https://be-skilvul-production.up.railway.app/user/63831e9388852b9feb47022c
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Response

```json
{
	"message": "Users Data Deleted!"
}
```

### Update User By Id ( User with auth & Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/user/63845c2e4ccf12e1727dda9f
```

Masukkan Authorization (Bearer Token) hasil dari login.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9vb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MjMxMzV9.7WPI4dR3pUP6ggNFEggSlaUyAUdxPfqUntKu7e28Q1A
```

Body

```json
{
	"name": "admin2",
	"email": "admin@gmail.com",
	"role": "admin"
}
```

Response

```json
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

### Register ( User )

Request

```
POST: https://be-skilvul-production.up.railway.app/user/register
```

Body

```json
{
  "name": "user21",
  "email": "admin21@gmail.com",
  "password": "123"
}
```

Response

```json
{
	"message": "register success"
}
```

### Register ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/user/register
```

Body

```json
{
  "name": "user21",
  "email": "admin21@gmail.com",
  "password": "123",
  "role": "admin"
}
```

Response

```json
{
	"message": "register success"
}
```

### Login ( User & Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/user/login
```

Body

```json
{
	"email": "admin21@gmail.com",
	"password": "123"
}
```

Response

```json
{
	"message": "success login",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMjFAZ21haWwuY29tIiwiaWF0IjoxNjY5NjI1OTA5fQ.9WtuYO7j3PUZ8nihEFQHXccbXL0ecv-xfmqUZUaTrJw"
}
```

## CRUD ARTIKEL

### Create Artikel ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/artikel
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"judul": "Mengenal Pentingnya Kesehatan Mental pada Remaja",
	"isi": "Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. Namun hal ini sepertinya sudah menjadi trend di kalangan remaja sekarang.",
	"image": "www.mental-healt.png",
	"tgl_publish": "11-29-2022",
	"sumber": "www.kesehatan-mental.com"
}
```

Response

```json
{
	"message": "Success create artikel"
}
```

### Get All Artikel ( User & Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/artikel
```

Masukkan Authorization (Bearer Token) hasil dari login admin/user.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get all artikel",
	"data": [
		{
			"_id": "6385169a5fd36783cb94bd87",
			"judul": "Pentingnya Kesehatan Mental Remaja",
			"isi": "Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. Namun hal ini sepertinya sudah menjadi trend di kalangan remaja sekarang.",
			"image": "www.mental-healt.png",
			"tgl_publish": "11-29-2022",
			"sumber": "www.kesehatan-mental.com",
			"__v": 0
		},
		{
			"_id": "63851d9f5fd36783cb94bd97",
			"judul": "Mental Remaja",
			"isi": "Kesehatan mental dipengaruhi oleh peristiwa dalam kehidupan yang meninggalkan dampak yang besar pada kepribadian dan perilaku seseorang. Peristiwa-peristiwa tersebut dapat berupa kekerasan dalam rumah tangga, pelecehan anak, atau stres berat jangka panjang.",
			"image": "www.mental-healt.png",
			"tgl_publish": "11-29-2022",
			"sumber": "www.kesehatan-mental.com",
			"__v": 0
		}
	]
}
```

### Get Artikel By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/artikel/6385169a5fd36783cb94bd87
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get artikel by id",
	"data": {
		"_id": "6385169a5fd36783cb94bd87",
		"judul": "Pentingnya Kesehatan Mental Remaja",
		"isi": "Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. Namun hal ini sepertinya sudah menjadi trend di kalangan remaja sekarang.",
		"image": "www.mental-healt.png",
		"tgl_publish": "11-29-2022",
		"sumber": "www.kesehatan-mental.com",
		"__v": 0
	}
}
```

### Update Artikel By Id ( Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/artikel/6385169a5fd36783cb94bd87
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"judul": "Pentingnya Kesehatan Mental Remaja",
	"isi": "Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. Namun hal ini sepertinya sudah menjadi trend di kalangan remaja sekarang.",
	"image": "www.mental-healt.png",
	"tgl_publish": "11-29-2022",
	"sumber": "www.kesehatan-mental.com"
}
```

Response

```json
{
	"message": "success update artikel",
	"data": {
		"_id": "6385169a5fd36783cb94bd87",
		"judul": "Pentingnya Kesehatan Mental Remaja",
		"isi": "Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. Namun hal ini sepertinya sudah menjadi trend di kalangan remaja sekarang.",
		"image": "www.mental-healt.png",
		"tgl_publish": "11-29-2022",
		"sumber": "www.kesehatan-mental.com",
		"__v": 0
	}
}
```

### Delete Artikel By Id ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/artikel/6385169a5fd36783cb94bd87
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "artikel Data Deleted!"
}
```

## CRUD TEST KESEPIAN

### Create Test Kesepian ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/teskesepian
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Seberapa sering kamu merasa tidak memiliki sahabat?"
}
```

Response

```json
{
	"message": "Success create test"
}
```

### Get All Test Kesepian ( User & Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/teskesepian
```

Masukkan Authorization (Bearer Token) hasil dari login admin/user.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get all test kesepian",
	"data": [
		{
			"_id": "6385218f5fd36783cb94bda1",
			"soal": "Seberapa sering kamu merasa tidak bisa meminta bantuan ke siapapun?",
			"__v": 0
		},
		{
			"_id": "638521a75fd36783cb94bda4",
			"soal": "Seberapa sering kamu merasa sendirian?",
			"__v": 0
		},
		{
			"_id": "638521bf5fd36783cb94bda7",
			"soal": "Seberapa sering kamu merasa cocok dengan orang-orang di sekitarmu?",
			"__v": 0
		},
		{
			"_id": "638521db5fd36783cb94bdaa",
			"soal": "Seberapa sering kamu merasa tidak memiliki sahabat?",
			"__v": 0
		}
	]
}
```

### Get Test Kesepian By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/teskesepian/6385218f5fd36783cb94bda1
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get test by id",
	"data": {
		"_id": "6385218f5fd36783cb94bda1",
		"soal": "Seberapa sering kamu merasa tidak bisa meminta bantuan ke siapapun?",
		"__v": 0
	}
}
```

### Update Test Kesepian By Id ( Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/teskesepian/6385218f5fd36783cb94bda1
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Seberapa sering kamu merasa bahwa kamu memiliki teman untuk bercerita?"
}
```

Response

```json
{
	"message": "success update test",
	"data": {
		"_id": "6385218f5fd36783cb94bda1",
		"soal": "Seberapa sering kamu merasa bahwa kamu memiliki teman untuk bercerita?",
		"__v": 0
	}
}
```

### Delete Test Kesepian By Id ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/teskesepian/6385218f5fd36783cb94bda1
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "Test Data Deleted!"
}
```

## CRUD TEST STRESS

### Create Test Stress ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/tesstress
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah kamu stress saat sendirian?"
}
```

Response

```json
{
	"message": "Success create test"
}
```

### Get All Test Stress ( User & Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesstress
```

Masukkan Authorization (Bearer Token) hasil dari login admin/user.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get all test stress",
	"data": [
		{
			"_id": "638525d95fd36783cb94bdbc",
			"soal": "Apakah kamu sering stress?",
			"__v": 0
		},
		{
			"_id": "638525fa5fd36783cb94bdbf",
			"soal": "Apakah kamu stress karena tugas sekolah?",
			"__v": 0
		},
		{
			"_id": "6385260d5fd36783cb94bdc2",
			"soal": "Apakah kamu stress karena masalah keluarga?",
			"__v": 0
		},
		{
			"_id": "6385261e5fd36783cb94bdc5",
			"soal": "Apakah kamu stress saat sendirian?",
			"__v": 0
		}
	]
}
```

### Get Test Stress By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesstress/638525d95fd36783cb94bdbc
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get test by id",
	"data": {
		"_id": "638525d95fd36783cb94bdbc",
		"soal": "Apakah kamu sering stress?",
		"__v": 0
	}
}
```

### Update Test Stress By Id ( Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/tesstress/638525d95fd36783cb94bdbc
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah kamu sering stress karena masalah percintaan?"
}
```

Response

```json
{
	"message": "success update test",
	"data": {
		"_id": "638525d95fd36783cb94bdbc",
		"soal": "Apakah kamu sering stress karena masalah percintaan?",
		"__v": 0
	}
}
```

### Delete Test Stress By Id ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/tesstress/638525d95fd36783cb94bdbc
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "Test Data Deleted!"
}
```

## CRUD TEST OVERTHINKING

### Create Test Overthinking ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/tesoverthinking
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah menurut kamu “Berkonsentrasi adalah hal yang sulit” ? "
}
```

Response

```json
{
	"message": "Success create test"
}
```

### Get All Test Overthinking ( User & Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesoverthinking
```

Masukkan Authorization (Bearer Token) hasil dari login admin/user.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get all test overthinking",
	"data": [
		{
			"_id": "63852aa95fd36783cb94bddb",
			"soal": "Apakah kamu pernah berpikir “Aku kesepian”?",
			"__v": 0
		},
		{
			"_id": "63852abf5fd36783cb94bdde",
			"soal": "Apakah kamu pernah berpikir “Ketika aku tidak dapat keluar dari kondisi ini , aku tidak bisa melanjutkan study?“ ",
			"__v": 0
		},
		{
			"_id": "63852adf5fd36783cb94bde1",
			"soal": "Apakah menurut kamu “Berkonsentrasi adalah hal yang sulit” ? ",
			"__v": 0
		}
	]
}
```

### Get Test Overthinking By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get test by id",
	"data": {
		"_id": "63852aa95fd36783cb94bddb",
		"soal": "Apakah kamu pernah berpikir “Aku kesepian”?",
		"__v": 0
	}
}
```

### Update Test Overthinking By Id ( Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah kamu pernah menuliskan isi pikiranmu dan menganalisis dengan lebih dalam"
}
```

Response

```json
{
	"message": "success update test",
	"data": {
		"_id": "63852aa95fd36783cb94bddb",
		"soal": "Apakah kamu pernah menuliskan isi pikiranmu dan menganalisis dengan lebih dalam",
		"__v": 0
	}
}
```

### Delete Test Overthinking By Id ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "Test Data Deleted!"
}
```

## CRUD TEST OVERTHINKING

### Create Test Overthinking ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/tesoverthinking
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah menurut kamu “Berkonsentrasi adalah hal yang sulit” ? "
}
```

Response

```json
{
	"message": "Success create test"
}
```

### Get All Test Overthinking ( User & Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesoverthinking
```

Masukkan Authorization (Bearer Token) hasil dari login admin/user.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get all test overthinking",
	"data": [
		{
			"_id": "63852aa95fd36783cb94bddb",
			"soal": "Apakah kamu pernah berpikir “Aku kesepian”?",
			"__v": 0
		},
		{
			"_id": "63852abf5fd36783cb94bdde",
			"soal": "Apakah kamu pernah berpikir “Ketika aku tidak dapat keluar dari kondisi ini , aku tidak bisa melanjutkan study?“ ",
			"__v": 0
		},
		{
			"_id": "63852adf5fd36783cb94bde1",
			"soal": "Apakah menurut kamu “Berkonsentrasi adalah hal yang sulit” ? ",
			"__v": 0
		}
	]
}
```

### Get Test Overthinking By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get test by id",
	"data": {
		"_id": "63852aa95fd36783cb94bddb",
		"soal": "Apakah kamu pernah berpikir “Aku kesepian”?",
		"__v": 0
	}
}
```

### Update Test Overthinking By Id ( Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah kamu pernah menuliskan isi pikiranmu dan menganalisis dengan lebih dalam"
}
```

Response

```json
{
	"message": "success update test",
	"data": {
		"_id": "63852aa95fd36783cb94bddb",
		"soal": "Apakah kamu pernah menuliskan isi pikiranmu dan menganalisis dengan lebih dalam",
		"__v": 0
	}
}
```

### Delete Test Overthinking By Id ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "Test Data Deleted!"
}
```

## CRUD TEST OVERTHINKING

### Create Test Overthinking ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/tesoverthinking
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah menurut kamu “Berkonsentrasi adalah hal yang sulit” ? "
}
```

Response

```json
{
	"message": "Success create test"
}
```

### Get All Test Overthinking ( User & Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesoverthinking
```

Masukkan Authorization (Bearer Token) hasil dari login admin/user.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get all test overthinking",
	"data": [
		{
			"_id": "63852aa95fd36783cb94bddb",
			"soal": "Apakah kamu pernah berpikir “Aku kesepian”?",
			"__v": 0
		},
		{
			"_id": "63852abf5fd36783cb94bdde",
			"soal": "Apakah kamu pernah berpikir “Ketika aku tidak dapat keluar dari kondisi ini , aku tidak bisa melanjutkan study?“ ",
			"__v": 0
		},
		{
			"_id": "63852adf5fd36783cb94bde1",
			"soal": "Apakah menurut kamu “Berkonsentrasi adalah hal yang sulit” ? ",
			"__v": 0
		}
	]
}
```

### Get Test Overthinking By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get test by id",
	"data": {
		"_id": "63852aa95fd36783cb94bddb",
		"soal": "Apakah kamu pernah berpikir “Aku kesepian”?",
		"__v": 0
	}
}
```

### Update Test Overthinking By Id ( Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"soal": "Apakah kamu pernah menuliskan isi pikiranmu dan menganalisis dengan lebih dalam"
}
```

Response

```json
{
	"message": "success update test",
	"data": {
		"_id": "63852aa95fd36783cb94bddb",
		"soal": "Apakah kamu pernah menuliskan isi pikiranmu dan menganalisis dengan lebih dalam",
		"__v": 0
	}
}
```

### Delete Test Overthinking By Id ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/tesoverthinking/63852aa95fd36783cb94bddb
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "Test Data Deleted!"
}
```

## CRUD PSIKOLOG

### Create Data Psikolog ( Admin )

Request

```
POST: https://be-skilvul-production.up.railway.app/psikolog
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"gambar": "frofile.jpg",
	"nama": "Arif Setiawan S.Psi",
	"alamat": "Madiun, Jawa Timur",
	"gender": "Laki-laki",
	"umur": "35",
	"pengalaman": "5 tahun"
}
```

Response

```json
{
	"message": "data psikolog has been created !!"
}
```

### Get All Psikolog ( User & Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/psikolog
```

Masukkan Authorization (Bearer Token) hasil dari login admin/user.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "success get data psikolog",
	"data": [
		{
			"_id": "63852e0c5fd36783cb94bded",
			"gambar": "frofile.jpg",
			"nama": "Arif Setiawan S.Psi",
			"alamat": "Madiun, Jawa Timur",
			"gender": "Laki-laki",
			"umur": "35",
			"pengalaman": "5 tahun",
			"__v": 0
		},
		{
			"_id": "63852f455fd36783cb94bdf0",
			"gambar": "frofile.jpg",
			"nama": "Dino S.Psi",
			"alamat": "DKI Jakarta",
			"gender": "Laki-Laki",
			"umur": "38",
			"pengalaman": "4 tahun",
			"__v": 0
		},
		{
			"_id": "63852f675fd36783cb94bdf3",
			"gambar": "frofile.jpg",
			"nama": "Vanya S.Psi",
			"alamat": "DKI Jakarta",
			"gender": "Perempuan",
			"umur": "33",
			"pengalaman": "4 tahun",
			"__v": 0
		}
	]
}
```

### Get Data Psikolog By Id ( Admin )

Request

```
GET: https://be-skilvul-production.up.railway.app/psikolog/63852e0c5fd36783cb94bded
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "You Searched for",
	"data": {
		"_id": "63852e0c5fd36783cb94bded",
		"gambar": "frofile.jpg",
		"nama": "Arif Setiawan S.Psi",
		"alamat": "Madiun, Jawa Timur",
		"gender": "Laki-laki",
		"umur": "35",
		"pengalaman": "5 tahun"
	}
}
```

### Update Data Psikolog By Id ( Admin )

Request

```
PUT: https://be-skilvul-production.up.railway.app/psikolog/63852e0c5fd36783cb94bded
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Body

```json
{
	"gambar": "profile.jpg",
	"nama": "Arif S.Psi",
	"alamat": "Ngawi, Jawa Timur",
	"gender": "Laki-Laki",
	"umur": "33",
	"pengalaman": "4 tahun"
}
```

Response

```json
{
	"message": "Data Psikolog Updated",
	"data": {
		"_id": "63852e0c5fd36783cb94bded",
		"gambar": "profile.jpg",
		"nama": "Arif S.Psi",
		"alamat": "Ngawi, Jawa Timur",
		"gender": "Laki-Laki",
		"umur": "33",
		"pengalaman": "4 tahun"
	}
}
```

### Delete Data Psikolog By Id ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/psikolog/63852e0c5fd36783cb94bded
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "Data Deleted!"
}
```

### Delete All Data Psikolog ( Admin )

Request

```
DELETE: https://be-skilvul-production.up.railway.app/psikolog
```

Masukkan Authorization (Bearer Token) hasil dari login admin.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbm9AZ21haWwuY29tIiwiaWF0IjoxNjY5NjY2MDkzfQ.SExdKnGP5NiHU1hf66V4BCSz9YDyjPELFYsdE6bGI10
```

Response

```json
{
	"message": "All Data Deleted!"
}
```
