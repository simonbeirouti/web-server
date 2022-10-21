# web-server research

As part of the T2A2 assessment, I created a functioning website and server as part of the research of a theoretical stack, and project. It was loaded up using a tailwindcss and nextJS template and then built from there. Installation instructions are below, followed by some information about the api calls you can make.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

## Documentation

### Introduction

**Route:** _/api_

**Method:** _GET_

Query a table to see information about each endpoint and it's associated methods, and queries.

**OUTPUT**

```json
[
  {
    "id": 1,
    "title": "Introduction",
    "method": "GET",
    "description": "Query a table to see information about each endpoint and it's associated methods, and queries. ",
    "url": "/api",
    "example": null
  },
  {
    "id": 2,
    "title": "Get all jokes",
    "method": "GET",
    "description": "Get all the jokes that have been posted to the API! Lots of laughter and fun. ",
    "url": "/api/jokes",
    "example": null
  },
  {
    "id": 3,
    "title": "Create a joke",
    "method": "POST",
    "description": "Create a joke and add it to the API! The fields are not required. However, by adding the user_id, we can create a link and pull the details of the user from a different table. ",
    "url": "/api/jokes/new",
    "example": {
      "joke": "Why did the fish cross the road? The river flooded over it.",
      "user_id": "22205988-a56c-46c5-a580-73b07aea422c"
    }
  },
  {
    "id": 4,
    "title": "Edit a joke",
    "method": "PUT",
    "description": "If I wanted to edit the joke with ID 1, I need to add the one in the route - /api/jokes/1 like so. Since the fields are not required, I can update any of them at any time.",
    "url": "/api/jokes/1",
    "example": {
      "joke": "I have to make this joke PC. But I am a mac.",
      "user_id": "4de05bab-e371-4310-bf8a-1c43f4cd9704"
    }
  },
  {
    "id": 5,
    "title": "Delete a joke by ID",
    "method": "DELETE",
    "description": "If I wanted to delete the joke with ID 1, I need to go to /jokes/1 and make a DELETE request. ",
    "url": "/api/jokes/1",
    "example": null
  }
]
```

### Get ALL jokes

**Route:** _/apijokes_

**Method:** _GET_

Get all the jokes that have been posted to the API! Lots of laughter and fun.

**OUTPUT**

```json
[
  {
    "id": 2,
    "joke": "Something here about being the poo"
  },
  {
    "id": 3,
    "joke": "Why did the fish cross the road? The river flooded over it."
  },
  ...
]
```

### Create new joke

**Route:** _/apijokes/new_

**Method:** _POST_

Create a joke and add it to the API! The fields are not required. However, by adding the user_id, we can create a link and pull the details of the user from a different table.

**INPUT**

```json
{
  "joke": "Why did the fish cross the road? The river flooded over it.",
  "user_id": "22205988-a56c-46c5-a580-73b07aea422c"
}
```

**OUTPUT**

```json
{
  "joke": "Why did the fish cross the road? The river flooded over it.",
  "user_id": "22205988-a56c-46c5-a580-73b07aea422c"
}
```

### Edit a joke by id

**Route:** _/apijokes/1_

**Method:** _PATCH_

If I wanted to edit the joke with ID 1, I need to add the one in the route - /api/jokes/1 like so. Since the fields are not required, I can update any of them at any time.

**INPUT**

```json
{
  "joke": "Why did the fish cross the road? The river flooded over it.",
  "user_id": "22205988-a56c-46c5-a580-73b07aea422c"
}
```

**OUTPUT**

```json
{
  "joke": "Why did the fish cross the road? The river flooded over it.",
  "user_id": "22205988-a56c-46c5-a580-73b07aea422c"
}
```

### Delete a joke by id

**Route:** _/apijokes/1_

**Method:** _DELETE_

If I wanted to delete the joke with ID 1, I need to go to /jokes/1 and make a DELETE request.
