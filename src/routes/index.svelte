<script>
	let text = '';

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
			alert('Saved successfully');
			text = '';
		} catch (err) {
			alert('There was an error');
			text = '';
		}
	}
</script>

<main>
	<h1>My Todos</h1>
	<input type="text" bind:value={text} placeholder="Enter a todo" />
	<button on:click={addTodo}>Add Todo</button>
</main>
