<script lang="ts">
	import img from '$lib/assets/sakagami-tomoyo.jpg';
	import AboutContent from '$lib/features/about/components/AboutContent.svelte';
</script>

<main class="flex flex-grow flex-col">
	<section
		class="mx-auto flex w-full max-w-[1280px] flex-grow flex-col justify-center gap-20 px-4 py-20 md:flex-row md:px-16"
	>
		<div class="flex w-full justify-center md:w-1/2 md:justify-end">
			<div class="group relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl">
				<img
					class="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
					src={img}
					alt="Sakagami Tomoyo"
				/>
			</div>
		</div>
		<AboutContent />
	</section>
</main>
