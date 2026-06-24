# Travel Order

Travel Order is a web application for creating and managing travel orders based on Serbian legal requirements.

## Installation

Clone the repository:

```bash
git clone <github-repo-link>
```

## Backend setup

Go to the `api` folder:

```bash
cd api
```

Install dependencies:

```bash
npm ci
```

Open XAMPP and start:

* Apache
* MySQL

Create a MySQL database named:

```sql
travel_order
```

Run the database migration script located in:

```text
flyway/travel-order/full-migration.sql
```

Create a `settings.json` file inside the `api` folder.

Copy the contents from:

```text
settings.json.template
```

into:

```text
settings.json
```

Then update the following values according to your local environment:

* `app_token`
* `db_user`
* `db_passwd`

Start the backend applications from the `api` folder:

```bash
node index.js
```

In another terminal, run:

```bash
node admin.js
```

## Frontend setup

Go to the `web` folder:

```bash
cd web
```

Install dependencies:

```bash
npm ci
```

## Running the project in development mode

From the `web` folder, run:

```bash
npm run dev
```

## Login credentials

```text
Username: admin/user
Password: admin/user
```
