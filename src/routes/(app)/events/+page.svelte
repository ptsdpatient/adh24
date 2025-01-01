<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	import { openModal, modals } from 'svelte-modals';
	import EventInfoModal from '$lib/components/events/EventInfoModal.svelte';
	import { EVENTS } from '$lib/data/events';
	let technical = data.events.filter((event) => event.category === 'technical');
	let non_technical = data.events.filter((event) => event.category === 'non-technical');
	let workshops = data.events.filter((event) => event.category === 'workshops');
	import MainCards from '$lib/components/events/MainCards.svelte';
	//   import img from '$lib/assets/backgrounds/8.png';
	import EventCard from '$lib/components/events/EventCard.svelte';
	import { afterUpdate, onMount } from 'svelte';

	let blob: HTMLDivElement;
	let mouse: number[] = [0, 0];
	function onMouseMove(e: MouseEvent) {
		mouse[0] = e.clientX;
		mouse[1] = e.clientY;
		blob.animate(
			{
				top: `${mouse[1]}px`,
				left: `${mouse[0]}px`
			},
			{
				duration: 3000,
				// easing: 'ease-in-out',
				fill: 'forwards'
			}
		);
	}

	// afterUpdate(() => {
	// 	if (data.view != 'list') {
	// 		openModal(EventInfoModal, { event: EVENTS.find((e) => e.id == data.view) || EVENTS[0] });
	// 	}
	// })


	afterNavigate(() => {
		if (data.view != 'list' && $modals.length == 0) {
			openModal(EventInfoModal, { event: EVENTS.find((e) => e.id == data.view) || EVENTS[0] });
		}
	});

	onMount(() => {
		// if (data.view != 'list') {
		// 	openModal(EventInfoModal, { event: EVENTS.find((e) => e.id == data.view) || EVENTS[0] });
		// }
	});

	function convertRange(value: number, r1: number[], r2: number[]) {
		return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
	}

	let height: number = 0;

	import tech from '$lib/assets/icons/tech.png';
	import ntech from '$lib/assets/icons/nontech.png';
	import wksp from '$lib/assets/icons/workshops.png';
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
</script>

<svelte:head>
	<title>Events | Adhyaaya'24</title>
</svelte:head>

<svelte:window
	on:resize={() => {}}
	on:mousemove={(e) => {
		// onMouseMove(0, convertRange(window.scrollY, [0, height - window.innerHeight], [0, 1]));
		requestAnimationFrame(() => {
			onMouseMove(e);
		});
		// onMouseMove(e);
	}}

/>

<title>Events</title>
  
