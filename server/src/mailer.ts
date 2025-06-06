import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendEmail = async (formType: string, data: any) => {
  console.log('--- sendEmail called ---');
  console.log('formType:', formType);
  console.log('data:', data);

  const transporter = nodemailer.createTransport({
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
📞 Phone: ${data.phone || ''}
🏢 Company: ${data.company || ''}
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
    if (!data.company || !data.date || !data.completedBy || !data.contact || !data.email || !data.products || !data.experience || !data.price || !data.quality || !data.expectations || !data.suggestions || !data.overall) {
      console.error('Missing required feedback fields:', data);
      throw new Error('Missing required feedback fields');
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

  await transporter.sendMail(mailOptions);
  return true;
};
