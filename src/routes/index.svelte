<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/todos');
		const jsonRes = await res.json();
		return {
			props: {
				todos: jsonRes.todos
			}
		};
	}
</script>

<script>
	let text = '';
	export let todos;

	async function addTodo() {
		try {
			const todo = {
				text,
				completed: false
			};
			await fetch('/todos', {
				method: 'POST',
				body: JSON.stringify(todo)
			});
			fetchTodos();
			text = '';
		} catch (err) {
			alert('There was an error');
			text = '';
		}
	}

	async function completeTodo(todo) {
		try {
			await fetch('/todos', {
				method: 'PUT',
				body: JSON.stringify(todo)
			});
			fetchTodos();
		} catch (err) {
			alert('There was an error');
			text = '';
		}
	}

	async function fetchTodos() {
		const res = await fetch('/todos');
		const jsonRes = await res.json();
		todos = jsonRes.todos;
	}
</script>

<main>
	<h1>My Todos</h1>
	<input type="text" bind:value={text} placeholder="Enter a todo" />
	<button on:click={addTodo}>Add Todo</button>
	<br />
	<ul>
		{#each todos as todo}
			<li>
				<input type="checkbox" bind:checked={todo.completed} on:change={completeTodo(todo)} />
				{todo.text}
			</li>
		{/each}
	</ul>
</main>
