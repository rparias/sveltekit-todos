# sveltekit-todo-app

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Run the project

A mongodb docker container is used for this project. You can create a database called 'sveltekit-todo' and a collection called 'sveltekit-todos'

**You should create a folder called datadir on the root of the project.**

```bash
# create a docker container with mongodb
docker-compose up -d

# run the app
npm run dev
```

The docker image running mongo express is available on port 8081.
You should see the database GUI on: http://localhost:8081/db/sveltekit-todo/sveltekit-todos

This repo was created following the [Brayden Girard](https://www.youtube.com/watch?v=P6gEnVlJPOc) video on YouTube.
