# L&D Pools Website

A futuristic pool maintenance website for **L&D Pools** in South Padre Island, built with React and Node.js.

## Tech Stack

- **Frontend:** React 19, Vite 8, React Router, Framer Motion, Lucide Icons
- **Backend:** Node.js, Express
- **Design:** Futuristic dark theme with cyan/teal accents, glassmorphism, and smooth animations

## Getting Started

### Install Dependencies

```bash
# Install all dependencies
cd client && npm install
cd ../server && npm install
```

### Development

Run both servers simultaneously in separate terminals:

```bash
# Terminal 1 - Frontend (port 3000)
cd client && npm run dev

# Terminal 2 - Backend (port 5000)
cd server && npm start
```

### Production Build

```bash
cd client && npm run build
cd ../server && node index.js
```

The Express server will serve the built React app in production mode.

## Pages

- **Home** - Hero section, services overview, L&D promise, rental ready section, and gallery
- **Book Online** - Service cards with pricing and booking modal

## API Endpoints

- `GET /api/services` - Get all available services
- `POST /api/bookings` - Create a new booking
- `POST /api/contact` - Submit a contact inquiry
