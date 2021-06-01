// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: Jun 2021
// This is the Quere-String

"use strict"

window.onload = function() {
  //input
  const params = new URLSearchParams(document.location.search)
  const radius = params.get('r')

  // process
  const volume = 4 / 3 * 3.1415926535897932384626433 * (radius * radius * radius)
  const dimensions = "<u>\n<li>radius = " + radius + " cm</li>\n</n>"

  //output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Volume≈ ' + volume.toFixed(2) + 'cm³'
}