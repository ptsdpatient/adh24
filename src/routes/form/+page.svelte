  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Participant Details Form</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    *{
      margin:0;
      padding: 0;
      font-family: "Poppins",Verdana, Geneva, Tahoma, sans-serif;;
    }
    body{
      min-height: 120vh;
      background:url(form/bg.jpg);
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
  }
  .form-container{
      margin-top: 5vh;
      margin-bottom: 5vh;
      height: 80%;
      width: 40%;
      backdrop-filter: blur(20px);
      border: 1px solid white;
      border-radius: 20px;
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  .logo{
    text-align: center;
    padding: 10px;
  }
  .heading{
      width: 100%;
      text-align: center;
      padding-bottom: 20px;
      padding-top: 20px;
      color: white;
      font-family: "Poppins",Verdana, Geneva, Tahoma, sans-serif;
      text-shadow: 0px 0px 10px rgba(255, 255, 0, 0.673);
  }
  .form-group{
      padding: 20px;
    }
  label{
      display: block;
      margin-bottom: 5px;
      color: white;
    }
  .header{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
}
  input, select {
      width: 90%;
      padding: 15px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 10px;
      backdrop-filter: blur(50px);
      text-transform: capitalize;
      transition: 2s;
      background: transparent;
      color: #ffffff;
      margin-top: 4px;
} 
  select{
      width: 100%;
      color: #707070;
    }
  select:valid{
      color: white;
    }
  select > option{
      color: #000;
    }
  .payment-container{
    padding-top: 30px;
    padding-bottom: 30px;
    
  }
  .payment-option{
      height: 70px;
      width: 90%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
      color: white;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 20px;
      border: 1px solid white;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.25s linear;
    }
  .payment-option:hover{
      background: white;
      color: black;
    }
  .payment-option > span{
      margin-left: 10px;
    }
  .cash-option{
      display: none;
    }
  button {
      width: 50%;
      padding: 12px;
      color: #ffffff;
      border: none;
      border-radius: 20px;
      font-size: 16px;
      cursor: pointer;
      background: transparent;
      border: 1px solid #ccc;
      margin-top: 15px;
      transition: all 0.25s linear;
      box-shadow: 0px 0px 20px rgb(100, 0, 107);
    }

  button:hover {
  background: #ffffff;
  color: rgb(0, 0, 0);
    }
  @media screen and (min-width : 320px) and (max-width:900px){
    .form-container{
      width: 70%;
    }
  }
</style>

<script>
    function selectPaymentOption(){
      
    }
    function cash(){

    }
    function uploadPhoto(){

    }
</script>

<body>
  <div class="form-container">
    <div class="header">
      <div class="logo">
        <img src="form/Adhyayalogo.png" alt="Adhyaaya Logo" class="logo" style="height: 130px;">
      </div>
        <h1 class="heading">Participant Details Form</h1>
        <form action="#" method="post">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" class="me" placeholder="Enter Your Full Name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter Your Email" required>
            </div>
            <div class="form-group">
              <label for="mobile">Mobile Number</label>
              <input type="tel" id="mobile" name="mobile" placeholder="Enter Your Mobile Number" required maxlength="10">
          </div>
            <div class="form-group">
                <label for="college">College</label>
                <input type="text" id="college" name="college" placeholder="Enter Your College Name" required>
            </div>
            <div class="form-group">
                <label for="event" >Event</label>
                <select id="event" name="event" required>
                    <option value="" >Select The Event</option>
                    <option value="coding">Coding </option>
                    <option value="debate">Debate</option>
                    <option value="sports">Air show</option>
                </select>
            </div>
                <h1 class="heading">Choose a Payment Option</h1>
                <div class="payment-container">
                <button class="payment-option" on:click={()=>selectPaymentOption()}>
                    <img src="form/image-removebg-preview (5).png"  style="width: 100px;"alt="BHIM Logo">
                    <span>BHIM</span>
                </button>

                <button class="payment-option" on:click={()=>selectPaymentOption()}>
                    <img src="form/g.webp" style="width: 75px;height: 40px;"alt="GPay Logo" 
                        >
                    <span>Google Pay</span>
                </button>
                <button class="payment-option" on:click={()=>selectPaymentOption()}>
                    <img src="form/https://www.phonepe.com/webstatic/8451/static/PhonePe_vertical-16158be8710408f3561e1d07d01d5d89.png"
                    style="width: 75px;" alt="PhonePe Logo">
                    <span>PhonePe</span>
                </button>

                <button class="payment-option" on:click={()=>selectPaymentOption()}>
                    <img src="form/image-removebg-preview (4).png" style="width: 85px;"
                        alt="Paytm Logo">
                    <span>Paytm</span>
                </button>
            <button class="payment-option"  on:click={()=>cash()}>
              <img src="form/cash-removebg-preview.png" style="width: 85px;"
                  alt="cash">
              <span>Cash</span>
            </button>
        </div>
          <div class="cash-option">
            <h1 class="heading">Cash Option</h1>
            <form id="photo-form">
              <label for="photo-upload">Upload Photo of Attendee:</label>
              <input type="file" id="photo-upload" accept="image/*">
            <div class="form-group">
              <label for="amount">Amount Paid (₹)</label>
              <select id="event" name="event" required>
                <option value="sports">0</option>
                <option value="coding">100</option>
                <option value="debate">200</option>
                <option value="sports">300</option>
              </select>
            </form>
            </div>
          </div>
          <button type="button" on:click={()=>uploadPhoto()}>Submit</button>
      </div>
   
</body>
