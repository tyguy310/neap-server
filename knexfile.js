const databaseName = 'coffee_db';

module.exports = {
  production: {
    client: 'postgresql',
    connection: `postgres://sxnaqdzocquuzc:e3qg0URRRfB7SqHaOJPeJ6Pj17@ec2-54-83-31-65.compute-1.amazonaws.com:5432/d3h7l2jdsjpvvh`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  development: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
