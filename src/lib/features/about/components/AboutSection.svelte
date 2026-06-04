<script lang="ts">
	import AboutContent from '$lib/features/about/components/AboutContent.svelte';

	const defaultImage =
		'https://ucrjmqloirqtrqxindxn.supabase.co/storage/v1/object/public/images/my-image.jpg';
	const webpImage =
		'https://ucrjmqloirqtrqxindxn.supabase.co/storage/v1/object/public/images/my-image.webp';
	const avifImage =
		'https://ucrjmqloirqtrqxindxn.supabase.co/storage/v1/object/public/images/my-image.avif';
</script>

<section
	class="mx-auto flex w-full max-w-[1280px] flex-grow flex-col justify-center gap-20 px-4 py-20 md:flex-row md:px-16"
>
	<div class="flex w-full justify-center md:w-1/2 md:justify-end">
		<div class="group relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl">
			<div class="absolute -z-10 h-full w-full border border-on-surface"></div>
			<picture class="opacity-80 transition-opacity duration-500 group-hover:opacity-100">
				<source srcset={avifImage} type="image/avif" />
				<source srcset={webpImage} type="image/webp" />
				<img
					class="h-full w-full object-cover"
					src={defaultImage}
					alt="Bima Hamdhika Irfy"
					loading="eager"
					decoding="async"
				/>
			</picture>
		</div>
	</div>
	<AboutContent />
</section>
