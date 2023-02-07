<script lang="ts">
	import { RichTextRenderer } from '@caisy/rich-text-svelte-renderer';

	export let data: { title: string; text: any };
	console.log(data, JSON.stringify(data));
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<section>
	<h1>{data.title}</h1>
	{#if data.text && data.text.json}
		<RichTextRenderer node={data.text.json} />
	{/if}
</section>

<style>
</style>
