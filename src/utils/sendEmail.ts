export const sendEmail = async (to: string, name: string, role: string) => {
    try {
        const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ to, name, role }),
        });

        if (!response.ok) {
            throw new Error("Failed to send email");
        }

        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export const sendCertificateEmail = async (
    to: string,
    studentName: string,
    courseName: string,
    grade: string,
    institutionName: string,
    issueDate: string,
    completionDate: string,
    certificateId: string
) => {
    try {
        const response = await fetch("http://localhost:5000/send-email/certificate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to,
                studentName,
                courseName,
                grade,
                institutionName,
                issueDate,
                completionDate,
                certificateId,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to send certificate email");
        }

        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error("Error sending certificate email:", error);
    }
};