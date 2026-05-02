const express = require("express");
const router = express.Router();

// POST contact form submission
// Stores to console (extend with nodemailer or a DB collection as needed)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
    // Log the message (replace with email sending or DB save in production)
    console.log("📬 New contact message:", { name, email, message });
    res.json({ success: true, message: "Message received! I'll be in touch soon." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
