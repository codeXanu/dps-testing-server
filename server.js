const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());




// Multer setup (memory storage: files in memory, not disk)
const upload = multer({ storage: multer.memoryStorage() });

// Accept multiple file fields (for cv and coverLetter, etc)
const cpUpload = upload.fields([
  { name: 'cv', maxCount: 1 },
  { name: 'coverLetter', maxCount: 1 },
  // you can add more if you expand your form
]);

app.post('/api/raw/applications', cpUpload, (req, res) => {
  // Log all non-file form fields
  console.log('Received fields:', req.body);

  // Log the uploaded files (if any sent)
  console.log('Received files:', req.files);

  // Example: To see what you got in location fields (array)
  console.log('Locations array:', req.body.locations);

  // Example: To see the uploaded CV file buffer as bytes
  if (req.files && req.files.cv && req.files.cv[0]) {
    console.log('CV file:');
    console.log(' - originalname:', req.files.cv[0].originalname);
    console.log(' - size:', req.files.cv[0].size, 'bytes');
    // console.log(' - content buffer:', req.files.cv[0].buffer); // uncomment to see raw bytes
  }

  // Respond to client
  res.status(204).json({ ok: true, message: "Application received! Check your server console for logs." });
});




// Sample data for /api/raw/tracks
const tracks = [
  {
    "id": "5b252f20-a06f-11ec-b909-0242ac120002",
    "name": "agile coach",
    "handle": "AC",
    "operatorIds": []
  },
  {
    "id": "4e789226-a06f-11ec-b909-0242ac120002",
    "name": "Software Engineer",
    "handle": "SE",
    "operatorIds": []
  },
  {
    "id": "5f45c70e-a06f-11ec-b909-0242ac120002",
    "name": "AI Engineer",
    "handle": "AI",
    "operatorIds": []
  },
  {
    "id": "89ddc556-a070-11ec-b909-0242ac120002",
    "name": "Product Marketing & Communication Manager",
    "handle": "PMC",
    "operatorIds": []
  },
  {
    "id": "535470bc-a06f-11ec-b909-0242ac120002",
    "name": "Product Manager",
    "handle": "PM",
    "operatorIds": []
  },
  {
    "id": "56061aea-a06f-11ec-b909-0242ac120002",
    "name": "Interaction Designer",
    "handle": "IXD",
    "operatorIds": []
  }
];

// Sample data for /api/raw/batches
const batches = [
  {
    "id": "dfef6438-a06e-11ec-b909-0242ac120002",
    "name": "17",
    "startDate": "2022-09-12T00:00:00Z",
    "endDate": "2022-12-02T00:00:00Z",
    "applicationStartDate": "2022-01-01T00:00:00Z",
    "applicationEndDate": "2022-06-29T00:00:00Z",
    "teamIds": []
  },
  {
    "id": "e2dc73ac-a06e-11ec-b909-0242ac120002",
    "name": "18",
    "startDate": "2023-01-09T00:00:00Z",
    "endDate": "2023-03-31T00:00:00Z",
    "applicationStartDate": "2022-06-01T00:00:00Z",
    "applicationEndDate": "2022-10-19T00:00:00Z",
    "teamIds": []
  },
  {
    "id": "e8fbd746-a06e-11ec-b909-0242ac120002",
    "name": "19",
    "startDate": "2023-05-08T00:00:00Z",
    "endDate": "2023-07-28T00:00:00Z",
    "applicationStartDate": "2022-09-19T00:00:00Z",
    "applicationEndDate": "2023-03-01T00:00:00Z",
    "teamIds": []
  },
  {
    "id": "dc226c60-a06e-11ec-b909-0242ac120002",
    "name": "16",
    "startDate": "2022-05-09T00:00:00Z",
    "endDate": "2022-07-29T00:00:00Z",
    "applicationStartDate": "2021-10-01T00:00:00Z",
    "applicationEndDate": "2022-03-01T00:00:00Z",
    "teamIds": [
      "c4621946-c99f-40a8-b9c6-f01d577cda03"
    ]
  },
  {
    "id": "ebc98856-a06e-11ec-b909-0242ac120002",
    "name": "20",
    "startDate": "2023-09-11T00:00:00Z",
    "endDate": "2023-12-01T00:00:00Z",
    "applicationStartDate": "2023-02-01T00:00:00Z",
    "applicationEndDate": "2023-06-21T23:59:59Z",
    "teamIds": []
  },
  {
    "id": "e490e642-712d-4cf3-8119-5e68dffab995",
    "name": "21",
    "startDate": "2024-02-26T00:00:00Z",
    "endDate": "2024-05-17T00:00:00Z",
    "applicationStartDate": "2023-05-01T00:00:00Z",
    "applicationEndDate": "2023-11-17T23:59:59Z",
    "teamIds": []
  },
  {
    "id": "e0d14439-b287-4c3d-ae64-ac11334dbd76",
    "name": "23",
    "startDate": "2025-03-10T00:00:00Z",
    "endDate": "2025-05-30T00:00:00Z",
    "applicationStartDate": "2024-04-10T00:00:00Z",
    "applicationEndDate": "2024-12-04T23:59:59Z",
    "teamIds": []
  },
  {
    "id": "712cd95d-5154-4375-baee-f2a94ac28493",
    "name": "22",
    "startDate": "2024-09-09T00:00:00Z",
    "endDate": "2024-11-29T00:00:00Z",
    "applicationStartDate": "2023-10-11T00:00:00Z",
    "applicationEndDate": "2024-07-01T23:59:59Z",
    "teamIds": []
  },
  {
    "id": "2484cefd-f4e4-4063-ad59-977cf67f303b",
    "name": "24",
    "startDate": "2025-09-08T00:00:00Z",
    "endDate": "2025-11-28T00:00:00Z",
    "applicationStartDate": "2024-11-11T00:00:00Z",
    "applicationEndDate": "2025-06-18T23:59:59Z",
    "teamIds": []
  },
  {
    "id": "d510351b-1209-4bf1-b8d9-1d8d09521c55",
    "name": "25",
    "startDate": "2026-03-09T00:00:00Z",
    "endDate": "2026-05-22T00:00:00Z",
    "applicationStartDate": "2025-05-11T00:00:00Z",
    "applicationEndDate": "2025-12-03T23:59:59Z",
    "teamIds": []
  }
];

// Routes
app.get('/api/raw/tracks', (req, res) => {
  res.json(tracks);
});

app.get('/api/raw/batches', (req, res) => {
  res.json(batches);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
