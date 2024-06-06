---
title: <% tp.file.title %>
draft: false
tags:
---
<%*
// Prompt the user for the number of forms
let numberOfForms = parseInt(await tp.system.prompt("How many forms do you need? (Enter a number between 1 and 10)"), 10);

// Validate the input to ensure it's within the allowed range
if (numberOfForms < 1 || numberOfForms > 10) {
    console.error("Invalid input. Please enter a number between 1 and 10.");
    return;
}

// Generate the formNames array based on the user's input
let formNames = [];
let requirements = [];
for (let i = 1; i <= numberOfForms; i++) {
    formNames.push(i === 1? "First" : i === 2? "Second" : i === 3? "Third" : i === 4? "Fourth" : i === 5? "Fifth" : i === 6? "Sixth" : i === 7? "Seventh" : i === 8? "Eighth" : i === 9? "Ninth" : "Tenth");
}

// Now proceed with prompting for each form name and storing them
let forms = [];
for (let i = 0; i < formNames.length; i++) {
    let formPrompt = await tp.system.prompt(`${formNames[i]} Form Name`);
    let form = `${formNames[i]} Form: ${formPrompt}`;
    forms.push(form);

	if (i > 0) {
        let prevReq = requirements[i - 1];
        let newReq = prevReq + 5;
        requirements.push(newReq);
    } else {
        // For the first form, set the requirement to a starting value (e.g., 10)
        requirements.push(10);
    }
}

// Generate the markdown table
let markdownTable = "| Form | Unlock Req. |\n|------|------|\n";
for (let i = 0; i < forms.length; i++) {
    markdownTable += `| [[#${forms[i]}]] | ${requirements[i]}\n`;
}

let headers = "";
for (let i = 0; i < forms.length; i++) {
    headers += `## ${forms[i]}\n\n`;
    headers += "TBD.\n\n";
    headers += "**Buffs**\n";
    headers += "- Preformed at +x Swing SPD\n";
    headers += "- Preformed at +x ATK SPD\n\n";
    headers += "**Cost**\n";
    headers += "- x STAM\n\n";
}
%>
---
# <% tp.file.title %> Overview
TBD.
# Mastery

<% markdownTable %> 
# Forms

<% headers %>