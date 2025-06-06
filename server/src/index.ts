import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendEmail } from './mailer';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { formType, ...formData } = req.body;

  console.log('--- Incoming /send-email request ---');
  console.log('formType:', formType);
  console.log('formData:', formData);

  try {
    await sendEmail(formType, formData);
    res.status(200).send('✅ Email sent successfully!');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    if (error instanceof Error) {
      console.error('Error stack:', error.stack);
    }
    res.status(500).send('❌ Failed to send email.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

