
<script>
    let zoomed = false;
    import map from '$lib/assets/map.png?url'
    const toggleZoom=()=>window.alert("hello world")
     
  </script><div class="w-full md:h-auto h-[200vh] bg-black p-10 pt-20 flex flex-col md:flex-row justify-around">
    <div class="w-full h-auto rounded-xl {zoomed?'image-container':' '}" > <img src={map} on:keydown={()=>{toggleZoom}} on:click={()=>toggleZoom}  alt="" style="width: 100%; height: auto;">
    </div>
    <div class="w-full h-full"></div>
    <div class="w-full h-full"></div>
</div>



  
  <style>
    .image-container {
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.5s ease;
    }
  
    .zoomed {
      transform: scale(2); /* Adjust the scale factor as needed */
    }
  </style>
  
