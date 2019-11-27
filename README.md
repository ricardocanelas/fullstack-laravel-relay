# Laravel + GraphQL + React Relay

This is my playground that I can play with that stack.

What we have here:

- [x] GraphQL configured in Laravel using Lighthouse
- [x] Authentication via GraphQL using [Laravel Passport](https://laravel.com/docs/5.8/passport)
- [x] A project using React + Relay
- [x] Example of authentication using Relay
- [x] PrivateRoute componente
- [ ] Create a TODO
- [ ] Add Subscription
- [ ] Package @mobile

## Getting Start

**Requirements**

- Git
- PHP & Composer
- Node & Yarn
- Docker

**Configuration**

Rename the file `/packages/api/.env.example` to `/packages/api/.env`

**Setup & Containers**

```
yarn docker:build
yarn docker:up
```

It will be able to access:
- Site: http://localhost:8000/
- PHPMyAdmin: http://localhost:8081/
- GraphQL Playground: http://localhost:8000/graphql-playground

Install the dependencies (node_modules and vendor)

```
yarn install
cd packages/api
composer install
```

Now we need to create the tables in the database, add few users, generate the schemas, and run relay-compiler to generate some artifacts.

```
yarn api:migrate
yarn api:seed
yarn api:print-schema
yarn web:relay
```

Attention! The commands `yarn api:print-schema` and `yarn web:relay` you usually exec after change any schema if you have changed that.

Now we need to add install Passport..

```
yarn api:passport
```

After exec the above command, it'll show some KEY information.
Put that information in `/packages/app/.env`. Following the example below:

```
PASSPORT_CLIENT_ID=2
PASSPORT_CLIENT_SECRET=[add-here-the-key-of-the-client-id-2]
```

**Start client side**

```
yarn web:start
```

<small>Maybe you need to restart the containers if it's paused or stopped, so you can execute: `yarn docker:restart`.</small>

**Info**

If you executed `yarn api:seed` there is a default credential

- email: admin@mail.com
- password: password

## Bundle

If you want to put the client side (@web) inside the @api package, just execute the command bellow

```
yarn web:build:toapi
```

and go to  http://localhost:8000/web

# Packages

## @api

This project was bootstrapped from [Laravel v5.8.33](https://laravel.com/docs/5.8#installing-laravel).

**Some files has changed or added:**

- composer.json
  - "barryvdh/laravel-cors"
  - "joselfonseca/lighthouse-graphql-passport-auth"
  - "laravel/passport"
  - "mll-lab/laravel-graphql-playground"
  - "nuwave/lighthouse"
- app/User.php
- app/Http/Kernel *(added HandleCors::class)*
- app/Providers/AuthServiceProvider.php *(added Passport::routes())*
- database/seeds/DatabaseSeeder.php
- database/seeds/UsersTableSeeder.php
- config/auth.php *(changed the api driver to passport)*
- config/lighthouse.php
- config/lighthouse-graphql-passport.php
- config/graphql-playground.php
- resources/views/vendor/graphql-playground/index.blade.php
- graphql/schema.graphql
- graphql/auth.graphql
- storage/app/lighthouse-schema.graphql *(generate using `yarn print-schema`)*

## @api-2

This project was bootstrapped from [Laravel v6.6.0](https://laravel.com/docs/6.x/installation).

**Some files has changed or added:**

- composer.json
  - "nuwave/lighthouse"
  - "mll-lab/laravel-graphql-playground"
  - "barryvdh/laravel-cors"
- database/seeds/DatabaseSeeder.php
- database/seeds/UsersTableSeeder.php
- app/Http/Kernel *(added HandleCors::class)*
- config/lighthouse.php
- config/graphql-playground.php
- graphql/schema.graphql

**URLs:**

- Site: http://localhost:8020/
- GraphQL Playground: http://localhost:8020/graphql-playground

## @web

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) from v16.9.0


# License

This project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).