module.exports= 
{
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PW,
    "database": process.env.MYSQL_DB,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  } 
};
