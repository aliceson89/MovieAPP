# Getting Started with MovieAPP

## NPM SET UP

npm i --save
express
cors
pg
pg-hstore  
passport
assport-local
body-parser
cookie-parser
express-session
@babel/cli
@babel/core
@babel/node
@babel/preset-env
graphql-yoga
graphql
sequelize  
styled-components
react-router-dom
prop-types
apollo-boost
@apollo/react-hooks
@apollo/client
nodemon
react-bootstrap

## PostgresSQL SET UP

check version

### `postsql -v`

create role

### `postgres=# CREATE ROLE movie_admin WITH LOGIN PASSWORD ‘****’;`

grant role

### `postgres=# ALTER ROLE movie_admin SUPERUSER CREATEDB LOGIN;`

check list of role

### `postgres=# \du`

create database

### `postgres=# CREATE DATABASE movie_user;`

check database

### `postgres=# \list`

### `postgres=# GRANT ALL PRIVILEGES ON DATABASE movie_user TO movie_admin;`

GRANT

### `postgres=# \connect movie_user`

You are now connected to database "movie_user" as user "movie_admin".

create SCHEMA

### `movie_user=# CREATE SCHEMA users;`

check list of tables

### `postgres=# SELECT * FROM PG_TABLES;`
