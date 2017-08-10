// var to store horoscope information

 var zodiac  = [
   {
     sign: "aries",
     text: "The Good: Energetic, encouraging, unstoppable, bold, devoted, heroic, caring. The Bad: Proud, self-centered, impulsive, bossy, stubborn, reckless, jealous",
     image:"img/aries.jpg"

   },
   {
     sign: "aquarius",
     text: "The Good: Communicative, original, open-minded, fair, logical, inviting. The Bad: Guarded, detached, self-destructive, out-of-touch, irrational, desperate",
     image:"img/aquarius.jpg"
   },
   {
     sign: "libra",
     text: "The Good: Charming, lovable, fair, sincere, sharing, hopelessly romantic. The Bad: Vain, indecisive, melodramatic, manipulative, spoiled, delusional",
     image: "img/libra.jpg"
   },
   {
     sign: "taurus",
     text: "The Good: Patient, organized, supportive, romantic, careful, dedicated. The Bad: Overindulgent, stubborn, lazy, vain, cheap, too cautious",
     image: "img/taurus.jpg"
   },
   {
     sign: "scorpio",
     text: "The Good: Magnetic, passionate, loyal, protective, trendsetting, brave. The Bad: Obsessive, possessive, jealous, secretive, vengeful, manipulative",
     image: "img/scorpio.jpg"
   },
   {
     sign: "gemini",
     text: "The Good: Fascinating, original, resourceful, charming, wise, adventurous. The Bad: Restless, distracted, two-faced, judgmental, depressed, overwhelmed",
     image: "img/gemini.jpg"
   },
   {
     sign: "sagittarius",
     text: "The Good:  Honest, fair-minded, inspiring, optimistic, enthusiastic, encouraging, dedicated. The Bad: Argumentative, reckless, flaky, preachy, tactless, overconfident",
     image: "img/sagittaruis.jpg"
   },
   {
     sign: "cancer",
     text: "The Good: Helpful, patient, compassionate, nurturing, romantic, creative. The Bad: Gossipy, clique-y, isolated, uncommunicative, hypersensitive, overly competitive",
     image: "img/cancer.jpg"
   },
   {
     sign: "capricorn",
     text: "The Good: Loyal, family-minded, hardworking, devoted, honest, fearless. The Bad: Pessimistic, unforgiving, cold, materialistic, snobbish, hopeless",
     image: "img/capircorn.jpg"
   },
   {
     sign: "leo",
     text: "The Good: Courageous, kind, generous, loyal, protective, nakedly honest, entertaining. The Bad: Arrogant, wasteful, sloppy, cold-hearted, jealous, aggressive",
     image: "img/leo.jpg"
   },
   {
     sign: "virgo",
     text: "The Good:  Dedicated, resourceful, helpful, hardworking, witty, practical. The Bad: Preachy, self-destructive, overwhelmed, self-pitying, uptight, critical",
     image: "img/virgo.jpg"
   },
   {
     sign: "pisces",
     text: "The Good:  Romantic, helpful, wise, comforting, imaginative. The Bad: Gullible, self-pitying, out of touch with reality, self-destructive, clingy",
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
		}
   }
 };
