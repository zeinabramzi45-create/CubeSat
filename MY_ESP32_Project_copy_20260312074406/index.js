const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => res.send('Server is running!'));

app.post('/upload', upload.single('imageFile'), (req, res) => {
  console.log('Image received!');
  res.send('Image Uploaded Successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
