let submit = document.getElementById("submit");
// inputs
let name_inp = document.getElementById("name_inp");
let proffesion_inp = document.getElementById("proffesion_inp");
let address_inp = document.getElementById("address_inp");
let tel_inp = document.getElementById("tel_inp");
let email_inp = document.getElementById("email_inp");
let skils_inp = document.getElementById("skils_inp");
let profile_detail_inp = document.getElementById("profile_detail_inp");
let clg_inp = document.getElementById("clg_inp");
let clg_year_inp = document.getElementById("clg_year_inp");
let clg_program_inp = document.getElementById("clg_program_inp");
let clg_detail_inp = document.getElementById("clg_detail_inp");
let company_name_inp = document.getElementById("company_name_inp");
let company_year_inp = document.getElementById("company_year_inp");
let company_position_inp = document.getElementById("company_position_inp");
let company_details_inp = document.getElementById("company_details_inp");
let my_skills_level = document.getElementById("my_skills_level");
let another_sec_name = document.getElementById("another_sec_name");
let another_sec_text = document.getElementById("another_sec_text");
// Details
let my_name = document.getElementById("my_name");
let my_address = document.getElementById("my_address");
let my_tel = document.getElementById("my_tel");
let my_email = document.getElementById("my_email");
let my_skills = document.getElementById("my_skills");
let my_profession = document.getElementById("my_profession");
let Profile_details = document.getElementById("Profile_details");
let my_experience = document.getElementById("my_experience");
let my_clg = document.getElementById("my_clg");
let my_clg_year = document.getElementById("my_clg_year");
let my_clg_program = document.getElementById("my_clg_program");
let my_clg_details = document.getElementById("my_clg_details");
let company_name = document.getElementById("company_name");
let company_year = document.getElementById("company_year");
let company_position = document.getElementById("company_position");
let company_details = document.getElementById("company_details");

function my_name_change() {
  my_name.innerText = name_inp.value;
}
function my_prof_change() {
  my_profession.innerText = proffesion_inp.value;
}
function my_tel_change() {
  my_tel.innerText = tel_inp.value;
}
function my_email_change() {
  my_email.innerText = email_inp.value;
}
function my_address_change() {
  my_address.innerText = address_inp.value;
}
function my_profile_detail_change() {
  Profile_details.innerText = profile_detail_inp.value;
}
function my_clg_name_change() {
  my_clg.innerText = clg_inp.value;
}
function my_clg_year_change() {
  my_clg_year.innerText = clg_year_inp.value;
}
function my_clg_field_change() {
  my_clg_program.innerText = clg_program_inp.value;
}
function clg_detail_change() {
  my_clg_details.innerText = clg_detail_inp.value;
}
function my_comp_name_change() {
  company_name.innerText = company_name_inp.value;
}
function my_comp_pos_change() {
  company_position.innerText = company_position_inp.value;
}
function my_comp_year_change() {
  company_year.innerText = company_year_inp.value;
}
// ----------------------------FOR ADDIND ANOTEHR SECTION----------------------------------
function another_sec_added() {
  let another_sec_added_div = document.getElementById("another_sec_added_div");
  if (another_sec_name.value != "" && another_sec_text.value != "") {
    another_sec_added_div.innerHTML += `<div class="another_sec_added_data"><br/>
    <h3 class="another_sec_label">${another_sec_name.value}</h3><br>
  <p>${another_sec_text.value}</p>
  <button type="button" id="another_sec_btn" onclick="this.parentElement.remove()">&#10005;</button>
  </div>
  `;
    another_sec_name.value = "";
    another_sec_text.value = "";
    another_sec_name.focus();
  } else {
    alert("Make sure that you added text in a name and text field");
  }
}
// Use for add image in a file
function previewimage() {
  var file = document.getElementById("file").files;
  if (file.length > 0) {
    var fileReader = new FileReader();
    console.log(fileReader);
    fileReader.onload = function (event) {
      document
        .getElementById("preveiw")
        .setAttribute("src", event.target.result);
    };
    fileReader.readAsDataURL(file[0]);
  }
}

