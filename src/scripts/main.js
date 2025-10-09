function populateFileListWithIcons() {
  fetch("/api/v1/view")
    .then((response) => response.json())
    .then((data) => {
      const fileList = document.getElementById("fileList");
      fileList.innerHTML = "";

      data.files.forEach((fileName) => {
        const listItem = document.createElement("li");
        listItem.className =
          "list-group-item d-flex justify-content-between align-items-center";

        const fileExtension = fileName.split(".").pop();

        const iconSpan = document.createElement("span");
        iconSpan.className = "me-3";
        iconSpan.innerHTML = getFileIconHTML(fileExtension);

        const fileLink = document.createElement("a");
        fileLink.href = `/uploads/${fileName}`;
        fileLink.textContent = fileName;

        listItem.appendChild(iconSpan);
        listItem.appendChild(fileLink);

        fileList.appendChild(listItem);
      });
    })
    .catch((error) => console.error(error));
}

function getFileIconHTML(fileExtension) {
  const iconClasses = {
    pdf: "far fa-file-pdf",
    doc: "far fa-file-word",
    docx: "far fa-file-word",
    xls: "far fa-file-excel",
    xlsx: "far fa-file-excel",
    ppt: "far fa-file-powerpoint",
    pptx: "far fa-file-powerpoint",
    txt: "far fa-file-alt",
    jpg: "far fa-file-image",
    jpeg: "far fa-file-image",
    png: "far fa-file-image",
    gif: "far fa-file-image",
    default: "far fa-file",
  };

  return `<i class="${
    iconClasses[fileExtension.toLowerCase()] || iconClasses["default"]
  }">
      </i>`;
}

function deleteFile() {
  const deleteForm = document.getElementById("deleteForm");
  const formData = new FormData(deleteForm);

  fetch(`/api/v1/delete/${formData.get("fileName")}`, {
    method: "DELETE",
  })
    .then((response) => response.text())
    .then((message) => {
      alert(message);
      populateFileListWithIcons();
      populateDeleteOptions();
    })
    .catch((error) => console.error(error));
}

function populateDeleteOptions() {
  fetch("/api/v1/view")
    .then((response) => response.json())
    .then((data) => {
      const fileSelect = document.getElementById("fileSelect");
      fileSelect.innerHTML = "";
      data.files.forEach((fileName) => {
        const option = document.createElement("option");
        option.value = fileName;
        option.textContent = fileName;
        fileSelect.appendChild(option);
      });
    })
    .catch((error) => console.error(error));
}

populateFileListWithIcons();
populateDeleteOptions();
