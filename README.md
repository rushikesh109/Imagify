# Imagify - AI Text to Image Generator

Imagify is a modern web application that allows users to generate images from text descriptions using AI technology. Built with React, Node.js, and MongoDB, it offers a user-friendly interface with secure authentication and a credit-based system.

## 🚀 Features

- **AI Image Generation**: Convert text descriptions into high-quality images
- **User Authentication**: Secure login and registration system
- **Credit System**: Pay-as-you-go model for image generation
- **Responsive Design**: Works seamlessly across all devices
- **Payment Integration**: Secure payments via Razorpay
- **User Dashboard**: Track credit balance and usage

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM
- React Toastify

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Razorpay API
- Clipdrop API

## 🏁 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Razorpay account
- Clipdrop API key

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd imagify
```

2. Install dependencies
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Environment Variables

Create `.env` in server directory:
```
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
CURRENCY=USD
```

Create `.env` in client directory:
```
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

4. Start the application
```bash
# Start backend (from server directory)
npm run server

# Start frontend (from client directory)
npm run dev
```

## 💳 Available Plans

- **Basic**: 100 credits for $10
- **Advanced**: 500 credits for $50
- **Business**: 5000 credits for $250

## 🔒 Security

- JWT based authentication
- Secure payment processing
- Encrypted password storage
- Protected API routes

## 🎯 Usage

1. Register/Login to your account
2. Purchase credits through available plans
3. Navigate to the image generation page
4. Enter your text description
5. Click generate to create your image
6. Download or generate more images

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Clipdrop API for image generation
- Razorpay for payment processing
- All contributors who helped in the development