// For download as a PDF 1
function generatePDF() {
  const content = document.getElementById("content");
  // Configuration for html2pdf.js
  const pdfOptions = {
    margin: 5,
    filename: "content.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a3", orientation: "portrait" },
  };
  // Generate the PDF using html2pdf.js
  html2pdf().from(content).set(pdfOptions).save();
}

function add_img() {
  let a = document.getElementById("image_add");
  let b = document.getElementById("preveiw");
  let c = document.getElementById("remove_img");
  if (a.style.display == "none") {
    a.style.display = "block";
    b.style.display = "block";
    c.innerText = "-- Remove image";
  } else {
    c.innerText = "+ Add image";
    b.style.display = "none";
    a.style.display = "none";
  }
}

function details_remove() {
  let a = document.getElementById("detaling_remove_btn");
  let b = document.getElementById("first_details_div");
  let c = document.getElementById("detail_add_remove");

  if (b.style.display == "none") {
    a.innerText = "-- Remove Details";
    b.style.display = "block";
    c.style.display = "block";
  } else {
    a.innerText = "+ Add Details";
    b.style.display = "none";
    c.style.display = "none";
  }
}

function skills__add_remove() {
  let a = document.getElementById("skill_add_btn");
  let b = document.getElementById("my_skils_div");
  let c = document.getElementById("add_skills_div");

  if (b.style.display == "none") {
    a.innerText = "-- Remove skills";
    b.style.display = "block";
    c.style.display = "block";
  } else {
    a.innerText = "+ Add skills";
    b.style.display = "none";
    c.style.display = "none";
  }
}

function language_add_remove() {
  let a = document.getElementById("lang_add_btn");
  let b = document.getElementById("lang_add_div");
  let c = document.getElementById("add_to_lang_div");

  if (b.style.display == "none") {
    a.innerText = "-- Remove languages";
    b.style.display = "block";
    c.style.display = "block";
  } else {
    a.innerText = "+ Add languages";
    b.style.display = "none";
    c.style.display = "none";
  }
}
function add_rem_educ() {
  let a = document.getElementById("educ_add_rem_btn");
  let b = document.getElementById("educ_add_div");
  let c = document.getElementById("educ_added_div");

  if (b.style.display == "none") {
    a.innerText = "-- Remove Education";
    b.style.display = "block";
    c.style.display = "block";
  } else {
    a.innerText = "+ Add Education";
    b.style.display = "none";
    c.style.display = "none";
  }
}
function comp_detail_add() {
  let a = document.getElementById("add_comp_btn");
  let b = document.getElementById("ex_comp_inps");
  let c = document.getElementById("emply_his_detail");

  if (b.style.display == "none") {
    a.innerText = "-- Remove Employment history";
    b.style.display = "block";
    c.style.display = "block";
  } else {
    a.innerText = "+ Add Employment history";
    b.style.display = "none";
    c.style.display = "none";
  }
}

// download pdf 2
// $(document).ready(function ($) {
//   $(document).on("click", ".btn_print", function (event) {
//     event.preventDefault();
//     var element = document.getElementById("content");
//     var opt = {
//       margin: 1,
//       filename: "pageContent.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };
//     // New Promise-based usage:
//     html2pdf().set(opt).from(element).save();
//   });
// });

