# Portfolio Website

A modern 3D portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) featuring stunning 3D animations and interactive elements.

## 🚀 Features

- **3D Interactive Landing Page** - Built with Three.js and React Three Fiber
- **Responsive Design** - Works seamlessly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **RESTful API** - Built with Express and MongoDB
- **Contact Form** - Integrated email functionality
- **Projects Showcase** - Display your portfolio projects
- **Skills Section** - Highlight your technical abilities

## 📁 Project Structure

```
mysite/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── App.jsx      # Main App component
│   │   └── main.jsx     # Entry point
│   └── package.json
│
└── backend/           # Express backend API
    ├── config/        # Configuration files
    ├── models/        # MongoDB models
    ├── routes/        # API routes
    ├── server.js      # Server entry point
    └── package.json
```

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Three.js
- React Three Fiber
- React Three Drei
- Framer Motion
- React Router DOM
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer
- JWT Authentication
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

5. Start the backend server:
```bash
npm run dev
```

The backend API will run on `http://localhost:5000`

## 🎨 Customization

### Update Personal Information

1. Edit the landing page content in `frontend/src/pages/LandingPage.jsx`:
   - Replace "Your Name" with your actual name
   - Update the hero subtitle and description
   - Modify the tech stack items

### Customize 3D Scene

1. Edit `frontend/src/components/Scene3D.jsx` to:
   - Change colors and materials
   - Add or remove 3D objects
   - Adjust animation speeds
   - Modify object positions

### Add Projects

Use the API endpoint to add your projects:
```javascript
POST /api/projects
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "imageUrl": "https://...",
  "projectUrl": "https://...",
  "githubUrl": "https://...",
  "featured": true
}
```

### Add Skills

Use the API endpoint to add your skills:
```javascript
POST /api/skills
{
  "name": "React",
  "category": "frontend",
  "proficiency": 90
}
```

## 📝 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create a project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create a skill

### Contact
- `POST /api/contact` - Send contact form email

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to your hosting platform

### Backend Deployment (Heroku/Railway)
1. Set up environment variables on your hosting platform
2. Deploy the backend directory
3. Update the frontend API URL in `vite.config.js`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name**
- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
