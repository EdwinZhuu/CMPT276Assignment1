function weightscore(){
  var x = document.getElementsByClassName("weightscores")
}

function calculatepercentage(variable){
  var x = variable.parentElement.parentElement.children
  var child = x[3].childNodes
  var firstinput = child[0].valueAsNumber
  var secondinput = child[3].valueAsNumber
  if (!isNaN(firstinput) && !isNaN(secondinput)){
    x[4].children[0].innerHTML = firstinput/secondinput
  } else {
    x[4].children[0].innerHTML = ""
  }
}

function meangrades(){
  var x = document.getElementsByClassName('percentage')
  var count = 0
  var total = 0
  for (var i = 0; i<4; i++){
    if (x[i].innerHTML != ""){
      count = count + 1
      total = total + Number(x[i].innerHTML)
    }
  }
  total = total/count
  document.getElementById('result').innerHTML = total*100 + '/100'
}

function weightedgrades(){
  var weights = document.getElementsByClassName('weightscores')
  var percentages = document.getElementsByClassName('percentage')
  var total = 0
  var count = 0
  for (var i = 0; i<4; i++){
    if (percentages[i].innerHTML != ""){
      if (weights[i].valueAsNumber != ""){
        count = count + weights[i].valueAsNumber
        total = total + (Number(percentages[i].innerHTML) * weights[i].valueAsNumber)
      }
    }
  }
  total = total/count
  document.getElementById('result').innerHTML = total*100 + '/100'
}
