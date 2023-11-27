function showContent(contentId) {
    var contents = document.querySelectorAll('.content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';
}

document.getElementById("fileUploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0]; // Get the uploaded file

    var fileInfo = document.getElementById("fileInfo");
    if (file) {
        var fileName = file.name;
        var fileSize = file.size;
        var fileType = file.type;

        // Display file information
        fileInfo.innerHTML = "<p>File name: " + fileName + "</p>" +
                             "<p>File size: " + fileSize + " bytes</p>" +
                             "<p>File type: " + fileType + "</p>";
    } else {
        fileInfo.textContent = "No file selected.";
    }
});