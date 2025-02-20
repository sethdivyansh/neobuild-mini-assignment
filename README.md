# Applicant Resume Processing API

This project provides an API for processing resumes from PDF files. It extracts structured data via an LLM (Gemini AI) and stores applicant information in MongoDB. It also supports searching for applicants.

## Features

- **User Authentication:** Login endpoint that issues a JWT.
- **Resume Processing:** Extract structured applicant data from a resume PDF.
- **Applicant Search:** Search applicants by name (with decryption).

## Technologies Used

- **Backend Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **AI Integration:** GoogleGenerativeAI (Gemini)
- **Utilities:** CryptoJS for decryption, pdf-text-reader for PDF extraction

## Project Structure

```
/neobuild-mini-assignment
├── src
│   ├── controllers
│   │   ├── authController.ts
│   │   ├── applicantController.ts
│   │   └── searchController.ts
│   ├── middleware
│   │   └── authMiddleware.ts
│   ├── models
│   │   └── applicantsModel.ts
│   ├── routes
│   │   └── userRoutes.ts
│   └── utils
│       ├── decrypt.ts
│       └── pdfReader.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Configure environment variables in a `.env` file (e.g., `JWT_SECRET_KEY`, `API_KEY`, `ENCRYPTION_SECRET`, MongoDB URI).

## Running the Application

Start the server:

```
npm run dev
```

The API will be accessible at `http://localhost:<PORT>`.

## API Endpoints

- **POST /login**  
  Authenticate user and receive a JWT.

- **POST /processApplicantData**  
  Protected route. Provide a PDF URL in the request body. The API will extract and store resume data.

- **GET /applicants/search?name=<encryptedName>**  
  Protected route. Search for applicants by name.

## Notes

- Ensure that all required environment variables are correctly set.
- The AI model returns a JSON formatted response that must follow the expected schema.
