import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './mailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000', 'http://127.0.0.1:8080'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.post('/send-email', async (req, res) => {
  const { formType, ...formData } = req.body;

  console.log('--- Incoming /send-email request ---');
  console.log('formType:', formType);
  console.log('formData:', formData);

  // Validate request
  if (!formType) {
    console.error('Missing formType in request');
    return res.status(400).json({ error: 'Form type is required' });
  }

  if (!formData || Object.keys(formData).length === 0) {
    console.error('Missing form data in request');
    return res.status(400).json({ error: 'Form data is required' });
  }

  try {
    await sendEmail(formType, formData);
    console.log('✅ Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    if (error instanceof Error) {
      console.error('Error stack:', error.stack);
      res.status(500).json({ 
        error: 'Failed to send email', 
        details: error.message 
      });
    } else {
      res.status(500).json({ error: 'Failed to send email' });
    }
  }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
});