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
    if (x[i].innerHTML != ''){
      count = count + 1
      total = total + Number(x[i].innerHTML)
    }
  }
  if (count == 0){
    document.getElementById('result').innerHTML = ''
  } else {
    total = total/count
    document.getElementById('result').innerHTML = total*100 + '/100'
  }
  document.getElementById('lettergrade').innerHTML = getlettergrade(total*100)
}

function weightedgrades(){
  var weights = document.getElementsByClassName('weightscores')
  var percentages = document.getElementsByClassName('percentage')
  var total = 0
  var count = 0
  for (var i = 0; i<4; i++){
    if (percentages[i].innerHTML != '' &&  !isNaN(weights[i].valueAsNumber)){
      count = count + weights[i].valueAsNumber
      total = total + (Number(percentages[i].innerHTML) * weights[i].valueAsNumber)
    }
  }
  if (count == 0){
    console.log(count)
    document.getElementById('result').innerHTML = ''
  } else {
    total = total/count
    document.getElementById('result').innerHTML = total*100 + '/100'
  }
  document.getElementById('lettergrade').innerHTML = getlettergrade(total*100)
}

function getlettergrade(percentage){
  if (percentage == ""){
    return ''
  } else if (percentage < 50){
    return 'F'
  } else if (percentage >= 50 && percentage < 55){
    return 'D'
  } else if (percentage >= 55 && percentage < 60){
    return 'C-'
  } else if (percentage >= 60 && percentage < 65){
    return 'C'
  } else if (percentage >= 65 && percentage < 70){
    return 'C+'
  } else if (percentage >= 70 && percentage < 75){
    return 'B-'
  } else if (percentage >= 75 && percentage < 80){
    return 'B'
  } else if (percentage >= 80 && percentage < 85){
    return 'B+'
  } else if (percentage >= 85 && percentage < 90){
    return 'A-'
  } else if (percentage >= 90 && percentage < 95){
    return 'A'
  } else {
    return 'A+'
  }
}

function resetboxes(){
  var weights = document.getElementsByClassName('weightscores')
  var scores = document.getElementsByClassName('scores')
  var percentage = document.getElementsByClassName('percentage')
  for (var i = 0; i<4; i++){
    if (!isNaN(weights[i].valueAsNumber)){
      weights[i].value = ''
    }
  }
  for (var x = 0; x<8; x++){
    if (!isNaN(scores[x].valueAsNumber)){
      scores[x].value = ''
      percentage[x].innerHTML = ''
    }
  }
  document.getElementById('result').innerHTML = ''
  document.getElementById('lettergrade').innerHTML = ''
}
