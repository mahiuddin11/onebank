
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
          // var dipostiAmount = document.getElementById("diposit").value; ///inpute fill value find p
          // var dipostiAmountNumber = parseFloat(dipostiAmount); // convert string to number usr parsefload function


          // //diposide blance card find
          // var currentDiposit = document.getElementById("currentDiposit").innerText;
          // var currentDipositNumber = parseFloat(currentDiposit);
          // var totalDiposit = currentDipositNumber + dipostiAmountNumber;
          // var currentDiposit = document.getElementById("currentDiposit").innerText = totalDiposit;
          // document.getElementById("diposit").value = "0"; // when submit value then submit amount refresh 0
         
          cardBlanceShow("currentDiposit",dipostiAmount);
           document.getElementById("diposit").value = "0"; // when submit value then submit amount refresh 0
          // // currentBlance Add 
          // var CardBlance = document.getElementById("currentBlance").innerText;
          // var CardBlance = parseFloat(CardBlance);
          // var  totalBlance = CardBlance + dipostiAmountNumber ;
          // var currentDiposit = document.getElementById("currentBlance").innerText = totalBlance;

          cardBlanceShow("currentBlance",dipostiAmount);

        });
        

        // withdrow opction
        var withdrowMonyBtn = document.getElementById("withdrowMony");
             withdrowMonyBtn.addEventListener("click", function () {

             var withdrawAmount = getInputNumber("withdrow");
             

          // var withdrawAmount = document.getElementById("withdrow").value;
          // var withdrawAmount = parseFloat(withdrawAmount);
          
          // var withdrawCard_blance = document.getElementById("currentWithdrow").innerText;
          // var withdrawCard_blance = parseFloat(withdrawCard_blance);
          // var totalwithdrow = withdrawCard_blance + withdrawAmount;
          // var withdrawCard_blance = document.getElementById("currentWithdrow").innerText = totalwithdrow;

          cardBlanceShow("currentWithdrow",withdrawAmount);
          document.getElementById("withdrow").value = "0"; // when submit value then submit amount refresh 0

           cardBlanceShow("currentBlance",withdrawAmount * -1); 
          
        });

        
         
        // Blance section code 

        //login section end
      });

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
    