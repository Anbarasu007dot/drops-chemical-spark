import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (formType: string, data: any) => {
  console.log('--- sendEmail called ---');
  console.log('formType:', formType);
  console.log('data:', data);

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration');
    throw new Error('Email configuration is missing');
  }

  const transporter = nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let subject = '';
  let text = '';

  if (formType === 'contact') {
    subject = `New Contact Message: ${data.subject}`;
    text = `
📨 Contact Form

👤 Full Name: ${data.name}
📧 Email: ${data.email}
📌 Subject: ${data.subject}

📝 Message:
${data.message}
    `;
  } else if (formType === 'service-request') {
    subject = `New Service Request: ${data.subject}`;
    text = `
📨 Service Request Form

👤 Name: ${data.name}
📧 Email: ${data.email}
📞 Phone: ${data.phone || 'Not provided'}
🏢 Company: ${data.company || 'Not provided'}
📌 Subject: ${data.subject}

📝 Message:
${data.message}
    `;
  } else if (formType === 'feedback') {
    subject = `New Feedback Submission from ${data.company}`;
    text = `
📨 Feedback Form

🏢 Company Name: ${data.company}
📅 Date: ${data.date}
👤 Survey Completed By: ${data.completedBy}
📞 Contact No: ${data.contact}
📧 Email: ${data.email}
🛒 Products/Services Purchased: ${data.products}
😊 Purchasing Experience: ${data.experience}
💲 Price: ${data.price}
🏆 Quality: ${data.quality}
✅ Met Expectations: ${data.expectations}
💡 Suggestions: ${data.suggestions}
⭐ Overall Experience: ${data.overall}
    `;
    
    // Validate required fields for feedback
    const requiredFields = [
      'company', 'date', 'completedBy', 'contact', 'email', 
      'products', 'experience', 'price', 'quality', 
      'expectations', 'suggestions', 'overall'
    ];
    
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      console.error('Missing required feedback fields:', missingFields);
      throw new Error(`Missing required feedback fields: ${missingFields.join(', ')}`);
    }
  } else {
    console.error('Unknown form type received in sendEmail:', formType);
    throw new Error('Unknown form type');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // You will receive it
    subject,
    text,
  };

  try {
    console.log('Attempting to send email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};