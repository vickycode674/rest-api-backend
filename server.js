const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File upload setup
const upload = multer();

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the BFHL API! Use /bfhl for POST and GET requests.');
});

// POST endpoint
app.post('/bfhl', upload.single('file'), (req, res) => {
    const { userId, email, rollNumber, numbers, alphabets } = req.body;

    // Validate and prepare the response
    const userIdFormatted = `john_doe_17091999`; // Example format
    const isSuccess = true; // Example status

    // Handle file validity
    const file = req.file;
    let fileValid = false;
    let fileMimeType = null;
    let fileSizeKb = 0;

    if (file) {
        fileValid = true;
        fileMimeType = file.mimetype;
        fileSizeKb = (file.size / 1024).toFixed(2); // Size in KB
    }

    // Prepare the response
    const response = {
        is_success: isSuccess,
        user_id: userIdFormatted,
        college_email: email,
        college_roll_number: rollNumber,
        numbers: Array.isArray(numbers) ? numbers : [],
        alphabets: Array.isArray(alphabets) ? alphabets : [],
        highest_lowercase: alphabets ? Math.max(...alphabets.filter(c => c.match(/[a-z]/))) : null,
        file: {
            file_valid: fileValid,
            file_mime_type: fileMimeType,
            file_size_kb: fileSizeKb
        }
    };

    res.json(response);
});

const cors = require('cors');
app.use(cors());


// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
