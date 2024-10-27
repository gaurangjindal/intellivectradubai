import nodemailer from 'nodemailer';

export async function POST(req, res) {
    try {
        const formData = await req.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const appliedFor = formData.get('appliedFor');
        const coverletter = formData.get('coverletter');
        console.log(formData.get('name'))
        const cvFile = formData.get('cvFile');
        const cvBuffer = Buffer.from(cvFile, 'base64');
        console.log(formData);
        console.log({ name, email, phone, appliedFor, coverletter, cvFile })
        if (!name || !email || !phone || !appliedFor || !cvFile) {
            console.log("Eror")
            return Response.json({ message: 'Name, email, phone, appliedFor, and CV file are required fields' }, { status: 400 });
        }

        // Example nodemailer setup
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // replace with your SMTP server
            port: 465, // or 465 for SSL
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL, // your email
                pass: process.env.EMAIL_APP_PASSWORD, // your email password
            },
        });

        let mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL, // Replace with your recipient email
            subject: `Application for ${appliedFor}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nApplied For: ${appliedFor}\nCover Letter:\n${coverletter}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Phone:</strong> ${phone}</p>
                           <p><strong>Applied For:</strong> ${appliedFor}</p>
                           <p><strong>Cover Letter:</strong></p>
                           <p>${coverletter.replace(/\n/g, '<br>')}</p>`,
            attachments: [
                {
                    filename: 'Resume'+ Date.now() + ".pdf",
                    content: cvBuffer,
                    contentType: 'application/pdf'
                },
            ],
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Respond with success message
        return Response.json({
            status: true,
            message: 'Email sent successfully',
        }, { status: 200 });
    }catch (error) {
            console.error('Error sending email:', error);
            return Response.json({
                status: false,
                message: error.message,
            }, { status: 500 });
        }

}
