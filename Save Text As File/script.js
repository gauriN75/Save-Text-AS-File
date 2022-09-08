const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener('change', () =>{
      // getting selcted option text
      let selectedOption = selectMenu.options[selectMenu,selectedIndex].text;
      saveBtn.innerHTML = `Save As ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener("click", () =>{
      const blob = new Blob([textarea.value], {type: selectMenu.value});
      // URL.createobject creates a url that represent passed object
      const fileUrl = URL.createObjectURL(blob);
      // creating <a> tag
      const link = document.createElement("a");
      // passing filename as download value of link
      link.download = fileNameInput.value;
      // passing fileURL as href value of link
      link.href = fileUrl;
      // clicking link so the file download
      link.click()

})