<body style="background:url(bg1.jpg)" class="bg-cover m-0 p-0">
  <main class="w-full h-full backdrop-blur-[9px]">
  <section class="backdrop-blur-[10px] mb-[50px] pt-[100px] pb-[50px] rounded-[20px]">
    <section class="text-center text-[45px] text-[white] transition-all duration-[1s] ease-linear mb-[80px] p-[30px]" style="font-family:'Chakra Petch',Verdana, Geneva, Tahoma, sans-serif;text-shadow:0px 0px 10px rgb(255, 0, 0)">Events</section>
    <section class="w-[90%] flex justify-around flex-wrap gap-[50px] mb-[50px] m-auto p-[20px]" style="font-family:'Chakra Petch',Verdana, Geneva, Tahoma, sans-serif">
      <a href="#tech" style="text-shadow:0px 0px 10px rgb(255, 0, 0)" class="no-underline text-[white]">
      <div class="glow text-lg font-bold" >
          <h1>Technical</h1>
          <span>Events</span>
          <img src="/icons/tech.png" alt="">
        </div>
      </a>
      <a href="#non-tech" style="text-shadow:0px 0px 10px rgb(255, 0, 0)" class="no-underline text-[white]">
      <div class="glow text-lg font-bold">
        <h1>Non-Technical</h1>
        <span>Events</span>
        <img src="/icons/nontech.png" alt="" class="h-[300px] relative left-4 top-1">
      </div>
    </a>
    <a href="#workshop" style="text-shadow:0px 0px 10px rgb(255, 0, 0)" class="no-underline text-[white]">
    <div class="glow text-lg font-bold">
      <h1>Workshops</h1>
      <img src="icons/workshops.png" alt="" class="">
    </div>
  </a>
  </section>
    </section>
    <section class="mt-[100px] py-[50px]">
    <section class="text-center text-[45px] text-[white] transition-all duration-[1s] ease-linear mb-[80px] m-[20px] p-[30px]" id="tech" style="font-family:'Chakra Petch',Verdana, Geneva, Tahoma, sans-serif;text-shadow:0px 0px 10px rgb(255, 0, 0)">  <a href="#check1" id="check1" style="text-shadow:0px 0px 10px rgb(255, 0, 0)" class="no-underline text-[white]">Technical Events</a></section>
    <section class="w-[90%] flex justify-evenly gap-[10px] m-auto flex-wrap">
    <div class="w-[270px] h-[260px]" style="background:none">
      <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0  hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
        <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.51)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
          <img src="icons/avishkar.png" alt="" class="h-[200px] ">
          <h1 style="font-family:'Playfair Display', sans-serif" class=" font-medium text-[20px] text-center">Avishkar</h1>
        </div>
        <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
        <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!</p>
      <button class="btn">Register</button>
    </div>
  </div>
</div>
<div class="w-[270px] h-[260px]" style="background:none">
<div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
  <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
    <img src="icons/spectrum.png" alt="" class="h-[175px] my-[15px]">
    <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Virtual Placement</h1>
  </div>
  <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
    <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-center text-[10px] p-[10px]">Attention students! Ready for your dream job? Adhyaaya'24 Virtual Placement helps you prepare and excel. For just ₹70, win up to ₹7k! Test your skills: mental ability, communication, stress-handling, and confidence. Register now and impress future employers!</p>
    <button class="btn">Register</button>
  </div>
