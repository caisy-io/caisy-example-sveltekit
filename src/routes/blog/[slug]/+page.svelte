<script>
	import { RichTextRenderer } from '@caisy/rich-text-svelte-renderer';
	/**
	 * @type {{ title: string; text: any; }}
	 */
	export let data;
	console.log('data', data);
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
