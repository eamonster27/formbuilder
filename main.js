// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
formData[0].label // this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character

// Looping
// Sample of how to loop over the formData
for(let i=0; i<formData.length; i++){

  // Check your dev tools console for what the items in formData have
  console.log(formData[i])

}

// -------- Your Code Goes Here --------
for(let i = 0; i <formData.length; ++i){

  if(formData[i].type === "select"){
    var html = `
    <select id="${formData[i].id}">
      <option class="options" selected="true" disabled="disabled">${formData[i].label}</option>
    </select>`
    document.querySelector(".fields").insertAdjacentHTML('beforeend', html);

    for(let j = formData[i].options.length -1 ; j >= 0; --j){
      var options = `<option value=${formData[i].options[j].value}> ${formData[i].options[j].label}</option>`
      document.querySelector(".options").insertAdjacentHTML('afterend', options);
    }
  }
  else if(formData[i].type === "textarea"){
    var html = `
    <textarea id=${formData[i].id} rows="8" cols="80" placeholder="${formData[i].label}"></textarea>`

    document.querySelector(".fields").insertAdjacentHTML('beforeend', html);
  }
  else {
    var html = `
    <input type="${formData[i].type}" id="${formData[i].id}" placeholder="${formData[i].label}">`

    document.querySelector(".fields").insertAdjacentHTML('beforeend', html);
  }
}
