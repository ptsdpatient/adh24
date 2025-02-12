<script>
	import { enhance } from '$app/forms';
	let submit = false;
</script>
<div class="md:h-auto h-[200vh] w-full flex flex-col justify-between">
	
	<div class=" w-full h-[55vh] md:h-[60vh] flex flex-col items-center  rounded-lg md:rounded border ">
		
		<div class="text-white pt-0 md:pt-7 z-10 font-thin text-6xl ">Contact Us</div>
	<div class="w-full md:w-5/6 m-auto md:h-full flex flex-col md:flex-row justify-center items-center p-10 text-white">
		
	<div
		class="section md:w-1/2 md:h-full w-full  h-5/6 py-3 md:py-0 rounded-lg md:rounded-r-none md:border"
	>
	
		<form
			on:submit={() => {
				submit = true;
				alert('Thank you for contacting us! We will get back to you soon.');
			}}
			class="p-2 md:p-10 h-full w-full flex flex-col items-center justify-evenly"
			method="POST"
			use:enhance
			action="/forms/contact_us"
		>
			<div class="input-group">
				<input type="text" name="name" required />
				<label for="name">Name</label>
			</div>
			<div class="input-group">
				<input type="email" name="email" required />
				<label for="email">Email</label>
			</div>
			<div class="input-group">
				<textarea name="message" rows="3" required></textarea>
				<label for="message">Message</label>
			</div>
			<button type="submit">Send</button>
		</form>
	</div>
	<div
	id="center-console"
	class="section w-full md:w-1/2 m-auto h-auto md:h-full flex flex-col items-center justify-between py-3 md:py-0 rounded-lg rounded-l-none md:border-l-0 md:border md:border-white p-6"
>
	
	<div class="contact-info px-4 pt-2 flex flex-col gap-1 items-start">
		<div class="card card-compact mx-auto shadow-xl container">
			<div class="contact-1">
				<h3>For Technical Queries :</h3>
				<h2>Zishan Deshmukh</h2>
				<a href="https://api.whatsapp.com/send?phone=+8623886205&text=Hello!"><iconify-icon icon="mdi:whatsapp" />8623886205</a>
				<a href="mailto:deshmukhzishan06@gmail.com"
					><iconify-icon icon="mdi:email-outline" />deshmukhzishan06@gmail.com</a
				>
			</div>
			<div class="contact-2">
				<h3>For Event Related Queries :</h3>
				<h2>Yasshowardhan Pethe</h2>
				<a href="https://api.whatsapp.com/send?phone=+8010786691&text=Hello!" target="_blank"><iconify-icon icon="mdi:whatsapp" />8010786691</a>
				<a href="mailto:yasshowardhanp@gmail.com"><iconify-icon icon="mdi:email-outline" />yasshowardhanp@gmail.com</a>
			</div>
		<!-- <div class="text-6xl mx-auto">OR</div> -->
	</div>
	<div class="contact-links" />
</div>
</div>
</div></div>

<!-- difference in footer and contactus -->

