# 2-Full-Stack-Apps-on-AWS
1. [AWS - Install and Configure CLI](#schema1)
2. [Create IAM User](#schema2)
3. [Configure the AWS CLI](#schema3)
4. [Run your first AWS CLI command](#schema4)
5. [Exercise-1-creating-server](#schema5)
6. [Exercise-2-endpoints](#schema6)
7. [Exercise: Provisioning a Cloud Database](#schema7)
8. [Exercise-3-rds](#schema8)


<hr>
<a name='schema1'></a>

## 1. AWS - Install and Configure CLI

https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

### Linux
```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```


- Display the folder that contains the symlink to the aws cli tool
```
which aws
```

- See the current version
```
aws --version
```



<hr>
<a name='schema2'></a>

## 2. Create IAM User
- Create IAM User

In this step, you will create an IAM user with Administrator permissions who is allowed to perform any action in your 
AWS account, only through CLI. After creating such an IAM user, we will use its 
Access key (long-term credentials)** **to configure the AWS CLI locally.

Let’s create an AWS IAM(opens in a new tab) user, and copy its Access key.



The Access key is a combination of an Access Key ID and a Secret Access Key. Let's see the steps to create an IAM user, 
and generate its Access key.

- Set the permissions 
Set the permissions to the new user by attaching the AWS Managed AdministratorAccess policy from the list of 
existing policies.


- Select Command Line Interface (CLI) and click Next.

- Copy the created Access key, Secret access key and store it for later use. You can also download these as a .csv file.

<hr>
<a name='schema3'></a>

# 3. Configure the AWS CLI

- You will need to configure the following four items on your local machine before you can interact with any of the AWS 
services:

1. **Access key** - It is a combination of an Access Key ID and a Secret Access Key. Together, they are referred to as 
access key. You can generate an Access key from the AWS IAM service, and specify the level of permissions 
(authorization) with the help of IAM Roles.

2. **Default AWS Region** - It specifies the AWS Region where you want to send your requests by default.
3. **Default output format** - It specifies how the results are formatted. It can either be a json, yaml, text, 
or a table.
4. **Profile** - A collection of settings is called a profile. The default profile name is `default`, however, 
you can create a new profile using the `aws configure --profile new_name` command.

- Here are the steps to configure the AWS CLI in your terminal:

Run the command below to configure the AWS CLI using the Access Key ID and a Secret Access Key generated in the 
previous step. If you have closed the web console that showed the access key, you can open the downloaded access 
key file (.csv) to copy the keys later.
```
aws configure 
```

- View the current configuration
```
aws configure list
``` 
- View all existing profile names
```
aws configure list-profiles
```
- In case, you want to change the region in a given profile aws configure set <parameter> <value>  --profile <profile-name>
```
aws configure set region us-east-2  
```
- Cofigure Token
```
aws configure set aws_session_token ""
```

- Let the system know that your sensitive information is residing in the .aws folder
```
export AWS_CONFIG_FILE=~/.aws/config
export AWS_SHARED_CREDENTIALS_FILE=~/.aws/credentials
```


<hr>
<a name='schema4'></a>

## 4. Run your first AWS CLI command

- If you've just one profile set locally
```

aws iam list-users
```

- If you've multiple profiles set locally
```
aws iam list-users --profile <profile-name>
```


<hr>
<a name='schema5'></a>

## 5. Exercise-1-creating-server


This is a simple node-express server.

- Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of 
this repository. After cloning, open your terminal and run:
```
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

- Running the Server Locally
To run the server locally in developer mode, open terminal and run:


`npm start` or `node server`

- Important Files and Project Structure

The source code for this demo resides in the ./src directory.

- src/server.js
The main code for this demo is located in the ./src/server.js file. 

- Test URL
'http://localhost:8080/

<hr>
<a name='schema6'></a>

# 6. Exercise-2-endpoints


This is a simple tweeter like application server.

- Getting Setup

- Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of 
this repository. After cloning, open your terminal and run:
```bash
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

- Running the Server Locally
To run the server locally in developer mode, open terminal and run:

`npm start` or `node server`

- Important Files and Project Structure

The source code for this demo resides in the ./src directory.

- Test URL
'http://localhost:8080/

- Curl commands

  - Get tweet by id
  curl --location 'http://localhost:8080/tweets/1'

  - Get list of tweets
  curl --location 'http://localhost:8080/tweets'

  - Get list of tweets filtered by author
  curl --location 'http://localhost:8080/tweets?author=Michael'

  - Create a new tweet
  curl --location 'http://localhost:8080/tweets' \
  --header 'Content-Type: application/json' \
  --data '{
      "author": "Elisabeth",
      "text": "This is the cutest puppy I have ever seen!",
      "imgUrl": ""
  }'


<hr>
<a name='schema7'></a>


## 7. Exercise: Provisioning a Cloud Database

- Install dbeaver ubuntu

```
sudo add-apt-repository ppa:serge-rider/dbeaver-ce
sudo apt-get update
sudo apt-get install dbeaver-ce
```
- Create Security group 
    - Add  Inbone rule
- Create RDS
    - Allow public access

- Run dbeaver
```
dbeaver

```

<hr>
<a name='schema8'></a>

## 8. Exercise-3-rds


- Install Prisma
Prisma is a modern database ORM (Object-Relational Mapping) tool that allows you to work with relational databases 
using a declarative data model and an intuitive programming interface.

1. In the root directory of the project open a command line and enter the following command.
```
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
```
This will create a new Prisma directory and configure Postgres as our database. Now, let's model our data and create 
a database table for tweets.


- Create the Data Model
1. In the prisma directory you will find a file called `schema.prisma`. That is where we will define the structure of 
our database table. We only have a single Tweet table but the configuration would not be much different for more 
complex schemas.
```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Tweet {
  id String @id @default(cuid())
  author String
  text String
  imgUrl String?
}
```

2. In the same directory you can find another file called `seed.js`. This is a script used for filling our database 
with data. In our case, we simply insert couple of tweets so that we have something to work it.

3. `prismaClient.js` is just an util for instantiating a PrismaClient once and using it across the whole project 
instead of doing it in each place.

4. Prisma created also `.env` file where you can specify database url and credentials required to connect to the 
database using the following format.

5. Once you specify those details you should be able to run:

```
npx prisma generate 
```
to generate a prisma client

```
npx prisma migrate dev 
```

to execute migrations and seed script. This will create a Tweet table in the database and run our seed logic.

```
npx prisma db seed
```
to seed the database.

- Connect Endpoints To Database

1. The real magic happens in `tweetService.js` where we use prisma client to interact with our database. 
Here, we have couple of functions to find a tweet by id, find all tweets, find all tweets for a single author 
and create a tweet.
2. Tweet service is further used in `tweetRoutes.js` to execute operations requested by the client.

- Check in database of the new tables.

![](./img/table.png)