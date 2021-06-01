// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: Jun 2021
// This is the Quere-String

"use strict"

window.onload = function() {
  //input
  let params = new URLSearchParams(document.location.search)
  let radius = params.get('r')

  // process
  let volume = 4 / 3 * 3.1415926535897932384626433 * (radius * radius * radius)
  let dimensions = "<u>\n<li>radius = " + radius + " cm</li>\n</n>"

  //output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Volume≈ ' + volume.toFixed(2) + 'cm³'
}

function enterClicked() {

  //input
  let radius = parseFloat(document.getElementById("radius").value)
  // process
  let volume = 4 / 3 * 3.1415926535897932384626433 * radius * radius * radius

  //output
  document.getElementById('dimensions').innerHTML = "<u>\n<li>radius = " + radius + " cm</li>\n</n>"
  document.getElementById('area').innerHTML = 'Volume≈ ' + volume.toFixed(2) + 'cm³'
}