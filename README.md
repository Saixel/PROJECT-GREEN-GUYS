# GREEN BOYS

Green Boys is our api (data base) created to help people to plant their own crops offering all the necessary information.

- Amazing data base!
- Recommended Sown
- List of beneficial and harmful plants
- And more ...

# Installation

You have to install all the npm packages ```$npm install``` from your console to use it.

# Usage

Actually Green Guys is developed to be a Back-end project for the moment, so it's not going to have a Front. By the way, you can use it installing all the npm packages and doing all the request in Postman.

## EndPoints

### - USERS -
|METHOD  |ENDPOINT         |TOKEN  |ROLE                         |DESCRIPTION    |POST BODY                | RETURNS                |
| :----: | --------------- | :---: | -----------------------------------| :-------: |--------------------- | --------------------- |
|POST     |/users           |Yes    |Admin                |Create the user      |userSchema   | Object created   |
|GET    |/users        |Yes    |Admin           |Get all the users      |-   | Array of users   |
|GET    |/users/:userId |YES    |Admin        |Get user for ID      |-   | Specific object   |
|PUT    |/users/:userId  |Yes    |Admin        |Update the user information      |userSchema modified   | Modified object   |
|DELETE    |/users/:userId  |Yes    |Admin        |Delete the user      |-   | Deleted object   |

### - AUTHENTIFICATION -
|METHOD  |ENDPOINT         |TOKEN  |ROLE                         |DESCRIPTION    |POST BODY                | RETURNS                |
| :----: | --------------- | :---: | -----------------------------------| :-------: |--------------------- | --------------------- |
|GET     |/whoami           |Yes    |User                |Show your user profile      |-   | Object (user)   |
|POST    |/singup        |NO    |User           |Create a new user      |userSchema   | Object created   |
|POST    |/login |YES    |User        |Connect to your user account       |email, password   | Connection confirmation   |

### - PLANTS -
|METHOD  |ENDPOINT         |TOKEN  |ROLE                         |DESCRIPTION    |POST BODY                | RETURNS                |
| :----: | --------------- | :---: | -----------------------------------| :-------: |--------------------- | --------------------- |
|POST     |/plants           |Yes    |Admin                |Add a plant to the database      |plantSchema   | Created object   |
|GET    |/plants        |No    |All           |Show the entire database      |-   | Array of plants   |
|GET    |/plants/:plantId |No   |All        |Show a specific plant      |-   | Specific object   |
|PUT    |/plants/:plantId/beneficial  |No    |All        |Show beneficial plants      |-   | Array of beneficial plants   |
|GET    |/plants/:plantId/harmful|No    |All        |Show harmgul plants      |-   | Array of harmful plants   |
|GET    |/plants/sown/:month  |No    |All        |Show plants recommended to sown in a specific month      |-   | Array of plants to sown in specific month   |
|PUT    |/plants/:plantId  |Yes    |Admin        |Edit a specific plant      |plantSchema modified   | Modified object   |
|DELETE    |/plants/:plantId  |Yes    |Admin        |Delete a specific plant      |-   | Deleted object   |

### - POTS -
|METHOD  |ENDPOINT         |TOKEN  |ROLE                         |DESCRIPTION    |POST BODY                | RETURNS                |
| :----: | --------------- | :---: | -----------------------------------| :-------: |--------------------- | --------------------- |
|POST     |/users/:userId/pots           |Yes    |User                |Create a new pot      |potSchema   | Object created   |
|POST    |/users/:userId/pots/:potId/:plantId        |Yes    |User           |Add a new plant to the pot      |-   | Object plant added   |
|GET    |/users/:userId/pots |Yes   |User        |Get all pots      |-   | Array of plants in all the pots   |
|GET    |/users/:userId/pots/:potId  |Yes    |User        |Get a specific pot      |-   | Array of plants in the pot   |
|DELETE    |/users/:userId/pots/:potId|Yes    |User        |Delete the pot      |-   | Deleted object   |
|DELETE|/users/:userId/pots/:potId/plants/:plantId  |Yes|User|Delete the plant from the pot|- |Deleted object   |

### - CROPS -
|METHOD  |ENDPOINT         |TOKEN  |ROLE                         |DESCRIPTION    |POST BODY                | RETURNS                |
| :----: | --------------- | :---: | -----------------------------------| :-------: |--------------------- | --------------------- |
|POST     |/users/:userId/crops           |Yes    |User                |Create a new crop      |potSchema   | Object created   |
|POST    |/users/:userId/crops/:cropId/:plantId        |Yes    |User           |Add a new plant to the crop      |-   | Object plant added   |
|GET    |/users/:userId/crops |Yes   |User        |Get all crops      |-   | Array of plants in all the crops   |
|GET    |/users/:userId/crops/:cropId  |Yes    |User        |Get a specific crop      |-   | Array of plants in the crop   |
|DELETE    |/users/:userId/crops/:cropId|Yes    |User        |Delete the crop      |-   | Deleted object   |
|DELETE|/users/:userId/crops/:cropId/plants/:plantId  |Yes|User|Delete the plant from the crop|- |Deleted object   |

### - FAVOURITES -
|METHOD  |ENDPOINT         |TOKEN  |ROLE                         |DESCRIPTION    |POST BODY                | RETURNS                |
| :----: | --------------- | :---: | -----------------------------------| :-------: |--------------------- | --------------------- |
|POST     |/users/:userId/favourites/:plantId           |Yes    |User                |Add a plant to favourites      |-   | Object added   |
|GET    |/users/:userId/favourites        |Yes    |User           |Get all your favourites      |-   | Array of ObjectId   |
|DELETE    |/users/:userId/favourites/:plantId |Yes   |User        |Delete a favourite plant      |-   | Deleted object   |

# Sign up (POST)
```
/auth/signup
```
Example:
```json
{
    "name": "Agoney Laposte",
    "password": "platanocongofio",
    "email": "Agoney@guanchemail.com",

}
```
## Login (POST)
```
/auth/login
```
```json
{
    "email": "Agoney@guanchemail.com",
    "password": "platanocongofio"
}
```
## Profile
### GET your profile
```
/profile
```

### Update your profile (PUT)
```
/profile
```
Example:
```json
{
    "phone": 123456789
}
```

## Publications

### GET all publications
```
/publications
```
### POST a publication
```
/publications
```
Example:
```json
{
    "title": "Test publication",
    "description": "This is a test publication"
}
```
### Update a publication (PUT)
```
/publications/:publication
```
Example:
```json
{
    "title": "This is a EDITED publication",
    "description": "This publication was edited"
}
```
### DELETE a publication
```
/publications/:publication
```
## Comments
### GET all comments
```
/publications/:publication/comments
```
### POST a comment
```
/publications/:publication/comments
```
Example:
```json
{
    "description": "This is a test comment",
    "rate": 4
}
```
### DELETE a comment
```
/publications/:publication/:comment
```
# Usage

As every Social Media, you're going to have a Profile with a follow/follower system, a Timeline to be always wondered by the publications and comments of your followed users, an Explore site to watch new publications of random people and Groups, to make great communities to support you in case of any doubt you would have.

# Roadmap

We would like to implement the following ideas in the future:
* Fully functional Groups.
* Private user profiles and groups.
* A Business profile.
* An awesome and colorful Front-end

# Authors

This project was created and developed by:
- [Jorge Ruiz Cabrera](https://github.com/milinagi)
- [Alexis Guanche Ramírez](https://github.com/Saixel)
- [Daniel saavedra Gemmerli](https://github.com/logandsg)

# License

MIT License.
