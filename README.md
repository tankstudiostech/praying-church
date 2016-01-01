# user-management
Template for quickly setting up simple user management

I wanted a simple starting point for any app that requires user authentication.

It uses Node, express, and MongoDB with Mongoose. Currently it only supports basic authentication using tokens.  Future plans will support Facebook, Google, and other types of authentication.

To get started, set up config/config.js.

* secret - the secret used for creating tokens
* mongoCn - the connection string for your mongo databse
* port - the port for node to run on
* bypassAuth - ignores token authentication
* tokenExpiration - time until token expires, in seconds

API Calls

POST api/authenticate
Receives a valid user and returns a token.
* email
* pword

api/members
POST
Creates a member
* email
* fname
* lname
* pword
* role

api/members
GET
Returns all the members

/members/:memberId
GET
Finds the member by the member id

PUT
Updates a member by the id
* email
* fname
* lname
* word
* role

DELETE
Deletes a member by the id
