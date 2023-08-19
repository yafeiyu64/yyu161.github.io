/*
    WEB222 Final Assessment
    Student Name: Yafei Yu
    Student Number: 128368222
    Section: NFF
    Honesty Statement: 
    I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any 
    other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no 
    part of this assignment has been distributed to other students.
*/

window.onload = function ()
{
	var oH2 = document.getElementsByTagName("h2")[0];
	var oUl = document.getElementsByTagName("ul")[0];
	oH2.onclick = function ()
	{
		var style = oUl.style;
		style.display = style.display == "block" ? "none" : "block";
		oH2.className = style.display == "block" ? "open" : ""
	}
}

function toggleHourlyRateInput() {
    const hiringRadio = document.getElementById('hiringRadio');
    const hourlyRateInput = document.getElementById('hourlyRateInput');
    hourlyRateInput.style.display = hiringRadio.checked ? 'block' : 'none';
  }

