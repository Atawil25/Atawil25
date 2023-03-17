<br/>
		Enter a value: <input id="input"></input>
		<button onclick="loop()">Compute hailstone</button>
		<br/>
		<image id="robot" src="assets/image-1.jpg" width="500" height="500"/>
		<br/>
		<button id="btnBigger">Bigger</button><button id="btnSmaller">Smaller</button>
		<script>
			"use strict";	
			function DoSomething()
@@ -44,6 +48,48 @@
				}
				return count;
			}

			// document.getElementById("robot").onclick = changePicture;
			document.getElementById("btnBigger").onclick = handleBigger;
			document.getElementById("btnSmaller").onclick = handleSmaller;
			document.getElementById("robot").addEventListener("click", changePicture);
			document.getElementById("robot").addEventListener("click", changePicture2);

			function changePicture(event)
			{
				// for a list of all the event properties
				// (because autocomplete isn't complete with javascript)
				// https://www.w3schools.com/jsref/dom_obj_event_prop.asp

				console.log(event.currentTarget.tagName);
				event.currentTarget.src = "assets/image-2.jpg";
			}
			function changePicture2(event)
			{
				// for a list of all the event properties
				// (because autocomplete isn't complete with javascript)
				// https://www.w3schools.com/jsref/dom_obj_event_prop.asp

				console.log(event.currentTarget.tagName);
				alert("cp2");
				// event.currentTarget.src = "assets/image-2.jpg";
			}

			function handleSmaller(event)
			{
				console.log(event.currentTarget.tagName);
				const image = document.getElementById("robot");
				image.height = 100;
				image.width = 100;
			}

			function handleBigger(event)
			{
				console.log(event.currentTarget.tagName);
				const image = document.getElementById("robot");
				image.height = 1024;
				image.width = 1024;
			}
		</script>
	</body>
</html>