// -------------- SKILLS ADD EDIT AND DELETE ----------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const skils_inp = document.getElementById("skils_inp");
  const add_skills_btn = document.getElementById("add_skills_btn");
  const my_skills = document.getElementById("my_skills");
  const SkillsArray = [];
  add_skills_btn.addEventListener("click", function () {
    const dataText = skils_inp.value;
    if (dataText.trim() !== "") {
      SkillsArray.push(dataText);
      console.log(SkillsArray);
      displayData_of_skills();
      skils_inp.value = "";
      skils_inp.focus();
    }
  });
  function displayData_of_skills() {
    my_skills.innerHTML = "";
    for (let i = 0; i < SkillsArray.length; i++) {
      const dataItem = document.createElement("li");
      // dataItem.classList.add("li_flex");
      dataItem.innerHTML = `
              <span>${SkillsArray[i]}</span>
              <div><button class="edit_skills_btn e_btn">&#9998;</button>
              <button class="delete_skills_btn d_btn">&#10005;</button></div>
          `;
      my_skills.appendChild(dataItem);
      const edit_skills_btn = dataItem.querySelector(".edit_skills_btn");
      const delete_skills_btn = dataItem.querySelector(".delete_skills_btn");

      edit_skills_btn.addEventListener("click", function () {
        const newDataText = prompt("Edit data:", SkillsArray[i]);
        if (newDataText !== null) {
          SkillsArray[i] = newDataText;
          displayData_of_skills();
        }
      });
      delete_skills_btn.addEventListener("click", function () {
        SkillsArray.splice(i, 1);
        displayData_of_skills();
      });
    }
  }
});

// -------------- COMAPNY DETAILS ADD EDIT AND DELETE ----------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const company_details_inp = document.getElementById("company_details_inp");
  const add_company_detail_btn = document.getElementById(
    "add_company_detail_btn"
  );
  const company_list_added = document.getElementById("company_list_added");
  const companyArray = [];
  add_company_detail_btn.addEventListener("click", function () {
    const dataText = company_details_inp.value;
    if (dataText.trim() !== "") {
      companyArray.push(dataText);
      displayData_of_company_details();
      company_details_inp.value = "";
      company_details_inp.focus();
    }
  });
  function displayData_of_company_details() {
    company_list_added.innerHTML = "";
    for (let i = 0; i < companyArray.length; i++) {
      const dataItem = document.createElement("li");
      // dataItem.classList.add("li_flex");
      dataItem.innerHTML = `
              <span>${companyArray[i]}</span>
              <button class="edit_company_btn e_btn">&#9998;</button>
              <button class="delete_company_btn d_btn">&#10005;</button>
          `;
      company_list_added.appendChild(dataItem);
      const edit_company_btn = dataItem.querySelector(".edit_company_btn");
      const delete_company_btn = dataItem.querySelector(".delete_company_btn");
      edit_company_btn.addEventListener("click", function () {
        const newDataText = prompt("Edit data:", companyArray[i]);
        if (newDataText !== null) {
          companyArray[i] = newDataText;
          displayData_of_company_details();
        }
      });
      delete_company_btn.addEventListener("click", function () {
        companyArray.splice(i, 1);
        displayData_of_company_details();
      });
    }
  }
});

// -------------- LANGUAGES ADD EDIT AND DELETE ----------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const lang_inp = document.getElementById("lang_inp");
  const add_lang_btn = document.getElementById("add_lang_btn");
  const lang_list = document.getElementById("lang_list");
  const angArray = [];
  add_lang_btn.addEventListener("click", function () {
    const dataText = lang_inp.value;
    if (dataText.trim() !== "") {
      angArray.push(dataText);
      displayData_of_lang();
      lang_inp.value = "";
      lang_inp.focus();
    }
  });
  function displayData_of_lang() {
    lang_list.innerHTML = "";
    for (let i = 0; i < angArray.length; i++) {
      const dataItem = document.createElement("li");
      // dataItem.classList.add("li_flex");
      dataItem.innerHTML = `
              <span>${angArray[i]}</span>
              <button class="edit_lang_btn e_btn">&#9998;</button>
              <button class="delete_lang_btn d_btn">&#10005;</button>
          `;
      lang_list.appendChild(dataItem);
      const edit_lang_btn = dataItem.querySelector(".edit_lang_btn");
      const delete_lang_btn = dataItem.querySelector(".delete_lang_btn");
      edit_lang_btn.addEventListener("click", function () {
        const newDataText = prompt("Edit data:", angArray[i]);
        if (newDataText !== null) {
          angArray[i] = newDataText;
          displayData_of_lang();
        }
      });
      delete_lang_btn.addEventListener("click", function () {
        angArray.splice(i, 1);
        displayData_of_lang();
      });
    }
  }
});
