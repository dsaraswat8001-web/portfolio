require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Health check
app.get("/", (req, res) => res.json({ status: "Portfolio API running ✅" }));

// Connect to MongoDB, then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected ✅");
    // Seed demo projects if none exist
    const Project = require("./models/Project");
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany([
        {
          title: "E-Commerce Platform",
          description:
            "A full-stack online store with cart, checkout, and admin dashboard. Built with React, Node.js, and MongoDB.",
          tech: ["React", "Node.js", "MongoDB", "Stripe"],
          github: "https://github.com/yourusername/ecommerce",
          live: "https://ecommerce-demo.vercel.app",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
          featured: true,
          order: 1,
        },
        {
          title: "Task Management App",
          description:
            "A real-time task manager with drag-and-drop boards, user authentication, and WebSocket updates.",
          tech: ["React", "Express", "PostgreSQL", "Socket.io"],
          github: "https://github.com/yourusername/taskmanager",
          live: "https://tasks-demo.vercel.app",
          image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
          featured: true,
          order: 2,
        },
        {
          title: "Blog Platform",
          description:
            "A publishing platform with rich text editing, comments, user profiles, and RESTful API backend.",
          tech: ["React", "Node.js", "MySQL", "JWT"],
          github: "https://github.com/yourusername/blogplatform",
          live: "https://blog-demo.vercel.app",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
          featured: false,
          order: 3,
        },
        {
          title: "Weather Dashboard",
          description:
            "A responsive weather application with location detection, 7-day forecasts, and animated weather icons.",
          tech: ["React", "OpenWeather API", "Chart.js"],
          github: "https://github.com/yourusername/weather",
          live: "https://weather-demo.vercel.app",
          image: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=800&q=80",
          featured: false,
          order: 4,
        },
      ]);
      console.log("Demo projects seeded ✅");
    }
    app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
