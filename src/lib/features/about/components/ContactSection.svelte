<script lang="ts">
	import TextArea from '$lib/features/about/components/TextArea.svelte';
	import TextInput from '$lib/features/about/components/TextInput.svelte';
</script>

<section id="contact" class="mx-auto w-full max-w-[1280px] px-4 py-20 md:px-16">
	<div class="mx-auto flex max-w-2xl flex-col gap-12">
		<div class="flex flex-col gap-6 text-center">
			<h3 class="text-sm font-medium tracking-wider text-secondary-container uppercase">
				Get In Touch
			</h3>
			<h2 class="text-[40px] font-bold text-on-surface">Contact Me</h2>
			<p class="text-on-surface-variant">
				Have a project in mind or just want to say hi? Drop me a message below.
			</p>
		</div>
		<form
			class="glass-panel has-foucs:transition-all flex flex-col gap-6 rounded-xl p-12 has-focus:shadow-[0_0_20px_5px] has-focus:shadow-secondary-container/10 has-focus:duration-300"
		>
			<TextInput title="name" placeholder="Your name" />
			<TextInput title="email" placeholder="your@email.com" type="email" />
			<TextArea
				title="message"
				placeholder="Share some details about your project, or just say hello!..."
			/>
			<button
				type="submit"
				class="mt-3 flex items-center gap-3 self-center rounded-[0.25rem] bg-hyper-blue px-12 py-3 text-[17px] font-medium text-night-snow transition-colors duration-200 ease-in-out hover:bg-primary-fixed hover:text-on-primary md:self-start"
				>Send Message
				<span class="material-icons">send</span></button
			>
		</form>
	</div>
</section>
