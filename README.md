https://getimagify.vercel.app Imagify - AI Text to Image Generator

Imagify is a modern, full-stack web application that enables users to generate high-quality images from text descriptions using advanced AI technology. The platform features secure authentication, a credit-based system, and seamless payment integration, providing a robust and scalable solution for creative professionals and enthusiasts.

---

## 📑 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🚀 Features
- **AI Image Generation**: Convert text prompts into high-quality images via Clipdrop API
- **User Authentication**: Secure JWT-based login and registration
- **Credit System**: Pay-as-you-go model for image generation
- **Responsive Design**: Optimized for all devices
- **Payment Integration**: Secure payments via Razorpay
- **User Dashboard**: Track credit balance and usage
- **Protected API Routes**: Secure backend endpoints

---

## 🛠️ Tech Stack

### Frontend
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Razorpay API](https://razorpay.com/docs/api/)
- [Clipdrop API](https://clipdrop.co/apis)

---

## 🏗️ Architecture

```
/Imagify
  |-- client/   # React frontend
  |-- server/   # Node.js/Express backend
```

- **Frontend**: SPA built with React, styled with Tailwind CSS, communicates with backend via REST API.
- **Backend**: Express server, handles authentication, payments, image generation, and user management.
- **Database**: MongoDB for persistent storage of users, transactions, and credits.

<!-- Optionally, add a Mermaid diagram or image here for architecture visualization -->

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Razorpay account
- Clipdrop API key

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Imagify
```

2. **Install dependencies**
```bash
# Frontend
yarn install # or npm install (in /client)
# Backend
yarn install # or npm install (in /server)
```

3. **Environment Variables**

Create `.env` in `/server`:
```
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
CURRENCY=USD
```

Create `.env` in `/client`:
```
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

4. **Start the application**
```bash
# Backend
cd server
npm run server
# Frontend
cd ../client
npm run dev
```

---

## 🎯 Usage

1. Register/Login to your account
2. Purchase credits through available plans
3. Navigate to the image generation page
4. Enter your text description
5. Click generate to create your image
6. Download or generate more images

<!-- Optionally, add screenshots or GIFs here -->

---

## 📚 API Documentation

> **Note:** For full API details, see `/server/routes/` and `/server/controllers/` or generate docs with Swagger/Postman.

### Main Endpoints
- `POST /api/user/register` – Register a new user
- `POST /api/user/login` – Login and receive JWT
- `GET /api/user/profile` – Get user profile (auth required)
- `POST /api/image/generate` – Generate image from text (auth & credits required)
- `POST /api/user/buy-credits` – Purchase credits (auth required)

---

## 🧪 Testing

> Add your test strategy here (e.g., Jest for backend, React Testing Library for frontend). Example:

```bash
# Backend tests
cd server
npm test
# Frontend tests
cd ../client
npm test
```

---

## 🚀 Deployment

- **Frontend**: Deploy on Vercel, Netlify, or any static hosting.
- **Backend**: Deploy on Heroku, Render, or any Node.js server.
- **Environment Variables**: Set securely in your deployment platform.
- **Database**: Use managed MongoDB (e.g., Atlas) for production.

---

## 🔒 Security
- JWT-based authentication for all protected routes
- Secure payment processing via Razorpay
- Encrypted password storage (bcrypt)
- Environment variables for all secrets
- CORS and input validation on backend

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Code Style:**
- Use Prettier and ESLint for formatting
- Follow existing folder structure and naming conventions

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments
- [Clipdrop API](https://clipdrop.co/apis) for image generation
- [Razorpay](https://razorpay.com/) for payment processing
- All contributors and open-source libraries
