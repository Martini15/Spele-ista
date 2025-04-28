
const mansZimejums = document.getElementById("mansZimejums");        
const ctx = mansZimejums.getContext("2d"); 

 

//Pievienoju spēlātāju 

let meitene_x = 0; 

let meitene_y = 0; 
const meiteneWidth = 50;
 const meiteneHeigth = 50;


//Pievienoju  Bumbu 

let Bumba_x = 0; 

let Bumba_y = 0; 
const BumbaWidth = 30;
 const BumbaHeigth = 30;

  

  

 

 

 let score = 0; 
 let time_remaining = 20; 
 let stopGame; 

 let meiteneImg = new Image(); 
 meiteneImg.src = "meitene.png"; 
 
 let BumbaImg = new Image(); 
 BumbaImg.src = "Bumba.png"; 
 
 function ImagesTouching(x1, y1, img1, x2, y2, img2) {

    // Šī funkcija parāda 2 bildes
  

    if (x1 >= x2 + BumbaWidth || x1 + meiteneWidth <= x2) return false;   

    if (y1 >= y2 + BumbaHeigth || y1 + meiteneHeigth <= y2) return false; 
    return true;                                                       

    } 



 let Bumba_speed = 3; 

 let FPS = 40;                        // Pievienoju rezultātu, bumbas ātrumu un laiku

 

 

 

 function restart_game() { 


     time_remaining = 20; 

     score = 0; 

     Bumba_speed = 3; 

     } 

 

 
 

 

 function Do_a_Frame () { 

    ctx.clearRect(0, 0, mansZimejums.width, mansZimejums.height);                 

 

    ctx.fillStyle= "purple"; 

    ctx.font = "20px Arial"; 

    ctx.fillText("Score: " + score, 0, 20);          // Displejs                    

 

 

    meitene_y = mansZimejums.height - meiteneImg.height;                               

    ctx.drawImage(meiteneImg, meitene_x, meitene_y);                                  
 

    ctx.fillText("Time Remaining: " + Math.round(time_remaining), 0, 45); // cik laika vēl ir palicis

 

    if (time_remaining <= 0) {                                            // laiks ir beidzies

          ctx.fillStyle= "red"; 

          ctx.font = "bold 50px Arial";                                  

          ctx.textAlign="center"; 

          ctx.fillText("Game Over", mansZimejums.width / 2, mansZimejums.height / 2);   

          ctx.font = "bold 20px Arial"; 

          ctx.fillText("Press S to play again", mansZimejums.width / 2, (mansZimejums.height / 2)+50); 

          ctx.textAlign="left"; 

          } 

    else { 

          time_remaining = time_remaining - 1/FPS;                         

 

          Bumba_y = Bumba_y + Bumba_speed;                                

 

          if (Bumba_y > mansZimejums.height) {                                 

              Bumba_y= 0;                                                  

              Bumba_x= Math.random() * (mansZimejums.width - BumbaImg.width); 

              }    

          } 

 

    ctx.drawImage(BumbaImg, Bumba_x, Bumba_y);                            //Zīmē bumbu

 

    if (ImagesTouching(meitene_x, meitene_y, meiteneImg, Bumba_x, Bumba_y, BumbaImg)) {  // Apskata vai ir pieskāries

        score= score + 1;                                                    // pievieno punktu 

        Bumba_speed = Bumba_speed + 0.5;                                     // liek bumbai krist tālāk

        Bumba_x= -BumbaImg.width;                                            // paslēpj bumbu
        } 

    }  

 

 setInterval(Do_a_Frame, 1000/FPS);                                          // 

 

 

 function MyKeyDownHandler (MyEvent) {  

   if (MyEvent.keyCode == 37 && meitene_x > 0) {meitene_x = meitene_x - 10;}                          

   if (MyEvent.keyCode == 39 && meitene_x+meiteneImg.width < mansZimejums.width) {meitene_x = meitene_x+10;}  

   if (MyEvent.keyCode == 83) restart_game();                                            

   MyEvent.preventDefault(); 

   } 

 

 addEventListener("keydown", MyKeyDownHandler);                        

 

 mansZimejums.width = window.innerWidth - 20;                            
 mansZimejums.height = window.innerHeight - 20;                          

 
