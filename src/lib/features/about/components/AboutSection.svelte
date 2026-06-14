<script lang="ts">
	import AboutContent from '$lib/features/about/components/AboutContent.svelte';
	import { optimize } from '$lib/utils/image-optimize';

	const image =
		'https://ucrjmqloirqtrqxindxn.supabase.co/storage/v1/object/public/images/my-image.jpg';
</script>

<section
	class="mx-auto flex w-full max-w-[1280px] flex-grow flex-col justify-center gap-20 px-4 py-20 md:flex-row md:px-16"
>
	<div class="flex w-full justify-center md:w-1/2 md:justify-end">
		<div class="group relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl">
			<div class="absolute -z-10 h-full w-full border border-on-surface"></div>
			<img
				class="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
				src={image}
				srcset={optimize(image)}
				alt="Bima Hamdhika Irfy"
				loading="eager"
				decoding="async"
			/>
		</div>
	</div>
	<AboutContent />
</section>
