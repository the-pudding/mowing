<script>
	import { getContext } from "svelte";
	import resize from "$actions/resize.js";
	import Simulation from "$components/Simulation.svelte";
	import Viewport from "$runes/Viewport.svelte.js";

	const viewport = new Viewport();

	// const copy = getContext("copy");
	// const data = getContext("data");
	let element = $state(undefined);
	let figureWidth = $state(0);
	let size = $derived(Math.min(figureWidth, viewport.height));

	function onFigureResize() {
		figureWidth = element.offsetWidth;
	}
</script>

<p>How fast can you mow this lawn?</p>

<div class="c">
	<figure
		use:resize={{ debounce: 250, start: true }}
		onresize={onFigureResize}
		bind:this={element}
	>
		{#if size}
			<Simulation {size} />
		{/if}
	</figure>
</div>

<style>
	.c {
		display: flex;
		justify-content: center;
		padding: 8px;
	}

	figure {
		width: 100%;
		max-width: 600px;
	}

	p {
		font-size: clamp(24px, 2.5vw, 64px);
		max-width: 600px;
		margin: 16px auto;
		line-height: 1;
		text-align: center;
	}
</style>
