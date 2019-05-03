var prevObj=null
		var currObj=null
		var max=15
		var min=0
		var iconArr=["fa fa-leaf","fa fa-bath","fa fa-bomb","fa fa-anchor","fa fa-bolt","fa fa-diamond","fa fa-cube","fa fa-bicycle","fa fa-leaf","fa fa-bath","fa fa-bomb","fa fa-anchor","fa fa-bolt","fa fa-diamond","fa fa-cube","fa fa-bicycle"]
		var moves=0 // number of moves
		var starCount=5 // number of stars 
		var timer=1 // time taken
		var correctPairCount=0 
		var prevParent=null
		document.getElementById("restartBtn").onclick=function(){
			location.reload()
		} 
		// the restart button has been used 
		function stopWatch()
		{

			document.getElementById("labelTimer").textContent= (timer++)+"s"
		} 
		setInterval(stopWatch,1000)
        // stop watch has been assigned 1000s to complete the game after which the game is over 
		shuffle()
		function shuffle() // the shuffle function has been used to shuffle the cards every time a new game begins giving the player no option to cheat in the next game
		{	
			for(i=0;i<20;i++)
			{
				num1 = Math.floor(Math.random() * (max - min + 1)) + min;
				num2 = Math.floor(Math.random() * (max - min + 1)) + min;
				temp=iconArr[num1]
				iconArr[num1]=iconArr[num2]
				iconArr[num2]=temp
			}

			for(i=0;i<document.getElementsByClassName('iconbox').length;i++)
			{
				iconElement = document.createElement("i")
				iconElement.setAttribute("class",iconArr[i])
				document.getElementsByClassName('iconbox')[i].appendChild(iconElement)
			}

		}

		function sendFa(id)
		{

			if(prevParent!=$(id).parent().attr('id'))
			{
				if(prevObj==null && currObj==null)
				{
					var click1 = $(id).children()[0]
					$(click1).css({"opacity":"1"})
					prevObj=click1
					prevParent=$(id).parent().attr('id')
				} 
				//opacity function has been used when the click function has been used 
				else
				{
					var click1 = $(id).children()[0]
					$(click1).css({"opacity":"1"})
					currObj=click1
					checkMatch(prevObj,currObj)
				}
			}				

		}
		function checkMatch(ob1,obj2)
		{ 
			if(ob1.className!=obj2.className)
			{
				setTimeout(function(){
					$(ob1).css({"opacity":"0"})
					$(obj2).css({"opacity":"0"})
			},500)
				
			moves++
			$("#movesbox").text("Moves : "+moves)
			// this sets the moves and it has been used instead of the moves counter
				if(moves>10)
				{
					$("#star5").css({"color":"rgba(0,0,0,0.4)"})
					starCount=4 
					// stars are estimated according to the number of moves
				}
				if(moves>15)
				{
					$("#star4").css({"color":"rgba(0,0,0,0.4)"})
					starCount=3

				}
				if(moves>20)
				{
					
					starCount=2
					$("#star3").css({"color":"rgba(0,0,0,0.4)"})

				}
				if(moves>25)
				{
					starCount=1
					$("#star2").css({"color":"rgba(0,0,0,0.4)"})

				}

			}
			else
			{
				console.log("here")
				correctPairCount++
				if(correctPairCount==8)
				{
					setTimeout(function(){
					alert("Your time is "+(timer-1)+"s in "+moves+" moves with a rating of "+starCount+" stars!")
					}, 500);
				}
			} // the alert displays the timer, moves and star rating

			prevObj=null
			currObj=null
			prevParent=null
		}
