# JourneyOS

A personal journal application built with Next.js and Firebase.

## Project Structure

```
JourneyOS/
├── journalwebsite/     # Next.js frontend application
├── journalbackend/     # Firebase backend functions
└── style ideas/        # Design assets and ideas
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase CLI (for backend deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/daniflicks/JourneyOS.git
cd JourneyOS
```

2. Install dependencies for both frontend and backend:
```bash
npm run install-all
```

### Development

#### Frontend Development
Run the Next.js development server:
```bash
npm run dev
```

The application will be available at `https://localhost:3000`

#### Backend Development
To serve Firebase functions locally:
```bash
npm run serve-backend
```

### Building and Deployment

#### Frontend
```bash
npm run build
npm run start
```

#### Backend
```bash
npm run deploy-backend
```

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run start` - Start frontend production server
- `npm run lint` - Run ESLint on frontend
- `npm run install-all` - Install dependencies for both frontend and backend
- `npm run deploy-backend` - Deploy Firebase functions
- `npm run serve-backend` - Serve Firebase functions locally

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Firebase Functions, Firestore
- **Authentication**: Firebase Auth
- **Deployment**: Vercel (frontend), Firebase (backend)

## Contributing

This is a personal project, but feel free to fork and adapt for your own use.

## License

MIT