</div>
</div>
<div class="w-[270px] h-[260px]" style="background:none">
  <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
    <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
      <img src="icons/code-avenger.png" alt="" class="h-[175px] my-[15px]">
      <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">CodeVenture</h1>
    </div>
    <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
      <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">CodeVenture is a coding competition that tests your debugging and coding skills. Showcase your expertise in mathematics, data structures, algorithms and more. Compete solo using any programming language on a PC with a good internet connection. Join us for a thrilling coding experience!</p>
      <button class="btn">Register</button>
    </div>
  </div>
  </div>
  <div class="w-[270px] h-[260px]" style="background:none">
    <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
      <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
        <img src="icons/inexpress.jpg" alt="" class="h-[175px] my-[15px]">
        <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Innovation</h1>
      </div>
      <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
        <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Innovation Express is a platform for showcasing innovative projects and research. It brings together innovators to inspire, collaborate, and network. The event offers opportunities for mentorship and recognition, empowering participants to turn their ideas into reality.</p>
        <button class="btn">Register</button>
      </div>
    </div>
    </div>
    </section>
    <section class="flex w-3/5 justify-around flex-wrap mt-[40px] m-auto gap-4">
    <div class="w-[270px] h-[260px]" style="background:none">
      <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
        <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
          <img src="icons/sspy.png" alt="" class="h-[175px] my-[15px]">
          <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Structure Spy</h1>
        </div>
        <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
          <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Structuralspy is an interactive event where participants analyze civil engineering products, understanding their components and their role in the overall structure.</p>
          <button class="btn">Register</button>
        </div>
      </div>
      </div>
      <div class="w-[270px] h-[260px]" style="background:none">
        <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
          <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
            <img src="icons/qmaster.png" alt="" class="h-[175px] my-[15px]">
            <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Quiz Masters</h1>
          </div>
          <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
            <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">The Quiz Masters event is a challenging competition that tests participants' coding, mechanical, and electrical skills. Participants must solve complex problems, decipher algorithms, and troubleshoot systems under time pressure.</p>
            <button class="btn">Register</button>
          </div>
        </div>
        </div>
        <div class="w-[270px] h-[260px]" style="background:none">
          <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px]left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
            <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
              <img src="icons/roborace.png" alt="" class="h-[175px] my-[15px]">
              <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">RoboRace</h1>
            </div>
            <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
              <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Join RoboRace, a high-speed bot race against the clock! Navigate a challenging track provided by DROID DEVS. All students are welcome, regardless of experience. Compete for prizes, start with an easy track, and finish with a challenging one. Sign up now for an unforgettable racing experience!</p>
              <button class="btn">Register</button>
            </div>
          </div>
          </div>
        </section>
      </section>
      
      <section class="mt-[100px] py-[50px]">
        <section class="text-center text-[45px] text-[white] transition-all duration-[1s] ease-linear mb-[80px] m-[20px] p-[30px]" id="non-tech" style="font-family:'Chakra Petch',Verdana, Geneva, Tahoma, sans-serif;text-shadow:0px 0px 10px rgb(255, 0, 0)">
          <a href="#check2" id="check2" style="text-shadow:0px 0px 10px rgb(255, 0, 0)" class="no-underline text-[white]">Non-Technical Events</a></section>
    <section class="w-[90%] flex justify-evenly gap-[10px] m-auto flex-wrap">
    <div class="w-[270px] h-[260px]" style="background:none">
      <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
        <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
          <img src="icons/valorant1.png" alt="" class="h-[200px] mb-[5px]">
          <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Valorant</h1>
        </div>
        <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
        <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Immerse yourself in the electrifying world of tactical prowess and precise aim at the upcoming Valorant Tournament, where teams clash in a battle of wits and skill. Brace for intense competition and unforgettable moments as players showcase their mastery in this adrenaline-fueled gaming spectacle.!</p>
      <button class="btn">Register</button>
    </div>
  </div>
</div>
<div class="w-[270px] h-[260px]" style="background:none">
<div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
  <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
    <img src="icons/BGMI.jpg" alt="" class="h-[175px] my-[15px]">
    <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">BGMI</h1>
  </div>
  <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
    <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-center text-[10px] p-[10px]">Thrilling battles and fierce competition took center stage at the BGMI Tournament, where skilled gamers clashed in an electrifying display of strategy and precision. The event was a celebration of esports excellence, showcasing the best players vying for victory in the world of Battlegrounds Mobile India</p>
    <button class="btn">Register</button>
  </div>
