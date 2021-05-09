<h1>Completed Todos</h1>
<ul>
	{#each todos as todo}
		<li>
			<input type="checkbox" bind:checked={todo.completed} disabled />
			{todo.text}
		</li>
	{/each}
</ul>

<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/todos?completed=true');
		const jsonRes = await res.json();
		return {
			props: {
				todos: jsonRes.todos
			}
		};
	}
</script>

<script>
	export let todos;
</script>