<div class="h-full w-full flex flex-col justify-center items-center pt-16 2xl:pt-24 text-white p-12 pd-0 gap-4">
	<div class="h-[60vh] w-full">
		<div class="section md:pt-16 md:gap-8 h-full w-full md:h-full md:w-full flex flex-col justify-end md:flex-row">
			<div class="section w-5/6 md:h-full md:w-1/3 mx-auto py-3 md:py-0 rounded-sm md:border border-white"
			>
				<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/YiVULH51pJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<div
				class="section bg-black-20 backdrop-blur-sm   w-5/6 md:h-full h-auto md:w-1/3 mx-auto flex flex-col items-center justify-center py-3 md:py-0 bg-black/40 rounded-lg md:border md:border-white pd-10"
			>
			<div class="w-full flex flex-row items-start justify-evenly " >
			<div class="flex  flex-col w-4/6 items-stretch pd-0 p-4 pb-0 pt-4 gap-2 font-change">
				<div
					class="heading pt-0 text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white tracking-widest"
				>
					Sitemap
				</div>
				<a href="/" class="btn btn-ghost btn-sm text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Home</a>
				<a href="/events" class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Events</a>
				<a data-sveltekit-reload href="/teams" class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Team</a>
				<a href="/sponsors" class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Sponsors</a>
				<a href="/gallery" data-sveltekit-reload class="btn btn-sm  btn-ghost text-xl text-white font-normal hover:bg-white hover:text-black transition-all duration-300 ease-in-out" 
					>Gallery</a
				>
				</div>
			<div class="flex flex-col w-4/6 pt-4 items-stretch justify-evenly gap-1">
				<div
					class="heading transition-all duration-300 ease-in-out text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white tracking-widest "
				>
					Legal
				</div>
				<a href="/legal/terms_and_conditions" class="btn btn-sm transition-all duration-300 ease-in-out btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black"
					>T &amp; C</a
				>
				<a href="/legal/privacy_policy" class="btn btn-sm  btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black"
					>Privacy Policy</a
				>
				<a href="/legal/contact_info" class="btn btn-sm transition-all duration-300 ease-in-out btn-ghost text-white text-xl font-normal hover:bg-white hover:text-black">Legal Contact</a>
			</div>
			</div>
			<div
				class="h-1/6 w-full flex flex-row items-center justify-evenly py-8 text-white"
			>
				<a
					href="mailto:adhyaaya.gcoen@gmail.com"
					class="email h-8 w-8 lg:h-12 lg:w-12 bg-white rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:email-outline" style="color: #000" /></a
				>
				<a
					href="https://www.linkedin.com/company/adhyaaya/"
					class="linkedin h-8 w-8 lg:h-12 lg:w-12 bg-white rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:linkedin" style="color: #000" /></a
				>
				<a
					href="https://instagram.com/adhyaaya.gcoen"
					class="instagram h-8 w-8 lg:h-12 lg:w-12 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out bg-white"
					><iconify-icon icon="mdi:instagram" style="color: #000" /></a
				>
				<a
					href="https://www.youtube.com/@ADHYAAYAGCOEN"
					class="youtube h-8 w-8 lg:h-12 lg:w-12 bg-white rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:youtube" style="color: #000"/></a
				>
			</div>
				</div>
			<div
				class="section w-5/6 h-full md:h-full md:w-1/3 mx-auto flex flex-col items-center justify-between py-3 md:py-0 rounded-lg md:border md:border-white"
			>
				<iframe
					title="Google Map for GCOEN"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin"
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="h-full w-full z-[220] rounded-lg"
				/>
				</div>
				</div>	</div>		
</div>	
</div>

<!-- <div class="section md:w-1/3 w-5/6 h-5/6 bg-black/20 py-8 md:py-0 rounded-lg border border-white">
	<iframe title="Google Map for GCOEN" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="h-full w-full z-[220]"></iframe>
</div> -->
<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
	.font-change{
		font-family: "Merriweather" Verdana, Geneva, Tahoma, sans-serif;
	}
	.section {
		backdrop-filter: blur(0px);
	}

	.card-title {
		@apply line-clamp-1;
	}

	.input-group {
		position: relative;
		margin-bottom: 20px;
	  }
	  .input-group input,
	  .input-group textarea {
		background: transparent;
		height: 50px;
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		outline: none;
		transition: all 0.3s ease-in-out;
	  }

	  .input-group label {
				font-weight: 200;
		position: absolute;
		top: 12px;
		left: 15px;
		transition: all 0.3s ease-in-out;
		color: #ffffff;
	  }

	  .input-group input:focus + label,
	  .input-group textarea:focus + label,
	  .input-group input:valid + label,
	  .input-group textarea:valid + label {
		top: -10px;
		left: 10px;
		color: rgb(0, 0, 0);
		font-size: 12px;
				border-radius: 20px;
		background: #fff;
		padding: 0 5px;
	  }

	  button {
		width: 50%;
		padding: 10px;
		border: none;
		border-radius: 15px;
		border: 1px solid white;
		background-color: transparent;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;
	  }

	  button:hover {
		background-color: #ffffff;
		color: black;
	  }
			
	  .contact-1,
	  .contact-2 {
				font-size: 22px;
				font-weight: 200;
		padding: 20px;
	  }
			a {
		display: block;
		text-decoration: none;
		color: white;
		display: flex;
				font-weight: 200;
		gap: 10px;
		margin: 10px;
	  }
	  .border-box{
				border: 1px solid white;
			}
</style>
