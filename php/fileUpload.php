<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["uploadedFile"])) {
    $uploadDir = "uploads"; // Directory to save uploaded files
    $uploadedFile = $uploadDir . basename($_FILES["uploadedFile"]["name"]);

    // Check if file already exists
    if (file_exists($uploadedFile)) {
        echo "File with this name already exists.";
    } else {
        // Save the uploaded file to the uploads directory
        if (move_uploaded_file($_FILES["uploadedFile"]["tmp_name"], $uploadedFile)) {
            echo "File ". htmlspecialchars(basename($_FILES["uploadedFile"]["name"])). " has been successfully uploaded.";
        } else {
            echo "File upload failed.";
        }
    }
} else {
    echo "Invalid server requests.";
}
?>
