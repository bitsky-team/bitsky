# Bitsky API

## Installation

1. Create a PostgreSQL (>= 11) server and edit `database.ts`

2. Create 2 users according to `database.ts`. If you keep the default ones:

   - Create an admin superuser for production/development

     ```sql
     CREATE ROLE admin LOGIN SUPERUSER PASSWORD 'admin';
     ```

   - Create an test superuser for testing
     ```sql
     CREATE ROLE test LOGIN SUPERUSER PASSWORD 'test';
     ```

3. Create 2 databases:
   - bitsky: `createdb bitsky`
   - bitsky_test: `createdb bitsky_test`

---

## Example with docker

```bash
docker run -d --name bitsky -p 5432:5432 postgres:12.1
docker exec -it bitsky /bin/bash

# In docker terminal
su postgres
createdb bitsky
createdb bitsky_test
psql

## In docker postgres' terminal
CREATE ROLE admin LOGIN SUPERUSER PASSWORD 'admin';
CREATE ROLE test LOGIN SUPERUSER PASSWORD 'test';

exit # 3 times to get back to your terminal
```

---

4. Install the dependencies with the following command:

   ```bash
   yarn install
   ```

5. You can now start the API with the following command:

   ```
   yarn start
   ```

6. If you want to run the tests use the following command:
   ```
   yarn test
   ```
