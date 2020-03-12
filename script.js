

// SH - You can change your background here!
setBackdropURL(
  "https://i.gifer.com/FXP9.gif"
);

// This creates the player image. You can modify it by using the player variable
// FOR EXAMPLE: player.x = 100 will set the player's x position to 100
var player = new Image({
  url: "https://hiddenpalace.org/w/images/9/9b/Teaser.png",
  width: 150,
  height: 75
});
var opponent = new Image({
  url:
    "https://cdn.glitch.com/4dde40c5-c4ea-43ae-9ceb-f0c1dc608774%2FPolice.png?v=1582659492796",
  width: 150,
  height: 150,
  angle: 270,
  x: -width /2
});
forever(() => {
  //opponent.x = opponent.x + 5;
  //player.x = player.x + 10;
});
// This detects keys being pressed. Add any keyboard input here!
onKeyDown(() => {
  // This checks IF the "A" key is being pressed. If it is, it decreases the player's x.
  // This will move the player to the left.
  if (keysDown.includes("A")) {
    player.x = player.x - 5;
  }

  // This checks IF the "D" key is being pressed. If it is, it increases the player's x.
  // This will move the player to the right.
  if (keysDown.includes("D")) {
    player.x = player.x + 5;
  }
  if (keysDown.includes("W")) {
    player.y = player.y + 5;
  }
  if (keysDown.includes("S")) {
    player.y = player.y - 5;
  }
  // SH - TO DO: add a check to see if the "W" key is being pressed.
  // If it is, increase the player's y.
  // This will move the player to the up.

  // SH - TO DO: add a check to see if the "D" key is being pressed.
  // If it is, decrease the player's y.
  // This will move the player to the down.
});
