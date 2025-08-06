# Travel Order
Travel order by Serbian law

# Install procedure

## Backend

Go to api folder and run:

```
npm ci
```

Copy settings.json.template into settings.json and edit settings.json to match your settings.

From api folder run app:

```
node index.js
```

## Frontend

Go to web folder and run:

```
npm ci
```

To change styles change the input.css and run inside web folder:

```
npx @tailwindcss/cli -i input.css -o main.css --watch
```

Start tailwind in folder web with command:
```
npx tailwindcss -i ./input.css -o ./main.css --watch
```

# Application initial data

initial user:

``` 
id: auto_increment
username: admin
password: admin
admin: 1
fk_organisation: null
```

initial organisation:

```
id: auto_increment
resp_person: Aleksa Milosevic
seal: Seal - Beograd - ESCO
name: ESCO Control Project
address: Zdravka Celara 80, Zemun,
issuer: Vladimir Bazovic
```