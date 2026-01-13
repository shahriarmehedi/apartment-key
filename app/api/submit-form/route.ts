import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formData } = body;

        // Format the form data into a readable email
        const emailContent = `
            <h2>New Apartment Locator Form Submission</h2>
            <hr/>
            
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName || 'N/A'} ${formData.lastName || 'N/A'}</p>
            <p><strong>Email:</strong> ${formData.email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
            
            <h3>Apartment Preferences</h3>
            <p><strong>Move-in Date:</strong> ${formData.moveInDate || 'N/A'}</p>
            <p><strong>Bedrooms:</strong> ${formData.bedrooms || 'N/A'}</p>
            <p><strong>Bathrooms:</strong> ${formData.bathrooms || 'N/A'}</p>
            <p><strong>Budget:</strong> $${formData.budget || 'N/A'}</p>
            <p><strong>Income:</strong> $${formData.income || 'N/A'}</p>
            
            <h3>Location Preferences</h3>
            <p><strong>Areas:</strong> ${Array.isArray(formData.areas) ? formData.areas.join(', ') : 'N/A'}</p>
            <p><strong>Work Location:</strong> ${formData.workLocation || 'N/A'}</p>
            
            <h3>Additional Preferences</h3>
            <p><strong>Pets:</strong> ${formData.pets || 'N/A'}</p>
            <p><strong>Parking:</strong> ${formData.parking || 'N/A'}</p>
            <p><strong>Lease Term:</strong> ${formData.leaseTerm || 'N/A'}</p>
            <p><strong>Must-Have Amenities:</strong> ${Array.isArray(formData.amenities) ? formData.amenities.join(', ') : 'N/A'}</p>
            
            <h3>Special Requests</h3>
            <p>${formData.specialRequests || 'None'}</p>
            
            <hr/>
            <p><small>Submitted on ${new Date().toLocaleString()}</small></p>
        `;
            
        const { data, error } = await resend.emails.send({
            from: 'Apartment Key <noreply@apartmentkey.com>',
            to: ['Info@apartmentkey.com'],
            subject: `New Form Submission from ${formData.firstName || ''} ${formData.lastName || ''}`,
            html: emailContent,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
