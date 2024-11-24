<script lang="ts">

	// Image Imports
	import swarali_prayagi_photo from '$lib/assets/team/advisors/swarali-prayagi-compressed.webp?url';
	import shlok_tajne_photo from '$lib/assets/team/advisors/shlok-tajne-compressed.webp?url';
	import aditya_tete_photo from '$lib/assets/team/advisors/aditya-tete-compressed.webp?url';
	import malhar_paradkar_photo from '$lib/assets/team/advisors/malhar-paradkar-compressed.webp?url';
	import mayank_masram_photo from '$lib/assets/team/advisors/mayank-masram-compressed.webp?url';
	import anukul_gosh_photo from '$lib/assets/team/coordinators/anukul-ghosh.webp?url';
	import swara_nagpure_photo from '$lib/assets/team/coordinators/swara_nagpure.png?url';
	import aditya_shinde_photo from '$lib/assets/team/coordinators/aditya-shinde.webp?url';
	import om_lokhande_photo from '$lib/assets/team/coordinators/om.jpg?url';
	// import malhar_paradkar_photo from '$lib/assets/team/coordinators/malhar-paradkar-compressed.webp?url';
	import tanishq_dhote_photo from '$lib/assets/team/technical/tanshiq_dhote.webp.jpg?url';
	import aditya_thombre_photo from '$lib/assets/team/technical/aditya_thombre.webp?url';
	//import aditya_deshmukh_photo from '$lib/assets/team/technical/aditya-deshmukh-compressed.webp?url';
	import mohit_deotare_photo from '$lib/assets/team/technical/mohit_deotare.png?url';
	//import tushar_meshram_photo from '$lib/assets/team/technical/tushar-meshram-compressed.webp?url';
	//import harsh_bangre_photo from '$lib/assets/team/technical/harsh-bangre-compressed.webp?url';
	// import kaustubh_warade_photo from '$lib/assets/team/technical/kaustubh-warade-compressed.webp?url';
	import ayush_khangar_photo from '$lib/assets/team/organisation/ayush-khangar-compressed,webp.jpg?url';
	import aditya_muddamwar_photo from '$lib/assets/team/organisation/aditya-muddamwar-compressed,webp.jpg?url';
	import varun_dudhane_photo from '$lib/assets/team/organisation/varun-dudhane-compressed.webp.jpg?url';
	import aranya_sharma_photo from '$lib/assets/team/organisation/aranya-sharma-compressed.webp.jpg?url';
	import ayushi_singh_photo from '$lib/assets/team/organisation/ayushi-singh-compressed.webp.jpg?url';
	import khushi_sandekar_photo from '$lib/assets/team/organisation/khushi.sandekar-compressed.webp.jpg?url';
	import rohit_wagh_photo from '$lib/assets/team/publicity/rohit-wagh.png?url';
	import jaideep_roy_photo from '$lib/assets/team/publicity/jaideep-roy.png?url';
	import suhani_garad_photo from '$lib/assets/team/publicity/suhani-garad.webp?url';
	import swayam_jawade_photo from '$lib/assets/team/publicity/swayam-jawade.png?url';
	import rugved_yadalwar_photo from '$lib/assets/team/publicity/rugved-yadalwar-compressed.webp?url';
	import aadil_burani_photo from '$lib/assets/team/publicity/aadil-burani-compressed.webp?url';
	import nimish_gotmare_photo from '$lib/assets/team/accounting/nimish-gotmare.webp';
	import sabrina_mondal_photo from '$lib/assets/team/content-writing/sabrina-mondal-compressed.jpg?url';
	import shravani_gawande_photo from '$lib/assets/team/content-writing/shravani-gawande-compressed.webp.jpg?url';
	import dude_from_mechanical from '$lib/assets/team/sponsorship/Screenshot_20240125-143331.jpg?url'
	
	import karan_buradkar_photo from '$lib/assets/team/creativity-and-decoration/karan-buradkar.webp?url';
	import ashlesha_chute_photo from '$lib/assets/team/creativity-and-decoration/ashlesha-chute.png?url';
	import ketaki_mahalle_photo from '$lib/assets/team/creativity-and-decoration/ashlesha-chute.webp?url';
	import dipti_harshe_photo from '$lib/assets/team/creativity-and-decoration/dh.jpg?url';
	import rohit_thakre_photo from '$lib/assets/team/creativity-and-decoration/rohit-thakare.webp?url';
    import ajinkya_mundhe_photo from '$lib/assets/team/creativity-and-decoration/WhatsApp_Image_2024-01-31_at_11.29.21_PM.jpeg?url';
	import samruddhi_nasare from '$lib/assets/team/creativity-and-decoration/sn.jpg?url';
	import aditya_gawai_photo from '$lib/assets/team/hospitality-and-discipline/aditya-gawai.webp?url';
	import mrunmai_ingole_photo from '$lib/assets/team/hospitality-and-discipline/aditya-gawai.webp?url';
	import shweta_mane_photo from '$lib/assets/team/hospitality-and-discipline/sweta-mane.png?url';
	import palash_atram_photo from '$lib/assets/team/hospitality-and-discipline/palash-atram.webp.jpg?url';
	import hardik_bodele_photo from '$lib/assets/team/hospitality-and-discipline/hardik-bodele.webp?url';
	import sneha_motghare_photo from '$lib/assets/team/hospitality-and-discipline/hardik-bodele.webp?url';
	import samruddhe_nasre_photo from '$lib/assets/team/creativity-and-decoration/sn.jpg?url';
	import himanshi_bisen_photo from '$lib/assets/team/hospitality-and-discipline/himanshi-bisen.png?url';
	import prajwal_akarte_photo from '$lib/assets/team/accounting/prajwal_akarte.jpeg?url'
	
	import tejesh_ghuge_photo from '$lib/assets/team/publicity/tejesh-ghuge.webp?url';
	import anushree_barad_photo from '$lib/assets/team/publicity/anushree-barad.webp?url';
	import sushrut_kohale_photo from '$lib/assets/team/coordinators/sushrut.jpeg?url';
	// import lokesh_shelke_photo from '$lib/assets/team/hospitality-and-discipline/lokesh-shelke-compressed.webp?url';
	import {page} from '$app/stores';

