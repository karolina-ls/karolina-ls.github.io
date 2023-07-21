//Hide object and display smashedObject
function smashObject(objectId, smashedObjectId)
{
  let object = document.getElementById(objectId)
  let smashedObject = document.getElementById(smashedObjectId)
  
  object.style.display ='none';
  smashedObject.style.display = 'inline'
}

//assign parameters to resetImage function
function resetSmashed() {
  resetImage('car', 'smashedCar');
  resetImage('watermelon', 'smashedWatermelon');
  resetImage('cake', 'smashedCake');
}

//reverse of smashObject function
function resetImage(objectId, smashedObjectId) {
  let object = document.getElementById(objectId);
  let smashedObject = document.getElementById(smashedObjectId);

  object.style.display = 'inline';
  smashedObject.style.display = 'none';
}

function popOut(iconId)
{
  let icon = document.getElementById(iconId);
  icon.style.transform="scale(1.2)";
}

function resetPop(iconId)
{
  let icon = document.getElementById(iconId);
  icon.style.transform="scale(1)";
}