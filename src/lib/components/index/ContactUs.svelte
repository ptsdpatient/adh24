<script>
	import { enhance } from '$app/forms';
	let submit = false;
</script>
 <div class="h-auto md:h-auto h-[200vh] w-full flex flex-col justify-between">

	<!-- vinay changes -->
	<div>
        <div class="font-poppins m-auto min-h-[80vh] p-8 text-white flex flex-row justify-center items-center w-full max-w-[1200px] bg-white/5 rounded-2xl backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.3)] animate-[fadeIn_0.9s_ease-in-out] box-border   ">
            <div class="flex-1 p-[2.7rem] max-w-[1200px]">
                <form class="contact-form">
                    <h2 class="font-playfair text-center font-medium tracking-[3px] mb-8 text-5xl text-white border-b-[5px] border-double border-b-white">Contact Us</h2>
                    
    <div class="relative mb-8 group">
        <input type="text" id="name" name="name" required 
            class="peer w-full p-4 border-2 border-white/50 rounded-lg outline-none bg-transparent text-white transition-all duration-300 ease-in-out text-base resize-none focus:border-white focus:bg-white/20"
            placeholder=" "
        />
        <label for="name" 
            class="absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
            bg-transparent px-2 peer-focus:px-2 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
            peer-focus:top-2 peer-focus:-translate-y-7 peer-focus:scale-75 
            peer-focus:text-white left-1">
            Name
        </label>
    </div>
    
    <div class="relative mb-8 group">
        <input type="email" id="email" name="email" required
            class="peer w-full p-4 border-2 border-white/50 rounded-lg outline-none bg-transparent text-white transition-all duration-300 ease-in-out text-base resize-none focus:border-white focus:bg-white/20"
            placeholder=" "
        />
        <label for="email" 
            class="absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
            bg-transparent px-2 peer-focus:px-2 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
            peer-focus:top-2 peer-focus:-translate-y-7 peer-focus:scale-75 
            peer-focus:text-white left-1">
            Email
        </label>
    </div>
    
    <div class="relative mb-8 group">
        <textarea name="message" id="message" rows="4" required
            class="peer w-full p-4 border-2 border-white/50 rounded-lg outline-none bg-transparent text-white  transition-all duration-300 ease-in-out text-base resize-none focus:border-white focus:bg-white/20"
            placeholder=" "
        ></textarea>
        <label for="message" 
            class="absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
            bg-transparent px-2 peer-focus:px-2 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
            peer-focus:top-2 peer-focus:-translate-y-7 peer-focus:scale-75 
            peer-focus:text-white left-1">
            Message
        </label>
    </div>

	<button
	disabled={submit}
	class="btn btn-outline btn-block bg-black/25 hover:scale-105 hover:bg-white active:opacity-90 active:scale-95 text-xl"
	type="submit">Submit</button
>
            </form>
        </div>

        <div class="flex-1 p-[2.7rem] max-w-[24rem] ml-8 border-l-[3px] border-l-[rgba(6,0,6,0.218)] flex flex-col justify-around p-5">
            <section class="p-5 rounded-lg bg-[rgba(6,0,6,0.14)] backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
                <h4 class="font-light text-white mb-4 text-lg">For Technical Queries</h4>
                <h3 class="font-normal my-2.5 text-base text-white">Zishan Deshmukh</h3>
                <h3 class="font-normal my-2.5 text-base text-white">
                    <img src="icon-what.png" alt="" class=" mr-2.5 align-middle">918283812748914
                </h3>
                <h3 class="font-normal my-2.5 text-base text-white">
                    <img src="email-logo.png" alt="" class=" mr-2.5 align-middle">@gmail.com
                </h3>

                <h4 class="font-light text-white mb-4 text-lg">For Event-Related Queries</h4>
                <h3 class="font-normal my-2.5 text-base text-white">Miss. ABC</h3>
                <h3 class="font-normal my-2.5 text-base text-white">
                    <img src="icon-what.png" alt="" class=" mr-2.5 align-middle">3e243242443
                </h3>
                <h3 class="font-normal my-2.5 text-base text-white">
                    <img src="email-logo.png" alt="" class=" mr-2.5 align-middle">@gmail.com
                </h3>
            </section>
        </div>
    </div>
</div>

<!-- difference in footer and contactus -->

<!-- <div class="h-1/2 w-full flex flex-col justify-center items-center pt-12 2xl:pt-24 text-white p-12 pd-0 gap-4"> -->
	<div class="w-full md:h-[100vh] h-[150vh]">
	<div class="section md:p-6 md:gap-8 h-full w-full md:h-full md:w-full flex flex-col justify-end md:flex-row">
			<div
				class="section w-5/6 md:h-full h-1/5 md:w-1/3 mx-auto py-3 md:py-0 rounded-lg md:border border-white"
			>
				<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/YiVULH51pJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<div
				class="section bg-black/20 backdrop-blur-sm   w-5/6 md:h-full h-auto md:w-1/3 mx-auto flex flex-col items-center py-3 md:py-0 bg-black/40 rounded-lg md:border md:border-white pd-10"
			>
			<div class="flex  flex-col w-4/6 items-stretch pd-0 p-4 pb-0 pt-4 gap-2">
				<div
					class="heading pt-0 text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white "
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
					class="heading transition-all duration-300 ease-in-out text-3xl btn btn-ghost btn-lg transition-none hover:scale-100 active:scale-100 hover:bg-opacity-0 cursor-auto border-0 border-b-2 rounded-b-none border-white hover:text-white "
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
				class="section w-5/6 h-1/5 md:h-full md:w-1/3 mx-auto flex flex-col items-center justify-between py-3 md:py-0 rounded-lg md:border md:border-white"
			>
			<div class="h-5/6 w-full bg-black/50">
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
			<div
				class="h-1/6 w-full flex flex-row items-center justify-evenly py-8 text-white"
			>
				<a
					href="mailto:adhyaaya.gcoen@gmail.com"
					class="email h-8 w-8 lg:h-12 lg:w-12 bg-red-500 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:email-outline" /></a
				>
				<a
					href="https://www.linkedin.com/company/adhyaaya/"
					class="linkedin h-8 w-8 lg:h-12 lg:w-12 bg-blue-600 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:linkedin" /></a
				>
				<a
					href="https://instagram.com/adhyaaya.gcoen"
					class="instagram h-8 w-8 bg-pink-600 lg:h-12 lg:w-12 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:instagram" /></a
				>
				<a
					href="https://www.youtube.com/@ADHYAAYAGCOEN"
					class="youtube h-8 w-8 lg:h-12 lg:w-12 bg-red-600 rounded-full text-2xl lg:text-4xl inline-flex items-center justify-center hover:scale-105 active:scale-95 active:opacity-95 transition-all duration-300 ease-in-out"
					><iconify-icon icon="mdi:youtube" /></a
				>
			</div>
				</div>
				</div>	</div>		
</div>	


<style lang="postcss">
	.section {
		backdrop-filter: blur(0px);
	}

	.card-title {
		@apply line-clamp-1;
	}
</style>
<!-- <div class="section md:w-1/3 w-5/6 h-5/6 bg-black/20 py-8 md:py-0 rounded-lg border border-white">
	<iframe title="Google Map for GCOEN" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.525563997084!2d79.05785451517583!3d21.051661192371412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1674120640996!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="h-full w-full z-[220]"></iframe>
</div> -->

