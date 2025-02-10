# WEBFLIX API End Points-

# User Registration Endpoint-

## Endpoint-
POST /users/register

## Description
This endpoint registers a new user by accepting their details. Upon successful registration, it returns the user's details and an authentication token.

## Request
### Headers
Content-Type: application/json

### Body Parameters
-username (string): username of the user, must be at least 3 characters long.
-email (string): Email of the user, must be a valid email format.
-age (number): age of the user must be over 18.
-password (string): Password of the user, must be at least 6 characters long.

### Example Request Body
{
  "username": "John",
  "email": "john.doe@example.com",
  "age": "23",
  "password": "password123"
}

### Response Example
### Status Code: 201 Created
{
  "token": "generated_jwt_token",
  "user": {
    "_id": "user_id",
    "username": "John",
    "email": "john.doe@example.com",
    "age": "23"
  }
}

### Error Responses Example
### Status Code: 400 Bad Request
{
  "errors": [
    {
      "msg": "username must be at least 3 characters long",
      "param": "username",
      "location": "body"
    }
  ]
}


# User Login Endpoint-

## Endpoint-
POST /users/login

## Description
Allows a registered user to log in by providing their email and password. Returns an authentication token.

## Request
### Headers
Content-Type: application/json

### Body Parameters
-email (string): User's email, must be valid.
-password (string): User's password, must be at least 6 characters long.

### Example Request Body
{
  "email": "john.doe@example.com",
  "password": "password123"
}

### Response Example
### Status Code: 200 OK
{
  "token": "generated_jwt_token",
  "user": {
    "_id": "user_id",
    "username": "John",
    "email": "john.doe@example.com"
  }
}

### Error Responses Example
### Status Code: 401 Unauthorized
{
  "message": "Invalid email or password"
}


# User Profile Endpoint-

## Endpoint-
GET /users/register

## Description
Retrieves the profile of the currently authenticated user.

## Request
### Headers
Authorization: Bearer <jwt_token>

### Response Example
### Status Code: 200 OK
{
  "_id": "user_id",
  "username": "John",
  "age": "Doe",
  "email": "john.doe@example.com"
}

### Error Responses Example
### Status Code: 401 Unauthorized
{
  "message": "Unauthorized - token is unavailable"
}


# User Logout Endpoint-

## Endpoint-
GET /users/logout

## Description
Logs out the authenticated user by blacklisting their token.

## Request
### Headers
Authorization: Bearer <jwt_token>

### Response Example
### Status Code: 200 OK
{
  "message": "Successfully logged out!"
}

### Error Responses Example
### Status Code: 401 Unauthorized
{
  "message": "Unauthorized - token is unavailable"
}



# User editprofile Endpoint-

## Endpoint-
POST /users/editprofile

## Description
This endpoint allows the user to update their profile information, including the username and photo. The user must be authenticated via a token (JWT). The photo file, if provided, will be uploaded to the server.

## Request
### Headers
Content-Type: multipart/form-data (for file uploads)
### Authorization
Authorization: Bearer jwt_token (This token should be provided in the Authorization header to verify the user).

### Body Parameters
username (string): The new username of the user. It must be at least 3 characters long.
photo (file): The new profile photo of the user. It should be a valid image file.

### Example Request Body
{
  "username": "JohnDoeUpdated",
  "photo": "file.jpg"
}


### Response Example
### Status Code: 200 Created
{
  "message": "Profile updated successfully",
  "user": {
    "_id": "user_id",
    "username": "JohnDoeUpdated",
    "email": "john.doe@example.com",
    "age": 23,
    "photo": "/uploads/new-profile-photo.jpg"
  }
}


### Error Responses Example
### Status Code: 400 Bad Request

{
  "message": "User not found"
}

{
  "message": "Invalid file type"
}