</div>
</div>
<div class="w-[270px] h-[260px]" style="background:none">
  <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px]  left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
    <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
      <img src="icons/respawn.png" alt="" class="h-[175px] my-[15px]">
      <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Chess</h1>
    </div>
    <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
      <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">.</p>
      <button class="btn">Register</button>
    </div>
  </div>
  </div>
  <div class="w-[270px] h-[260px]" style="background:none">
    <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px]  left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
      <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
        <img src="icons/vaad-vivad.png" alt="" class="h-[175px] my-[15px]">
        <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Vaad-Vivaad</h1>
      </div>
      <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
        <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">VAAD-VIVAAD is a public speaking event with three rounds. Participants will be given topics related to social issues and will have 2 and 4 minutes to express their ideas respectively. Register now by paying the entry fee of 49/- (solo) and boost your public speaking skills</p>
        <button class="btn">Register</button>
      </div>
    </div>
    </div>
    </section>
    <section class="flex w-3/5 justify-around mt-[40px] m-auto gap-4 flex-wrap">
    <div class="w-[270px] h-[260px]" style="background:none">
      <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px]  left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
        <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
          <img src="icons/born_psychos.png" alt="" class="h-[175px] my-[15px]">
          <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Born-Psychos</h1>
        </div>
        <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
          <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Born Psychos is an adrenaline-fueled event that tests your aptitude skills through exciting rounds and challenges. Hone your critical thinking, leadership, and teamwork abilities while solving riddles and participating in elimination-style games. Join with a team of 4 for 199/-. Embrace your inner psychos and register today for a thrilling experience!</p>
          <button class="btn">Register</button>
        </div>
      </div>
      </div>
      <div class="w-[270px] h-[260px]" style="background:none">
        <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px]left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
          <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
            <img src="icons/foodoholics.png" alt="" class="h-[175px] my-[15px]">
            <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Food-O-Holic</h1>
          </div>
          <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
            <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">"Food-o-Holic" is an exciting competition for teams of 4 members with an entry fee of 299. The competition consists of 3 rounds: "Screaming Baloons," "Meri Foodie Kismat," and "Desert Island." In each round, teams compete in food-related challenges and quizzes, from collecting buns with tied hands to finishing a dessert without using their hands. The winning team is decided by points or speed. Register now for a fun and thrilling culinary adventure.</p>
            <button class="btn">Register</button>
          </div>
        </div>
        </div>
        <div class="w-[270px] h-[260px]" style="background:none">
          <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px]left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
            <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
              <img src="icons/cricbash.png" alt="" class="h-[175px] my-[15px]">
              <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">CricBash
            </h1></div>
            <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0 X " style="backface-visibility:hidden;transform:rotateY(180deg)">
              <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Join the thrilling Cricbash cricket league with a team of 6 (mixed gender). Compete in 5-over matches with fun challenges and special "Bazooka" spot for bonus runs. Hurry and register your team now as slots are limited!</p>
              <button class="btn">Register</button>
            </div>
          </div>
          </div>
          </section>
        </section>
      <section class="mt-[100px] pt-[50px] pb-[100px]">
        <section class="text-center text-[45px] text-[white] transition-all duration-[1s] ease-linear mb-[80px] m-[20px] p-[30px]" id="workshop" style="font-family:'Chakra Petch',Verdana, Geneva, Tahoma, sans-serif;text-shadow:0px 0px 10px rgb(255, 0, 0)"><a href="#check3" id="check3" style="text-shadow:0px 0px 10px rgb(255, 0, 0)" class="no-underline text-[white]">Workshop</a></section>
    <section class="w-[90%] flex justify-evenly gap-[10px] m-auto flex-wrap">
    <div class="w-[270px] h-[260px]" style="background:none">
      <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px]  left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
        <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
          <img src="icons/aeromodel.png" alt="" class="h-[200px] mb-[5px]">
          <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">AirShow</h1>
        </div>
        <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
        <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">
          Explore the boundless skies at our exhilarating aeromodelling workshop, where enthusiasts come together to craft, customize, and soar high with their handcrafted flying machines. Unleash your creativity and engineering prowess in this hands-on experience that promises a thrilling journey into the world of aviation.</p>
      <button class="btn">Register</button>
    </div>
  </div>
</div>
<div class="w-[270px] h-[260px]" style="background:none">
<div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
  <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
    <img src="icons/lounge.jpg" alt="" class="h-[175px] my-[15px]">
    <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Lounge</h1>
  </div>
  <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
    <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-center text-[10px] p-[10px]">Welcome to the "Lounge" session, a collaborative event between ADHYAAYA and the Rotaract Club of GCOEN. We are honored to have two distinguished guests joining us: Mr. Sandip Joshi, former Mayor of Nagpur, and Mr. Vivek Deshpande, Co-founder &amp; Director of Space Wood Furnitures Pvt.Ltd. Get ready for an insightful and engaging session as we delve into the experiences and expertise of these accomplished individuals</p>
    <button class="btn">Register</button>
  </div>
