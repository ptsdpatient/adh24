<script>
  import 'aos/dist/aos.css';
  import { onMount } from 'svelte';
// Import AOS styles
  import AOS from 'aos';
// Import AOS library
  import aditya from '$lib/assets/images/advisors/Aditya Shinde.jpg';
  import sushrutImage from '$lib/assets/images/advisors/Sushrut kohale.jpg';
  import ankush from '$lib/assets/images/coordinators/Ankush Kumar Singh .jpg';
  import arsh from '$lib/assets/images/coordinators/Arsh Sheikh.jpg';
  import womika from '$lib/assets/images/coordinators/Womika Gaidhani .jpg';
  import Yash from '$lib/assets/images/coordinators/Yash Dhawale .jpg';
  import yasshowardhan from '$lib/assets/images/coordinators/Yasshowardhan pethe.png';
// 
  import darshan from '$lib/assets/images/technical team/Darshan Narad.jpg';
  // import zishu from '$lib/assets/images/technical team/IMG_20231229_222126.jpg';
  import roshan from '$lib/assets/images/technical team/IMG_20231229_222126.jpg';
  import kartik from '$lib/assets/images/technical team/Kartik Musale .jpg';
  import niharika from '$lib/assets/images/technical team/Niharika Nagpurkar.jpg';
  import sarthak from '$lib/assets/images/technical team/Sarthak domkawle .jpg';
  import moon from '$lib/assets/images/technical team/Shreyash Moon.jpg';
  import tarun from '$lib/assets/images/technical team/tarun_maraskolhe.jpg';
//organi
  import anshu from '$lib/assets/images/organisation team/Anshu Chole .jpg';
  import atharva from '$lib/assets/images/organisation team/Atharva Karale.jpg';
  import medhaj from '$lib/assets/images/organisation team/Medhaj Dixit.jpg';
  import unnati from '$lib/assets/images/organisation team/unnati tadas.jpg';
  import vijay from '$lib/assets/images/organisation team/Vijay Chirde.jpg';
  import yashash from '$lib/assets/images/organisation team/Yashash meshram.jpg';
//public
  import aditi from '$lib/assets/images/publicity team/Aditi sonone .jpg';
  import bhumi from '$lib/assets/images/publicity team/Bhumi Raut.jpg';
  import saumitra from '$lib/assets/images/publicity team/Saumitra Yogi .jpg';
  import vansh from '$lib/assets/images/publicity team/Vansh kuthe.jpg';
  import vivek from '$lib/assets/images/publicity team/VIVEK RATHOD.jpg';
//account
// import vivek from '$lib/assets/images/publicity team/VIVEK RATHOD.jpg';
//content
import durgesh from '$lib/assets/images/c&d/Durgesh Kale.jpg';
import ritika from '$lib/assets/images/c&d/RITIKA AMTE.jpg';
//cd
import hrucha from '$lib/assets/images/c&d/Hrucha Linge.png';
import janvahi from '$lib/assets/images/c&d/Janhavi Soyam .png';

//hd
import atharvas from '$lib/assets/images/h&d/Atharv Sonar .jpg';
// import vansh from '$lib/assets/images/h&d/Vansh kuthe.jpg';
import vanshi from '$lib/assets/images/h&d/Vansh Ikharkar .jpg';
import guru from '$lib/assets/images/h&d/IMG-20241009-WA0008 (1).jpg';









import { AdditiveAnimationBlendMode } from 'three';
  onMount(() => {
    AOS.init({
      duration: 3500, 
      once: false,    
    });
  });
</script>

