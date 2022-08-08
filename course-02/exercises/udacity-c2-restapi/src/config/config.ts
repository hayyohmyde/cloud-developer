export const config = {
  "postgress": {
    "username": "devilabay",
    "password": "devilabay",
    "database": "ugdb",
    "host": "ugdb.c1tp2cfq4l0b.us-east-1.rds.amazonaws.com",
    "dialect": "postgres"
  },
  "aws":{
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "dev": {
    "username": "devilabay",
    "password": "devilabay",
    "database": "ugdb",
    "host": "ugdb.c1tp2cfq4l0b.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
