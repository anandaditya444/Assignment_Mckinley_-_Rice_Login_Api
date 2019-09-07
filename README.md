# Assignment_Mckinley_-_Rice_Login_Api
## Requirements

As it is a Node application, you will need Node.js installed. 

The app uses a SQL database via Sequelize ORM. It was tested with PostgreSQL, but should work with other supported databases as well.

## Installation

Clone the repository and simply run `npm install` from the root folder.

## Configuration

In order to run the application, a database connection string has to be configured. The connection string is stored in `app/sequelize.js`.

When Sequelize is configured, you can run the setup script that creates the `users` table and also adds one default user (username: `user`, password: `user`). From the root directory run:

```
node setup.js