<div class="bg-cover !scroll-smooth  bg-fixed bg-center bg-no-repeat min-h-screen bg-[url('bgimageland.jpg')] py-6 px-2 flex flex-col gap-24 justify-center items-center backdrop-blur-md font-sans">
  
  
 <!-- Advisors -->

  <div class="flex flex-col">
      <div class="p-2"><h1 class="text-center text-4xl  sm:text-6xl   text-white font-bold mt-24" >ADVISORS</h1></div>
      <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">
 
  <!-- advisors name goes here -->
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Sushrut Kohale</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Advisor</p>
          </div>
      </div>
      </div>
    </div> 
    <div  data-aos="fade-up"
    data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
        <div class="card-wrapper w-[190px] h-[260px] ">
          <div class="card-content flex items-center justify-center text-xs">
            <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                    <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                </div>
                <p class="name text-white text-xl  mt-3">Swara Nagpure    </p>
                <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                <p class="post text-gray-400 text-sm mt-2">Advisor</p>
            </div>
        </div>
        </div>
      </div> 
      <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Anukul Ghosh</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Advisor</p>
              </div>
          </div>
          </div>
        </div> 
        <div  data-aos="fade-up"
        data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
            <div class="card-wrapper w-[190px] h-[260px] ">
              <div class="card-content flex items-center justify-center text-xs">
                <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                    <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                        <img src={aditya} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                    </div>
                    <p class="name text-white text-xl  mt-3">Aditya Shinde</p>
                    <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                    <p class="post text-gray-400 text-sm mt-2">Advisor</p>
                </div>
            </div>
            </div>
          </div> 
          <div  data-aos="fade-up"
          data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
              <div class="card-wrapper w-[190px] h-[260px] ">
                <div class="card-content flex items-center justify-center text-xs">
                  <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                      <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                          <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                      </div>
                      <p class="name text-white text-xl  mt-3">Om Chaudhary</p>
                      <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                      <p class="post text-gray-400 text-sm mt-2">Advisor</p>
                  </div>
              </div>
              </div>
            </div> 
 
  </div>
</div>
<!-- Co-ordinators -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Co-ordinators</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">


<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={arsh} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Arsh Sheikh</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Co-ordinator(EE)</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={Yash} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Yash Dhawle

            </p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Co-ordinator(ETC)</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={womika} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Womika Gaidhani</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Co-ordinator(CE)</p>
          </div>
      </div>
      </div>
    </div> 
    <div  data-aos="fade-up"
    data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
        <div class="card-wrapper w-[190px] h-[260px] ">
          <div class="card-content flex items-center justify-center text-xs">
            <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                    <img src={ankush} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                </div>
                <p class="name text-white text-xl  mt-3">Ankush Kumar Singh</p>
                <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                <p class="post text-gray-400 text-sm mt-2">Co-ordinator(CSE)</p>
            </div>
        </div>
        </div>
      </div> 
      <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={yasshowardhan} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-lg  mt-3">Yasshowardhan Pethe</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-ordinator(ME)</p>
              </div>
          </div>
          </div>
        </div> 

</div>
</div>
<!--  Technical Team -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Technical Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={roshan} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Zishan Deshmukh</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={niharika} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Niharika Nagpurkar</p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={roshan} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Roshan Padit</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Head</p>
          </div>
      </div>
      </div>
    </div> 
    <div  data-aos="fade-up"
    data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
        <div class="card-wrapper w-[190px] h-[260px] ">
          <div class="card-content flex items-center justify-center text-xs">
            <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                    <img src={darshan} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                </div>
                <p class="name text-white text-xl  mt-3">Darshan Narad</p>
                <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                <p class="post text-gray-400 text-sm mt-2">Head</p>
            </div>
        </div>
        </div>
      </div> 
      <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={tarun} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Tarun Maraskolhe</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-head</p>
              </div>
          </div>
          </div>
        </div> 
        <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={sarthak} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Sarthak Domkawle</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-head</p>
              </div>
          </div>
          </div>
        </div> 
        <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={moon} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Shreyash Moon</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-head</p>
              </div>
          </div>
          </div>
        </div> 
        <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={kartik} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Kartik Musale</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-head</p>
              </div>
          </div>
          </div>
        </div> 