</div>
</div>
<div class="w-[270px] h-[260px]" style="background:none">
  <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0  hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
    <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
      <img src="icons/jigyasa.png" alt="" class="h-[175px] my-[15px]">
      <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Jigyasa</h1>
    </div>
    <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0 " style="backface-visibility:hidden;transform:rotateY(180deg)">
      <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Are you passionate about serving your country technically? Want to gain insights and knowledge from esteemed personalities of Defence Services/Civil Services? Join Trishakti Cell in collaboration with Adhyaaya for JIGYASA-an exclusive live webinar with SIR LOHIT MATANI (Indian Police Service). Discover, Diagnose and Demestify the ways to achieve your goals through this insightful event. Don't miss out on this opportunity to hear from a seasoned expert in the field! Register now, it's free of cost and open to all!</p>
      <button class="btn">Register</button>
    </div>
  </div>
  </div>
  </section>
  <section class="flex w-3/5 justify-around mt-[40px] m-auto gap-4 flex-wrap">
  <div class="w-[270px] h-[260px]" style="background:none">
    <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
      <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0" style="backface-visibility:hidden">
        <img src="icons/Stargaze_cover.png" alt="" class="h-[175px] my-[15px]">
        <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">StarGaze</h1>
      </div>
      <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden;transform:rotateY(180deg)">
        <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">Explore the depths of the universe at Adhyaaya'24! Join the Astronomy Club at GCOEN for expert guest lectures, hands-on exploration sessions, and more. Come and STARGAZE with us!.</p>
        <button class="btn">Register</button>
      </div>
    </div>
    </div>
    <div class="w-[270px] h-[260px]" style="background:none">
      <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
        <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
          <img src="icons/stock.png" alt="" class="h-[175px] my-[15px]">
          <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Stock Talk</h1>
        </div>
        <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-white left-0 top-0" style="backface-visibility:hidden;transform:rotateY(180deg)">
          <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">.</p>
          <button class="btn">Register</button>
        </div>
      </div>
      </div>
      <div class="w-[270px] h-[260px]" style="background:none">
        <div class="relative w-full h-full transition-all duration-[0.8s] ease-linear text-center rounded-[10px] left-0 top-0 hover:[transform:rotateY(180deg)]" style="transform-style:preserve-3d">
          <div class="absolute w-full h-full overflow-hidden text-white tracking-[2px] backdrop-blur-[10px] rounded-[10px] border-2 border-solid border-[rgba(255,255,255,0.512)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden">
            <img src="icons/gdsc.png" alt="" class="h-[175px] my-[15px] p-auto">
            <h1 style="font-family:'Playfair Display', sans-serif" class="  font-medium text-[20px] text-center">Ml Workshop</h1>
          </div>
          <div class="absolute w-full h-full overflow-hidden text-white border text-center backdrop-blur-[10px] rounded-[10px] border-solid border-[rgba(255,255,255,0.685)] left-0 top-0 flex flex-col items-center" style="backface-visibility:hidden;transform:rotateY(180deg)">
            <p style="font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif" class="font-[normal] text-[11px] text-center p-[10px]">..</p>
            <button class="btn">Register</button>
          </div>
        </div>
        </div>
      </section>
        </section>
</main>
</body>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  a{
    scroll-behavior: smooth;
  }
.btn , .glow {
  padding: 10px;
  border: none;
  outline: none;
  color: #FFF;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}
.glow{
  height: 380px;
   width: 300px;
   padding: 30px;
  background-color: #535353;
}
.btn::after,.glow::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  left: 0;
  top: 0;
  border-radius: 10px;
  background-color: black;
}
.glow::after{
  background: url(bg1.jpg);
  filter: blur(6px);
  background-size: cover;
}
.btn::before {
  content: "";
  background: linear-gradient(
    45deg,
    #FF0000, #FF7300, #FFFB00, #48FF00,
    #00FFD5, #002BFF, #FF00C8, #FF0000
  );
  backdrop-filter: blur(10px);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 600%;
  z-index: -1;
  width: calc(100% + 4px);
  height:  calc(100% + 4px);
  filter: blur(8px);
  animation: glowing 20s linear infinite;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
  opacity: 1;
}
.glow::before {
  content: "";
  background: linear-gradient(
    45deg,
    #00ddff, #bde0ff, #7ef2ff, #55b6ff,
    #4e5a94, #42628a, #337583, #136bb3
  );
  backdrop-filter: blur(10px);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 600%;
  z-index: -1;
  width: calc(100% + 2px);
  height:  calc(100% + 4px);
  filter: blur(15px);
  animation: glowing 20s linear infinite;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
  opacity: 1;
}
@keyframes glowing {
  0% {background-position: 0 0;}
  50% {background-position: 400% 0;}
  100% {background-position: 0 0;}
}

