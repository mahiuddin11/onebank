
      // Set the playback rate to slow motion
      var video = document.getElementById("background-video");
      video.playbackRate = 0.4;

      var loginBtn = document.getElementById("btnLogin");
      loginBtn.addEventListener("click", function () {
        var loginAria = document.getElementById("loginFromAria");
        loginAria.style.display = "none";

        var deshboard = document.getElementById("deshbord-aria");
        deshboard.style.display = "block";

        //diposite hindlyer
        var addMonyBtn = document.getElementById("addMony");
        addMonyBtn.addEventListener("click", function () {
     
          var dipostiAmount = getInputNumber("diposit");
         
          cardBlanceShow("currentDiposit",dipostiAmount);
           document.getElementById("diposit").value = 0; // when submit value then submit amount refresh 0
         
          cardBlanceShow("currentBlance",dipostiAmount);
          cardTitle("currentBlance");
           

        });
        

        // withdrow opction
        var withdrowMonyBtn = document.getElementById("withdrowMony");
             withdrowMonyBtn.addEventListener("click", function () {

             var withdrawAmount = getInputNumber("withdrow");

          cardBlanceShow("currentWithdrow",withdrawAmount);
          document.getElementById("withdrow").value = 0; // when submit value then submit amount refresh 0

           cardBlanceShow("currentBlance",withdrawAmount * -1); 
           cardTitle("currentBlance");
 
        });

        
         
        // Blance section code 
        
        //login section end
      });
          
      // cardTitel Change function
      function cardTitle(id){
        var cardCurrentBlance = document.getElementById(id).innerText;
        var cardCurrentBlance = parseFloat(cardCurrentBlance);
        
        if(cardCurrentBlance < 0){
          document.getElementById('cardTitel').innerText = "Debit Blance"; 
        }else if(cardCurrentBlance > 0){

          document.getElementById('cardTitel').innerText = "Cradit Blance"; 
          
        }
        
          
      }


      //get inpute Number 
      function getInputNumber(id){
        var amount = document.getElementById(id).value;
        var Amount = parseFloat(amount);
        return Amount;
      }
      // id = currentBlance
      function cardBlanceShow(id,amount){
        // currentBlance Add 
          var CardBlance = document.getElementById(id).innerText;
          var CardBlance = parseFloat(CardBlance);
          var  totalBlance = CardBlance + amount ;
          var currentAmount = document.getElementById(id).innerText = totalBlance;
          return currentAmount;
      }
    