</div>
</div>
<!-- Organisation Team -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Organisation Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={unnati} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Unnati Tadas</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={atharva} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Atharva Karale    </p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={medhaj} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Medhaj Dixit</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Head</p>
          </div>
      </div>
      </div>
    </div> 
    <div  data-aos="fade-up"
    data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
        <div class="card-wrapper w-[190px] h-[260px] ">
          <div class="card-content flex items-center justify-center text-xs">
            <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                    <img src={anshu} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                </div>
                <p class="name text-white text-xl  mt-3">Anshu Chole</p>
                <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                <p class="post text-gray-400 text-sm mt-2">Co-head</p>
            </div>
        </div>
        </div>
      </div> 
      <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={vijay} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Vijay Chirde</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-head</p>
              </div>
          </div>
          </div>
        </div> 
        <div  data-aos="fade-up"
        data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
            <div class="card-wrapper w-[190px] h-[260px] ">
              <div class="card-content flex items-center justify-center text-xs">
                <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                    <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                        <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                    </div>
                    <p class="name text-white text-xl  mt-3">Tushar Bandger</p>
                    <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                    <p class="post text-gray-400 text-sm mt-2">Co-head</p>
                </div>
            </div>
            </div>
          </div> 

</div>
</div>
<!-- Sponsorship Team -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Sponsorship Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Zishan Deshmukh</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={yashash} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Yashash Meshram</p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={moon} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Shreyash Moon</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Head</p>
          </div>
      </div>
      </div>
    </div> 
    

</div>
</div>
<!--Publicity Team -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Publicity Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={vivek} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Vivek Rathod</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={vansh} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Vansh Kuthe   </p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Himanshu Thakre</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Head</p>
          </div>
      </div>
      </div>
    </div> 
    <div  data-aos="fade-up"
    data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
        <div class="card-wrapper w-[190px] h-[260px] ">
          <div class="card-content flex items-center justify-center text-xs">
            <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                    <img src={darshan} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                </div>
                <p class="name text-white text-xl  mt-3">Darshan Narad</p>
                <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                <p class="post text-gray-400 text-sm mt-2">Co-head</p>
            </div>
        </div>
        </div>
      </div> 
      <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={yashash} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Yashash Meshram</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-head</p>
              </div>
          </div>
          </div>
        </div> 
        <div  data-aos="fade-up"
        data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
            <div class="card-wrapper w-[190px] h-[260px] ">
              <div class="card-content flex items-center justify-center text-xs">
                <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                    <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                        <img src={aditi} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                    </div>
                    <p class="name text-white text-xl  mt-3">Aditi Sonone</p>
                    <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                    <p class="post text-gray-400 text-sm mt-2">Co-head</p>
                </div>
            </div>
            </div>
          </div> 
          <div  data-aos="fade-up"
          data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
              <div class="card-wrapper w-[190px] h-[260px] ">
                <div class="card-content flex items-center justify-center text-xs">
                  <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                      <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                          <img src={bhumi} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                      </div>
                      <p class="name text-white text-xl  mt-3">Bhumi Raut</p>
                      <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                      <p class="post text-gray-400 text-sm mt-2">Co-head</p>
                  </div>
              </div>
              </div>
            </div> 
            <div  data-aos="fade-up"
            data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
                <div class="card-wrapper w-[190px] h-[260px] ">
                  <div class="card-content flex items-center justify-center text-xs">
                    <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                        <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                            <img src={saumitra} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                        </div>
                        <p class="name text-white text-xl  mt-3">Saumitra Yogi</p>
                        <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                        <p class="post text-gray-400 text-sm mt-2">Co-head</p>
                    </div>
                </div>
                </div>
              </div> 

</div>
</div>
<!-- Accounting Team -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Accounting Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={atharva} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Atharva Karale</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Sakshi Kawade   </p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Co-head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={bhumi} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Bhumi Raut</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Co-head</p>
          </div>
      </div>
      </div>
    </div> 
   

</div>
</div>
<!-- Content Writting & Social Media Team -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Content Writting & Social Media Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={aditi} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Aditi Sonone</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={durgesh} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Durgesh Kale   </p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={ritika} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Ritika Amte</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Head</p>
          </div>
      </div>
      </div>
    </div> 
    

