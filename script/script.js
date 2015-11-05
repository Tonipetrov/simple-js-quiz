var questionsDB=[
                ["Question", "Correct", "Wrong", "Wrong", "Wrong"],
                ["Where is Paris located?", "France", "Great Britain", "Germany", "Belgium"],
                ["Who was the first man in space?", "Yuri Gagarin", "Neil Armstrong", "Valentina Tereshkova", "Laika"],
                ["Which country won most football world cups?", "Brazil", "Germany", "Italy", "Argentina"],
                ["Who was the inventor of tefephone?", "Alexander Bell", "Guglielmo Marconi", "Baron Schilling", "Alexander Fleming"],
                ["From which country were the majority of the 9/11 hijackers?", "Saudi Arabia", "Pakistan", "Iran", "Syria"],
				["How many battles did Napoleon lose?", "7", "1", "0", "14"]
            ]
            var numberOfQuestions=questionsDB.length;
            var askedQuestions=0;
            var score=0;
            var questionsToAsk=5;
            var options;
            var correct;
            function shuffle(array) {
                array.shift();
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            function printQuestion(){
                document.getElementById("question").innerHTML=questionsDB[0][0];
                shuffle(questionsDB[0]);
                for(var i=0;i<4;i++){
                    document.getElementsByClassName("option")[i].innerHTML=questionsDB[0][i];
                }
            }
            function hideMessage() {
                document.getElementById("check").style.display="none"; 
                shuffle(questionsDB);
                correct = questionsDB[0][1];
                if(askedQuestions==questionsToAsk){
					var myDiv=document.getElementById("main");
					myDiv.style.textAlign="center";
					myDiv.style.margin="5%";
                    myDiv.innerHTML="You have "+score+ " correct answers";
					var aTag = document.createElement('a');
					aTag.setAttribute('href',"index.html");
					aTag.innerHTML = "Play new game";
					myDiv.appendChild(aTag);
                }else{
                    printQuestion();
                }
                
            }

            function startTimer() {
                var hide = window.setTimeout("hideMessage()", 1500);
                
                
            }
            
            function checkAnswer(){
                
                var all = document.getElementsByClassName("option");
                for(var i=0;i<4;i++)
                all[i].addEventListener('click',function(){//If you're gonna use attachEvent, use 'onclick' instead of 'click'
				var check=document.getElementById("check")
				if(this.innerHTML === correct){
					check.innerHTML="Correct answer";
					check.style.backgroundColor="green";
                    score++;
                    
                }
                else{
					check.innerHTML="Wrong answer";
					check.style.backgroundColor="red";
                }
                check.style.display="block";
                askedQuestions++;
                startTimer();
            }); 
            }
               
                shuffle(questionsDB);
                correct = questionsDB[0][1];
                printQuestion();
                checkAnswer();