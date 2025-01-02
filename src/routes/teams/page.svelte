<script>
  import { onMount } from 'svelte';
  import 'aos/dist/aos.css'; // Import AOS styles
  import AOS from 'aos'; // Import AOS library

  onMount(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true,    // Whether animation should happen only once
    });
  });
</script>


<div class="container">
  <!-- Content with AOS animation -->
  <div
    data-aos="fade-up"
    class="bg-white rounded-lg shadow-lg p-6 text-center">
    <h2 class="text-lg font-bold">Hello, I appeared with a fade-up!</h2>
  </div>

  <div
    data-aos="zoom-in"
    class="bg-blue-500 rounded-lg shadow-lg p-6 text-center mt-10">
    <h2 class="text-lg font-bold text-white">I'm zooming in!</h2>
  </div>
</div>
