# 2-Full-Stack-Apps-on-AWS
1. [AWS - Install and Configure CLI](#schema1)
2. [Create IAM User](#schema2)
3. [Configure the AWS CLI](#schema3)
4. [Run your first AWS CLI command](#schema4)
5. [Exercise-1-creating-server](#schema5)
6. [Exercise-2-endpoints](#schema6)
7. [Exercise: Provisioning a Cloud Database](#schema7)
8. [Exercise-3-rds](#schema8)
9. [Exercise-4-s3](#schema9)
10. [Elastic Beanstalk](#schema10)
11. [Exercise: Deploying our Service to Elastic Beanstalk](#schema11)
12. [Monitoring your Applications](#schema12)
13. [Scalability](#schema13)
14. [Introduction to Securing AWS Applications](#schema14)
15. [Storing Passwords](#schema15)
16. [User Authentication](#schema16)
17. [Exercise: Authentication](#schema17)


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

<hr>
<a name='schema9'></a>


## 9. Exercise-4-s3

- Add file `imageRoutes.js`
- Install `@aws-sdk/client-s3`
```
npm install @aws-sdk/client-s3
```
- Install `multer`
```
npm install multer

```
- Install `multer-s3` 
```
npm install multer-s3 
```

- This is a simple tweeter like application server.

- Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```
npm install
```
>_tip_: **npm i** is shorthand for **npm install**

- Running the Server Locally
To run the server locally in developer mode, open terminal and run:

`npm start` or `node server`

-  Important Files and Project Structure

The source code for this demo resides in the ./src directory.

* Test URL
http://localhost:8080/

- Curl commands

  1. Get tweet by id
  ```
  curl --location 'http://localhost:8080/tweets/1'
  ```

  2. Get list of tweets
  ```
  curl --location 'http://localhost:8080/tweets'
  ```

  3. Get list of tweets filtered by author
  ```
  curl --location 'http://localhost:8080/tweets?author=Michael'
  ```   

    4. Create a new tweet
  ```
  curl --location 'http://localhost:8080/tweets' \
  --header 'Content-Type: application/json' \
  --data '{
      "author": "Elisabeth",
      "text": "This is the cutest puppy I have ever seen!",
      "imgUrl": ""
  }'
  ```

    5. Uploading image
  ```
  curl --location 'http://localhost:8080/images' \
  --form 'file=@"./puppy.jpeg"'                
  {"url":"https://my-tweets-bucket-372538669722.s3.us-east-1.amazonaws.com/1684421206489_file_puppy.jpeg"}     
  ```

<hr>
<a name='schema10'></a>

## 10. Elastic Beanstalk

Elastic Beanstalk is a powerful Development Operations tool (DevOps) that allows you to easily deploy your code to AWS and create the required infrastructure with minimal effort.


Amazon Elastic Beanstalk es un servicio de AWS que permite a los desarrolladores implementar y administrar fácilmente aplicaciones web y servicios en la nube. Proporciona una plataforma que simplifica la implementación, la escalabilidad y la administración de aplicaciones, permitiendo a los desarrolladores centrarse en escribir código sin preocuparse por la infraestructura subyacente.

Aquí hay algunas características clave de Amazon Elastic Beanstalk:

- Facilidad de uso: Elastic Beanstalk facilita la implementación y administración de aplicaciones al proporcionar una interfaz intuitiva de usuario y una serie de herramientas de línea de comandos y APIs que permiten la automatización de tareas comunes.

- Escalabilidad automática: Elastic Beanstalk escala automáticamente los recursos de infraestructura subyacente en función de la carga de la aplicación. Esto significa que la aplicación puede manejar picos de tráfico sin intervención manual, lo que garantiza un rendimiento óptimo y una experiencia del usuario consistente.

- Configuración flexible: Los desarrolladores pueden personalizar la configuración de la infraestructura subyacente, incluyendo el tipo de instancia, el tamaño de la instancia, el equilibrador de carga, las reglas de escalado y más, para adaptarse a las necesidades específicas de su aplicación.

- Soporte para múltiples entornos de desarrollo: Elastic Beanstalk permite la creación de múltiples entornos de desarrollo, como entornos de desarrollo, pruebas y producción, lo que facilita la implementación y la gestión de diferentes versiones de la aplicación.

- Integración con otros servicios de AWS: Elastic Beanstalk se integra con una variedad de servicios de AWS, como Amazon RDS para bases de datos, Amazon S3 para almacenamiento de archivos estáticos, Amazon CloudWatch para monitoreo y registros, entre otros, lo que proporciona una solución completa y escalable para la implementación de aplicaciones en la nube.



You must install the EB CLI according to the instructions specific to your OS: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html



**Para instalar Elastic Beanstalk Command Line Interface (EB CLI) en Ubuntu, puedes seguir estos pasos:**

- Crear un nuevo entorno virtual:

Utiliza la herramienta venv de Python para crear un nuevo entorno virtual en el directorio de tu proyecto:

```
python3 -m venv my_project_env
```


- Activar el entorno virtual:

```
source my_project_env/bin/activate
```


- Instalar EB CLI:

Con el entorno virtual activado, instala EB CLI usando pip:

```
pip install awsebcli
```

- Verificar la instalación:

Una vez instalado, verifica la instalación ejecutando:

```
eb --version

```

Esto debería mostrar la versión de EB CLI que has instalado en tu entorno virtual.


<hr>
<a name='schema11'></a>


## 11. Exercise: Deploying our Service to Elastic Beanstalk


- Inicializamos Elastic Beanstalk
```
eb init
```

- Elegimos nuestra región, en mi caso opción 1
- Nombre de la aplicación
- Usando Node, si.
- Ultima versión
- Después de todo esto se crea una directorio nuevo `.elasticbeanstalk` que contienes archivos de configuración `config.yml`.
- En el archivo `schema.prisma` añadir
```
  binaryTargets = ["native", "rhel-openssl-1.0.x"]
```
Quedando así:
```
generator client {
  provider = "prisma-client-js"
  binaryTargets = ["native", "rhel-openssl-1.0.x"]
}
```

- Ejecutamos para actualizar el cliente de Prisma
```
npx prisma generate
``` 
- Creamos nuestro Elastic Beanstalk environment:
```
eb create
``` 
Y ahora necesitamos expecificar varios parámetros:
- Environment Name: le damos a enter para que sea el que nos dan por defecto
- DNS CNAME prefix: Enter para añadir el valor por defecto
- Select a load balancer type: Por defecto 2
- Activar los Spot Fleet requests: No
Y empieza la creazon del Elastic Beanstalk

Una vez creado, ir AWS.
![EB](./img/eb.png)
Está en estado `severe` para ellos vamos a Configure updates, monitoring, and logging y en la parte que pone Configure updates, monitoring, and logging añadimos las mismas claves que usamos para configurarlos, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION y AWS_S3_BUCKET_NAME


**OJO**

Si se hace cualquier cambion en el código de primsa hay que ejecutar

```
npx prisma generate
``` 
Para actualizar el cliente de Prisma. 

Y Luego
```
eb deploy
```
Para desplegar los cambios en AWS.



<hr>
<a name='schema12'></a>


## 12. Monitoring your Applications

- Activar en AWS Elastic Beanstalk en Configure updates, monitoring, and logging:
  - Amazon X-Ray 
  - Log streaming

- Añadir varios console.log en los archivos `imageRoute.js` y en `tweetRoute.js`
- Añadir en `server.js` estas dos líneas

```js
import AWSXRAY from 'aws-xray-sdk'
app.use(AWSXRAY.express.openSegment('tweet-app'))
```

- Cambiar la const s3 en  `uploadImageToS3Middleware.js` por el siguiente código y añidir el import

``` python
import AWSXRAY from 'aws-xray-sdk'
const s3 = AWSXRAY.captureAWSv3Client(new S3Client({
  credentials: {
    accessKeyId: process.env["AWS_ACCESS_KEY_ID"],
    secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"],
  },
  region: process.env["AWS_REGION"]
}));
```
- Añadir en `prismaClient.js` y cambiar el siguiente código

```python
import {capturePrisma } from '@cosva-lab/aws-xray-sdk-prisma'
const client = capturePrisma(prisma, {namespace: 'remote'})

export default client
```

- Instalar los paqutes 
```
npm install aws-xray-sdk
npm install @cosva-lab/aws-xray-sdk-prisma

```


<hr>
<a name='schema13'></a>



## 13. Scalability


Scalability - is a property of a system which defines its capabilities to grow

**Scaling Vertically (Up)**
Making your instance more powerful by increasing its resources such as more RAM, better CPU, bigger hard-drive, faster GPU etc.


**Scaling Horizontally (Out)**
Adding more server instances and splitting the responsibility.


**Scaling in Elastic Beanstalk**
Go to Configuration, Instance traffic and scaling  and EDIT.


<hr>
<a name='schema14'></a>


## 14. Introduction to Securing AWS Applications

Security is a critical aspect of full-stack application development. Here are the key areas that need to be secured:

**User Authentication:** This involves verifying the identity of users. Techniques such as password hashing, two-factor authentication, and session management are used to ensure that only authorized users can access the application.

**Data Encryption:** Any sensitive data, such as user passwords, should be encrypted both in transit and at rest. This ensures that even if data is intercepted or accessed, it cannot be read without the correct decryption key.

**API Security:** APIs are often used to transmit data between the server and client. They need to be secured to prevent unauthorized access. Techniques include using secure tokens, validating input data to protect against attacks like SQL injection, and rate limiting to prevent abuse.

**Database Security:** Databases often store sensitive data. They should be secured to prevent unauthorized access and data leaks. This can involve encrypting data and using secure database configurations.

No matter what kind of application you are creating, security is always desirable. You need to make sure that the data of your users is stored securely and access to it is only granted to authorized parties. We'll explore concepts related to application security such as:

- Storing passwords
- User authentication and authorization
- How to implement authentication in Node.js
- How to store secrets

<hr>
<a name='schema15'></a>

## 15. Storing Passwords

In order to secure passwords, we need to explore encryption, which is a method of converting data into a code to prevent unauthorized access.

Encryption is particularly important when storing users' passwords. In an ideal secure system, passwords are not stored in plain text. If they were, anyone who gains access to the storage system could read and misuse them.

Instead, passwords are encrypted using a one-way hash function. When a user creates an account or changes their password, the system uses the hash function to turn the password into a string of characters, known as a hash. This hash is then stored in the database.

When the user logs in, the password they enter is hashed again, and this hash is compared with the stored hash. If they match, the password is correct. This way, even if someone gains access to the database, they can't reverse-engineer the passwords from the hashes.


<hr>
<a name='schema16'></a>

## 16. User Authentication


Almost every IT system requires user authentication and/or authorization. Those two terms are often used interchengably, although their meanings are different. So, let's try to clarify what they mean.

Authentication is the process of verifying who the user is while authorization is the process of verifying what permissions the user holds.

Comparing it to a real life example you can consider an airport where first you need to show your ID or Passport to identify yourself (authenticate) and then you need to provide a plane ticket to prove that you have right (you are authorized) to go on a specific flight.


So how do we authenticate the users? Usually we ask users for their username and password, we compare those values with values stored (securely) in our database and if they match we give them access to our system.

This is relatively straightforward but we need to bear in mind that users probably will make multiple requests to our system and they all need to be authenticated. Sending username and password with every request would not only be troublesome but also a security risk as it would increase the chance of someone stealing those credentials.

There are two main ways to deal with this: cookie based and token based authentications.


**Cookie based authentication**

- User logs in
- Server generates an access token and stores it in the database associated with that user
- Server attaches access token to a response cookie to be returned to the client
- This cookie will be attached by the browser to every request between the client and the server
- On every consecutive request the server validates user's session based on the cookie

Problems with cookie based authentication:

- Cookies are sent authomatically by the browser, even for requests that do not require authentication
- Cookies are bound to a single domain - so if your app makes requests to multiple services you might need to use for instance reverse proxy
- Vulnerable to XSRF (Cross site request forgery) attacks



**Token based authentication**

- User logs in
- Server generates an access token and signs it with a private key
- Server returns signed token in a response body
- The client stores the token and adds it to every consecutive request requirying authentication
- Server validates user's session by validating the token with use of a public key

Problems with token based authentication:

- You have to store the token somewhere manually while cookies are stored out of the box - there are couple of options here such as: in-memory, localStorage, sessionStorage and cookies as token storage.
- Slightly more prone to XSS (Cross Site Scripting) attack as it is easier to steal the token then a http-only cookie but malicious scripts can still make requests on your behalf containing the cookie


Both those mechanisms can be implemented in a secure way. However, nowadays token based authentication is more popular because it tends to be easier to implement and gives you higher flexibility.


**JWT**

Neither token authentication nor cookie authentication mechanisms define the format of the user token. However, the most popular token structure currently used in IT systems is JWT - JSON Web Token. It is an open standard for transmitting information securely as JSON object.

JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

The JWT contains a header, payload and a signature. You can put whatever information you need in the payload and be sure that noone can modify it without access to your private key/secret.

JWTs can be additionaly encrypted if needed.

Example JWT content:

```JSON
// header
{
  "alg": "HS256",
  "typ": "JWT"
}

// payload
{
  "sub": "1234567890",
  "userId": 123,
  "name": "John Doe",
  "admin": true
}

// signature
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

```


<hr>
<a name='schema17'></a>

## 17. Exercise: Authentication

Let's implement token based authentication in our Node.js service.

- `schema.prisma`
  - add model User

  ``` prisma
    model User {
  email               String @id @unique
  hashedPassword      String
  salt                String
  firstName           String?
  lastName            String?

  createdAt DateTime  @default(now())
  }
  ```

- `seed.js`
Insert one user

```js
 const { hashedPassword, salt } = await passwordService.hashPassword("password")
    await prisma.user.upsert({
      where: { email: "test@email.com" },
      update: {},
      create: {
        email: "test@email.com",
        hashedPassword,
        salt,
        firstName: "Joe",
        lastName: "Doe",
      }
    }) 
```

- Create `authRoutes.js` in `src/routes`
- Create in `src/service`
  - `passwordService.js`
  - `tokenService.js`
  - `userService.js`

- Create `requiresAuthMiddleware` in `src/middleware`

- Add in `server.js`
```js
import { router as authRoutes } from './routes/authRoutes.js';
import { requiresAuth } from './middleware/requiresAuthMiddleware.js';
import cors from 'cors'

  app.use("/auth", authRoutes)
  app.use("/tweets", requiresAuth(), tweetRoutes);
  app.use("/images", requiresAuth(), imageRoutes);
```

- Create `keys.js`

- Update Primsa Client
```bash
npx prisma generate
```
- Create table `User`
```bash
npx prisma migrate dev 
```
- Add seed
```bash
npx prisma db seed
```

- Running the Server Locally
To run the server locally in developer mode, open terminal and run:

`npm run start` or `node server`


- Test URL
http://localhost:8080/

- Curl commands

  - Authentication

    - Get token
      ``` bash
      curl --location 'http://localhost:8080/auth/token' \
      --header 'Content-Type: application/json' \
      --data-raw '{
          "email": "test@email.com",
          "password": "password"
      }'
      ```
    - Refresh token
        ```bash
        curl --location 'http://localhost:8080/auth/refresh' \
        --header 'Content-Type: application/json' \
        --data '{
            "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidG9rZW5UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTcwNzQwMjM3NSwiZXhwIjoxNzA3NDAyOTc5fQ.FkajE0OxHgcJZLH4DDQmhUb-qeQDYAgzXD_Dan8hcOCqNtCzsk90WY4772clG6OEEYQDQNPJBjUkzv7LkvwrCpeKR-1RQdUc61_6K3lHEUWceusmEOHR90VVPrlKJfyJig9UpD51qgipmVuB2iUEhIKqCxNFq487_SI3wjTRHg5Tx3XHwzruIcOhvYRLjh7uRlSmWIjA-DZ0IU8pFY2Cm240vVnDVJ1k7qykuqGeOyxuMGMuXw7UkTn3BsklnLFPIAy1OEUyEmzQdPJkUeVZbd6KpZo9PRCzxa182zw2bsIgQi5NwgYPkeSqkDZJiAHrJGCsMmu1IAW54ljgh6u7xokqe8FNQghm7PyRjL3JcfI8qf791LgnpueCJyUWtGLrOcmEw3v-hWjUJbqUojQe4N5pCaBwDEVl8SMKnnCOj7xLbQSEZjFUZ5IsmLm8EGxPbMAl5WE6KdhLWN7z1O3RX5tjJ_wF0eEZ-yWB_8nuaG_zlwaK3x-sFhltpbroJXuSAnFGAjVIyanZP_eY9n7tFRXBaSLjDdhzL2pqzwXjxKkGruke2dclUgWvdK28HVtqYa6eObRsGwSoRf1FdZCgCB7cFUtFW6l142b0r-tfeKrGdQeUPRETjd3acW1u1FWq01iAg-j5Y3GlrFNK8QJnEeFzaX5eZzAv-qKOpUweKFk"
        }'
        ```

      ``` bash
      curl --location 'http://localhost:8080/tweets' --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZW1haWwuY29tIiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzA3NDcxMzYwLCJleHAiOjE3MDc0Nzg1NjB9.FSu6mAOonmnyHdzWK9a4SMBAawdsv7F1KDAg20NreNFO72oIGoQ1tiQIVWyquYNqUV5q3-EaeEsc4332yC3NE4ZyOKL8WI-PeVVW3AwPSnQndthQbWHX1Yn1dackr8KAX8Zi3UOQdau6LTnZd8V81xWyIah39l5jAP77xc_lYLUuME_z5QVq7L19r9W04rjUXHWnKBmX2CsrYNGKQenUnkfkcilBEXGGXWxaqFOMetvrZlO6-zkxeO-4arJ_4G9RyjNG_xzzSpxgcFZAZylMVyuCP-hNKmXiMMN8LZcene4cYBkrEvB71kyDsL2DCJW0i5x1kwaxGck6EtNZ0RTp5wrA73GD50NqaaTlZQBJs1cB3ymiy5tpS-AxBO0x9ijp9i_3Ii2Av6j_Eb9KtUso2ZZqNnOC2JEzPkLEwsenoU5IcIdfVM4GhnFD6-yirvdvmbOOFHXnonVLYvdcXbAPXA-KDRhm6PV6eyIBnVnilh0eM7EVffTs-MnT6YK3Q0kGweU_q4IDmQPVMBSwNz-RGlv7vv9LSD4O6jUt0fCi-jdTgWDHU6SIBTJXJC34s_rw2HDYP3DYA2jS3cEPlT0yfizZ8rOnWvknbI8XRO1E4hfG7rDdUFBkiRLg50o1guJoRv3abF5ZHQbHJsu-681vi0NJvAPzp25wS612GOmLwmk'
      ```

  - Tweets
    - Get tweet by id
    ```bash
    curl --location 'http://localhost:8080/tweets/1'
    ```

    - Get list of tweets
    ```bash
    curl --location 'http://localhost:8080/tweets'
    ```

    - Get list of tweets filtered by author
    ```bash
    curl --location 'http://localhost:8080/tweets?author=Michael'
    ```

    - Create a new tweet
    ```bash
    curl --location 'http://localhost:8080/tweets' \
    --header 'Content-Type: application/json' \
    --data '{
        "author": "Elisabeth",
        "text": "This is the cutest puppy I have ever seen!",
        "imgUrl": ""
    }'
    ```

  - Images

    - Uploading image
    ```bash
    curl --location 'http://localhost:8080/images' \
    --form 'file=@"./puppy.jpeg"'                
    {"url":"https://udacity-tweets-bucket.s3.us-east-1.amazonaws.com/1684421206489_file_puppy.jpeg"}     
    ```
