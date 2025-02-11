let credit = new Map();
credit.set("O", 10);
credit.set("A+", 9);
credit.set("A", 8);
credit.set("B+", 7);
credit.set("B", 6);
credit.set("C", 5);
document.querySelector("#calbutton").addEventListener("click", (e) => {
  let select = document.getElementsByName("grade");
  let check = false;
  for (let temp of select) {
    if (temp.value == "none") {
      check = true;
    }
  }
  if (check) {
    alert("Enter valid grade and CGPA");
  } else {
    let pcgpa = parseFloat(document.getElementsByName("pcgpa")[0].value);
    let pcredit = 107 + 24;
    let ncredit = 24;
    let mm = credit.get(select[0].value) * 3;
    let am = credit.get(select[1].value) * 3;
    let or = credit.get(select[2].value) * 3;
    let tqm = credit.get(select[3].value) * 3;
    let pe = credit.get(select[4].value) * 3;
    let oe = credit.get(select[5].value) * 3;
    let project = credit.get(select[6].value) * 3;
    let mmlab = credit.get(select[7].value) * 2;
    let amlab = credit.get(select[8].value) * 2;

    let sgpa = (
      (mm + am + or + tqm + pe + oe + project + mmlab + amlab) /
      ncredit
    ).toFixed(2);
    console.log(mm+" "+am+" "+or+" "+tqm+" "+pe+" "+oe+" "+project+" "+mmlab+" "+amlab);
    console.log("scgpa= " + sgpa);
    let cgpa = pcgpa * pcredit + sgpa * ncredit;
    cgpa = (cgpa / (pcredit + ncredit)).toFixed(2);
    console.log("cgpa= " + cgpa);
    document.querySelector(".sgpavalue").innerHTML = sgpa;
    document.querySelector(".cgpavalue").innerHTML = cgpa;
    document.querySelector(".overlay").classList.toggle("active");
  }
});

document.querySelector("#again").addEventListener("click", (e) => {
  document.querySelector(".overlay").classList.toggle("active");
});
