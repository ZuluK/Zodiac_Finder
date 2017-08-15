// var to store horoscope information

 var zodiac  = [
   {
     sign: "aries",
     text: "Energetic, encouraging, unstoppable, bold, devoted, heroic, caring.",
     image:"img/aries.jpg"

   },
   {
     sign: "aquarius",
     text: "Communicative, original, open-minded, fair, logical, inviting.",
     image:"img/aquarius.jpg"
   },
   {
     sign: "libra",
     text: "Charming, lovable, fair, sincere, sharing, hopelessly romantic.",
     image: "img/libra.jpg"
   },
   {
     sign: "taurus",
     text: "Patient, organized, supportive, romantic, careful, dedicated.",
     image: "img/taurus.jpg"
   },
   {
     sign: "scorpio",
     text: "The Good: Magnetic, passionate, loyal, protective, trendsetting, brave.",
     image: "img/scorpio.jpg"
   },
   {
     sign: "gemini",
     text: "Fascinating, original, resourceful, charming, wise, adventurous.",
     image: "img/gemini.jpg"
   },
   {
     sign: "sagittarius",
     text: "Honest, fair-minded, inspiring, optimistic, enthusiastic, encouraging, dedicated.",
     image: "img/sagittaruis.jpg"
   },
   {
     sign: "cancer",
     text: "Helpful, patient, compassionate, nurturing, romantic, creative.",
     image: "img/cancer.jpg"
   },
   {
     sign: "capricorn",
     text: "Loyal, family-minded, hardworking, devoted, honest, fearless.",
     image: "img/capircorn.jpg"
   },
   {
     sign: "leo",
     text: "Courageous, kind, generous, loyal, protective, nakedly honest, entertaining.",
     image: "img/leo.jpg"
   },
   {
     sign: "virgo",
     text: "Dedicated, resourceful, helpful, hardworking, witty, practical.",
     image: "img/virgo.jpg"
   },
   {
     sign: "pisces",
     text: "Romantic, helpful, wise, comforting, imaginative.",
     image: "img/pisces.jpg"
   }
 ];
// returns the array in index positon 0 of "Aries"



 function getZodiac(){

	var userdata = document.getElementById("userdata").value

  //var usersdata = userdata.toLowerCase();
    //console.log(userdata);
    //console.log("user sign is: " + userdata.value);
  // loop through array one at a time
	for(var i = 0; i < zodiac.length; i = i + 1) {
    //console.log("users sign lowercase is: " + userdata.value.toLowerCase());
    //console.log("current sign in loop is: " + zodiac[i].sign);
    console.log(userdata.toLowerCase())
	if(userdata.toLowerCase() === zodiac[i].sign) {
    console.log("if statement ran");

		document.getElementById("image").src = zodiac[i].image;
		document.getElementById("text").textContent = zodiac[i].text;
    return;
    
		}  else {
		console.log("no matches were found, user failed to type in a correct zodiac sign");

		document.getElementById("text").textContent = "Not one of the signs. Try again!";
		document.getElementById("image").src = "";
   }
 }
};
