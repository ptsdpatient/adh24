<script>
    	import google from '$lib/assets/icons/g.webp';
    	import adhyaya from '$lib/assets/icons/Adhyayalogo.png';
    	import bg from '$lib/assets/icons/bg.jpg';
    	import cash from '$lib/assets/icons/cash-removebg-preview.png';
    	import paytm from '$lib/assets/icons/image-removebg-preview (4).png';
    	import bhim from '$lib/assets/icons/image-removebg-preview (5).png';


</script>
<div class=" bg-cover  flex justify-center items-center p-4" style="background:url({bg}); background-size: 200%;">
    <div class="bg-white/1 backdrop-blur-lg border border-white/1 rounded-2xl p-8 w-full max-w-[650px]  flex flex-col  font-sans items-center shadow-lg">
      <div class="text-center mb-6">
        <img src={adhyaya} alt="Adhyaaya Logo" class="h-32 mx-auto mb-4">
        <h1 class="w-full text-4xl font-bold text-center py-3 text-white font-sans text-shadow">
          Participant Details Form
        </h1>
      </div>
      <form action="#" method="post" class="w-[70%] space-y-7">
          <div class="space-y-7 mb-14">
        <div class="flex flex-col ">
          <label for="name" class="text-white mb-1">Full Name</label>
          <input type="text" id="name" name="name" class="bg-transparent text-white  placeholder-[#757575] border border-gray-300 rounded-lg px-4 py-4  focus:outline-none focus:ring-2 focus:ring-white transition" placeholder="Enter Your Full Name" required>
        </div>
        <div class="flex flex-col   ">
          <label for="email" class="text-white mb-1">Email</label>
          <input type="email" id="email" name="email" class="bg-transparent text-white placeholder-[#757575] border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-white transition" placeholder="Enter Your Email" required>
        </div>
        <div class="flex flex-col ">
          <label for="mobile" class="text-white mb-1">Mobile Number</label>
          <input type="tel" id="mobile" name="mobile" class="bg-transparent text-white placeholder-[#757575] border border-gray-300 rounded-lg px-4 py-4  focus:outline-none focus:ring-2 focus:ring-white transition" placeholder="Enter Your Mobile Number" maxlength="10" required>
        </div>
        <div class="flex flex-col">
          <label for="college" class="text-white mb-1">College</label>
          <input type="text" id="college" name="college" class="bg-transparent text-white placeholder-[#757575] border border-gray-300 rounded-lg px:4 sm:px-2 py-4  focus:outline-none focus:ring-2 focus:ring-white transition" placeholder="Enter Your College Name" required>
        </div>
        <div class="flex flex-col   ">
          <label for="event" class="text-white mb-1">Event</label>
          <select id="event" name="event" class="bg-transparent text-[#757575] border border-gray-300 rounded-lg px-4 py-4  focus:outline-none focus:ring-2 focus:ring-white transition" required>
            <option value="" class="text-black">Select The Event</option>
            <option value="coding" class="text-black">Coding</option>
            <option value="debate" class="text-black">Debate</option>
            <option value="sports" class="text-black">Air show</option>
          </select>
        </div>
      </div>
        <div class="my-6"><h1 class="w-full text-3xl font-bold text-center py-3 text-white font-sans text-shadow">Choose a Payment Option</h1></div>
        <div class="flex flex-col gap-4 mt-10">
          <div class="flex items-center justify-center p-1 bg-transparent text-white border border-white rounded-3xl hover:bg-white hover:text-black transition cursor-pointer" onclick="selectPaymentOption('BHIM')">
              <img src={bhim} class="w-16 h-16" alt="BHIM Logo">
              <span class="ml-2">BHIM</span>
            </div>
          <div class="flex items-center justify-center p-1 bg-transparent text-white border border-white rounded-3xl hover:bg-white hover:text-black transition cursor-pointer" onclick="selectPaymentOption('GPay')">
            <img src={google} class="w-16" alt="GPay Logo">
            <span class="ml-2">Google Pay</span>
          </div>
          <div class="flex items-center justify-center p-1 bg-transparent text-white border border-white rounded-3xl hover:bg-white hover:text-black transition cursor-pointer" onclick="selectPaymentOption('PhonePe')">
            <img src="https://www.phonepe.com/webstatic/8451/static/PhonePe_vertical-16158be8710408f3561e1d07d01d5d89.png" class="w-16" alt="PhonePe Logo">
            <span class="ml-2">PhonePe</span>
          </div>
          <div class="flex items-center justify-center p-1 bg-transparent text-white border border-white rounded-3xl hover:bg-white hover:text-black transition cursor-pointer" onclick="selectPaymentOption('Paytm')">
            <img src={paytm} class="w-16" alt="Paytm Logo">
            
            <span class="ml-2">Paytm</span>
          </div>
          <div class="flex items-center justify-center p-1 bg-transparent text-white border border-white rounded-3xl hover:bg-white hover:text-black transition cursor-pointer" onclick="cash()">
            <img  src={cash} class="w-16" alt="Cash">
            <span class="ml-2">Cash</span>
          </div>
        </div>
        <div class="hidden mt-6" id="cash-option">
          <h1 class="text-white text-xl font-semibold tracking-wide text-center">Cash Option</h1>
          <div class="flex flex-col mt-4">
            <label for="photo-upload" class="text-white mb-1">Upload Photo of Attendee:</label>
            <input type="file" id="photo-upload" class="bg-transparent text-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white transition" accept="image/*">
          </div>
          <div class="flex flex-col my-4">
            <label for="amount" class="text-white mb-1">Amount Paid (₹)</label>
            <select id="amount" name="amount" class="bg-transparent text-gray-400 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white transition" required>
              <option value="sports" class="text-black">0</option>
              <option value="coding" class="text-black">100</option>
              <option value="debate" class="text-black">200</option>
              <option value="sports" class="text-black">300</option>
            </select>
          </div>
        </div>
        <button type="button" class="w-full bg-transparent text-white border mt-8 border-white rounded-3xl px-2 text-2xl py-3 hover:bg-white hover:text-black transition">Submit</button>
      </form>
      
    </div>
    <script>
      function cash() {
        document.getElementById('cash-option').classList.remove('hidden');
      }
    </script>
  </div>