import nodemailer from 'nodemailer';
export async function POST(req, res) {
    try {
        const { name, email, phone, subject, message } = await req.json();

        // Create a transporter
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // replace with your SMTP server
            port: 465, // or 465 for SSL
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL, // your email
                pass: process.env.EMAIL_APP_PASSWORD, // your email password
            },
        });

        // Define email options
        let mailOptions = {
            from: '"Your Name" <your-email@example.com>', // sender address
            to: process.env.EMAIL, // list of receivers
            subject: subject, // Subject line
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // plain text body
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Message:</strong> ${message}</p>`, // html body
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({
            status: true,
            message: 'Email sent successfully',
        }, { status: 200 });

    } catch (err) {
        console.log(process.env.local)
        return Response.json({
            status: false,
            message: err.message,
        }, { status: 500 });
    }
}