.btn:active:after {
  background: transparent;
  backdrop-filter: blur(10px);
}
.glow:active:after {
  background: rgba(255, 255, 255, 0.526);
  backdrop-filter: blur(10px);
}
.btn:active,.glow:active {
  color: #000;
  font-weight: bold;
}
</style>


<!-- <canvas bind:this={canvas} class="orb-canvas -z-50 fixed bg-white !h-screen !w-screen" /> -->
<!-- <img src="{img}" class="-z-50 fixed h-screen w-screen object-cover"> -->
<!-- <div id="bg" class=" fixed h-screen w-screen -z-50 overflow-clip">
	<div
		bind:this={blob}
		id="blob"
		class="fixed opacity-80 h-[30vh] w-[40vh] bg-gradient-to-tr from-red-500  via-purple-500 to-blue-500 animate-spin duration-[20000ms]"
	/>
</div>
<div id="bg-filter" class="fixed h-screen w-screen -z-40 backdrop-blur-[100px]" />
<div
	bind:clientHeight={height}
	class=" bg-black/70 backdrop-blur-sm events-container grid grid-cols-1 justify-items-stretch pt-28 min-h-[50vh] scroll-smooth"
>
	
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-4xl font-bold text-center text-white myfont">Events</h1>
	</div>
	<div
		class="section-header h-full min-h-[calc(100vh-7rem)] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-3 pt-16"
	>
		<MainCards
			color={3}
			href="#technical"
			icontext=""
			title="Technical"
			subtitle="Events"
			subtext=""
			image={tech}
		/>
		<MainCards
			color={2}
			href="#non-technical"
			icontext=""
			title="Non-Tech"
			subtitle="Events"
			subtext=""
			image={ntech}
		/>
		<MainCards
			color={0}
			href="#workshops"
			icontext=""
			title="Workshops"
			subtitle="."
			subtext=""
			image={wksp}
		/>
	</div>

	<div class="flex flex-col items-center justify-center pt-16">
		<h1 class="text-4xl font-bold text-center text-white ">Technical Events</h1>
	</div>
	<div
		id="technical"
		class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16"
	>
		{#each technical as t}
			<EventCard data={t} />
		{/each}
	</div>
	<div class="flex flex-col items-center justify-center pt-16">
		<h1 class="text-4xl font-bold text-center text-white ">Non-Tech Events</h1>
	</div>
	<div
		id="non-technical"
		class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16"
	>
		{#each non_technical as nt}
			<EventCard data={nt} />
		{/each}
	</div>
	<div class="flex flex-col items-center justify-center pt-16">
		<h1 class="text-4xl font-bold text-center text-white ">Workshops</h1>
	</div>
	<div
		id="workshops"
		class="h-full min-h-[50vh] flex items-center justify-center flex-wrap transition-all duration-500 ease-in-out gap-4 md:gap-10 pt-16 pb-24"
	>
		{#each workshops as w}
			<EventCard data={w} />
		{/each}
	</div>
</div>


<style>
	#blob {
		border-radius: 50% 50%;
		top: 50%;
		left: 50%;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	#blob.animate-spin {
		animation: spin 20s linear infinite;
		translate: -50% -50%;
	}
</style> -->
