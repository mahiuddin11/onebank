
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
          //amunt store
          var dipostiAmount = document.getElementById("diposit").value; ///inpute fill value find p
          var dipostiAmountNumber = parseFloat(dipostiAmount); // convert string to number usr parsefload function
          //diposide blance card find
          var currentDiposit =
            document.getElementById("currentDiposit").innerText;
          var currentDipositNumber = parseFloat(currentDiposit);

          var totalDiposit = currentDipositNumber + dipostiAmountNumber;
          var currentDiposit = document.getElementById("currentDiposit").innerText = totalDiposit;
          document.getElementById("diposit").value = "0"; // when submit value then submit amount refresh 0
        });

        // withdrow opction
        var withdrowMonyBtn = document.getElementById("withdrowMony");
        withdrowMonyBtn.addEventListener("click", function () {
          var withdrawAmount = document.getElementById("withdrow").value;
          withdrawAmount = parseFloat(withdrawAmount);
          console.log(withdrawAmount);

          var withdrawCard_blance = document.getElementById("currentWithdrow").innerText;
          withdrawCard_blance = parseFloat(withdrawCard_blance);
            console.log(withdrawCard_blance);


          var totalwithdrow = withdrawCard_blance + withdrawAmount;
          var currentDiposit = document.getElementById("currentWithdrow").innerText = totalwithdrow;
          document.getElementById("withdrow").value = "0"; // when submit value then submit amount refresh 0
          
        });

        //login section end
      });
    