</div>
</div>
<!-- Creativity And Decoration Team -->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Creativity And Decoration Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={ritika} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Ritika Amte</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={hrucha} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Hrucha Linge   </p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={janvahi} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Janhavi Soyam</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Co-head</p>
          </div>
      </div>
      </div>
    </div> 
    <div  data-aos="fade-up"
    data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
        <div class="card-wrapper w-[190px] h-[260px] ">
          <div class="card-content flex items-center justify-center text-xs">
            <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                    <img src={durgesh} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                </div>
                <p class="name text-white text-xl  mt-3">Durgesh Kale</p>
                <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                <p class="post text-gray-400 text-sm mt-2">Co-head</p>
            </div>
        </div>
        </div>
      </div> 
      

</div>
</div>
<!-- Hospitality and Discipline Team-->

<div class="flex flex-col">
  <div class="p-2"><h1 class="text-center  text-4xl sm:text-6xl   text-white font-bold mt-24" >Hospitality and Discipline Team</h1></div>
  <div class="  info flex flex-wrap justify-center items-center gap-3  sm:gap-3 md:gap-8  mt-8">

<!-- advisors name goes here -->
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
  <div class="card-wrapper w-[190px] h-[260px] ">
    <div class="card-content flex items-center justify-center text-xs">
      <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
          <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
              <img src={atharvas} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
          </div>
          <p class="name text-white text-xl  mt-3">Atharva Sonar</p>
          <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
          <p class="post text-gray-400 text-sm mt-2">Head</p>
      </div>
  </div>
  </div>
</div> 
<div  data-aos="fade-up"
data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
    <div class="card-wrapper w-[190px] h-[260px] ">
      <div class="card-content flex items-center justify-center text-xs">
        <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
            <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                <img src={guru} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
            </div>
            <p class="name text-white text-xl  mt-3">Guru Vanikar  </p>
            <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
            <p class="post text-gray-400 text-sm mt-2">Head</p>
        </div>
    </div>
    </div>
  </div> 
  <div  data-aos="fade-up"
  data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
      <div class="card-wrapper w-[190px] h-[260px] ">
        <div class="card-content flex items-center justify-center text-xs">
          <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
              <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                  <img src={sushrutImage} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
              </div>
              <p class="name text-white text-xl  mt-3">Vikas Kuthmode</p>
              <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
              <p class="post text-gray-400 text-sm mt-2">Co-head</p>
          </div>
      </div>
      </div>
    </div> 
    <div  data-aos="fade-up"
    data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
        <div class="card-wrapper w-[190px] h-[260px] ">
          <div class="card-content flex items-center justify-center text-xs">
            <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                    <img src={vanshi} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                </div>
                <p class="name text-white text-xl  mt-3">Vansh Ikharkar</p>
                <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                <p class="post text-gray-400 text-sm mt-2">Co-head</p>
            </div>
        </div>
        </div>
      </div> 
      <div  data-aos="fade-up"
      data-aos-duration="800" class="flex w-[190px] h-[260px] flex-col items-center justify-center  hover:shadow-[0_0_28px_purple] transition-3s  rounded-2xl bg-slate-950 text-white">
          <div class="card-wrapper w-[190px] h-[260px] ">
            <div class="card-content flex items-center justify-center text-xs">
              <div class=" flex flex-col items-center justify-center photo relative w-full h-full rounded-2xl ">
                  <div class="imagecir relative w-[155px] h-[155px]  rounded-full overflow-hidden mx-auto">
                      <img src={medhaj} alt="Person" class="w-[150px] h-[150px] border-4 rounded-full">
                  </div>
                  <p class="name text-white text-xl  mt-3">Medhaj Dixit</p>
                  <div class="line w-[150px] h-[2px] bg-gray-300 mx-auto mt-2"></div>
                  <p class="post text-gray-400 text-sm mt-2">Co-head</p>
              </div>
          </div>
          </div>
        </div> 

</div>
</div>
  
</div>