</script>

<!-- <svelte:window bind:scrollY /> -->

<svelte:head>
	<title>Meet Our Team | Adhyaaya'24</title>
</svelte:head>

<!-- <Nav /> -->
<!-- {#if $page.url.pathname === '/team'} -->

<style>
	.advisor-box {
	transition: transform 0.3s ease, box-shadow 0.5s ease, background-color 0.3s ease;}
	.advisor-box:hover {
	transform: scale(1.05);
	box-shadow: 0 10px 20px rgba(217, 180, 237, 0.5);
	background-color: #ebf0e8;}
	</style>
	<div class="absolute inset-0 -z-10 overflow-hidden">
	<video class="fixed w-full h-full object-cover" autoplay loop muted playsinline>
	<source src="Purplebg.mp4" type="video/mp4"></video></div>
	<img src="adhylogo.png" alt="logo" class="w-40">
	<div class="p-50 ">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Advisors</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src="perdemo1.jpg" alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Malhar Paradkar</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Advisor</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src=(${shlok_tajne_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Shlok Tajne</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Advisor</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={mayank_masram_photo}  alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Mayank Masram</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Advisor</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={aditya_tete_photo}  alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Aditya Tete</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Advisor</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={swarali_prayagi_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Swarali Prayagi</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Advisor</p>
	</div>
	</div></div>
	<br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Coordinators</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={anukul_gosh_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Anukul Gosh</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Coordinator</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={swara_nagpure_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Swara Nagpure</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Coordinator</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={aditya_shinde_photo}  alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Aditya Shinde</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Coordinator</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={om_lokhande_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Om Lokhande</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Coordinator</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={sushrut_kohale_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Sushrut Kohale</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Post</p>
	</div></div></div><br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Technical Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={tanishq_dhote_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Tanishq Dhote</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={aditya_thombre_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Aditya Thombre</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
		
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={mohit_deotare_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Mohit Deotare</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co-Head</p>
	</div>
	</div></div><br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Organisation Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={ayush_khangar_photo}  alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Ayush Khangar</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={aditya_muddamwar_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Aditya Muddamwar</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={varun_dudhane_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Varun Dudhane</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={aranya_sharma_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Aranya Sharma</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co-Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={khushi_sandekar_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Khushi Sandekar</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div></div></div><br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Sponsorship Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={ayush_khangar_photo}  alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Ayush Khangar</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={varun_dudhane_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Varun Dudhane</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={dude_from_mechanical} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Abhishek Kuber</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={sabrina_mondal_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Sabrina Mondal</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={shravani_gawande_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Shravani Gawande</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div></div></div><br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Publicity Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={rohit_wagh_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Rohit Wagh</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={jaideep_roy_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Jaideep Roy</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={suhani_garad_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Suhani Garad</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={swayam_jawade_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Swayam Jawade</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={tejesh_ghuge_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Tejesh Ghuge</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={anushree_barad_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Anushree Barad</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div></div></div><br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Accounting Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={nimish_gotmare_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Nimish Gotmare</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Post</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={prajwal_akarte_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Prajwal Akarte</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	</div></div><br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Content Writing Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={sabrina_mondal_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Sabrina Mondal</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={shravani_gawande_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Shravani Gawande</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	</div></div><br><br><br>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Creativity and Decoration Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={karan_buradkar_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Karan Buradkar</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={ashlesha_chute_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Ashlesha Chute</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={ajinkya_mundhe_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Ajinkya Mundhe</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={dipti_harshe_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Dipti Harshe</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={rohit_thakre_photo}  alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Rohit Thakare</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={samruddhe_nasre_photo}  alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Samrudhi Nasare</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div></div>
	<br><br><br>
	</div><div>
	<div class="p-50">
	<h1 class="text-center p-10 text-7xl font-serif text-white">Hospitality and Discipline Team</h1>
	<div class="flex justify-center space-x-8 flex-wrap">
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={aditya_gawai_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Aditya Gawai</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={shweta_mane_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Shweta Mane</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={palash_atram_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Palash Atram</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={himanshi_bisen_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Himanshi Bisen</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={hardik_bodele_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Hardik Bodele</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div>
	<div class="advisor-box flex flex-col items-center p-4 border border-black rounded-lg w-60 bg-white shadow-xl shadow-black/70">
	<img src={samruddhe_nasre_photo} alt="person" class="rounded-full mb-4 w-30 h-30">
	<p class="text-center text-xl font-serif font-bold">Samruddhi Nasre</p>
	<hr class="w-full my-2 border-gray-300">
	<p class="text-center text-xl font-medium text-slate-400">Co Head</p>
	</div></div>
	<br><br><br><br><br><br>
	</div></div>
	
	

		
	
		
