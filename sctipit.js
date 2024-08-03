<script>
      // Set the playback rate to slow motion
      var video = document.getElementById("background-video");
      video.playbackRate = 0.4;

      var loginBtn = document.getElementById("btnLogin");
      loginBtn.addEventListener("click", function (event) {
        
        var loginAria = document.getElementById("loginFromAria");
        loginAria.style.display = "none";

        var deshboard = document.getElementById("deshbord-aria");
        deshboard.style.display = "block";


        //diposite hindlyer 
        var addMony = document.getElementById("addMony");
            addMony.addEventListener("click",function(){
              //amunt store
              var dipostiAmount = document.getElementById("diposit").value; ///inpute fill value find p
                  
            });
      });
    </script>