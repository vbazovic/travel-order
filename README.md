# Travel Order
Travel order by Serbian law

# Install procedure

git clone (github-repo-link)

## Backend

Go to api folder and run:

```
npm ci
```
Open xampp and run MySQL and Apache  
Create database travel_order   
Go to flyway/travel-order and in SQL script run full-migration.sql

Create setting.json file in the api folder  
Copy settings.json.template into settings.json and edit settings.json to match your settings.  
(app_token, db_user and db_passwd)

From api folder run apps:

```
node index.js
node admin.js
```

## Frontend

Go to web folder and run:

```
npm ci
```

#Start the project in development mode

Go to web folder and run:

```
npm run dev
```

# Logging in: admin/admin
