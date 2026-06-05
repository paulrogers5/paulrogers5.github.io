$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 620, 900, 20);
createPlatform(200, 500, 132, 100, "red");
createPlatform(500, 400, 100, 10, "green");
createPlatform(800, 300, 2, 400, "red");
createPlatform(800, 100, 2, 100, "blue");
    // TODO 3 - Create Collectables
createCollectable("steve", 1000, 510);
createCollectable("diamond", 1000, 530, 0.5, 0.7);
createCollectable("diamond", 900, 540, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("bottom", 300, 600);
createCannon("right", 300, 1000);
createCannon("right", 600, 3000);
 createCannon("right", 700, 4000);
 createCannon("left", 350, 5000);
createCannon("left", 250, 6000);
createCannon("left", 150, 8000);
createCannon("left", 50, 2000);
createCannon("left", 450, 2435);
createCannon("top", 750, 2435);
createCannon("top", 950, 2435);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
