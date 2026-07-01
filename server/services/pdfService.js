import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export const generateInvoicePDF = async (invoice, shipment, user) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      
      // Ensure uploads/invoices directory exists
      const dir = path.join(process.cwd(), 'uploads', 'invoices');
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir, { recursive: true });
      }

      const fileName = `invoice-${invoice.invoiceNumber}.pdf`;
      const filePath = path.join(dir, fileName);
      const writeStream = fs.createWriteStream(filePath);
      doc.pipe(writeStream);

      // Simple layout
      doc.fontSize(25).text('Invoice', { align: 'center' });
      doc.text('-----------------------------------');
      doc.fontSize(14).text(`Invoice Number: ${invoice.invoiceNumber}`);
      doc.text(`Tracking ID: ${shipment.trackingId}`);
      doc.text(`User: ${user.name}`);
      doc.text(`Total Amount: $${invoice.totalAmount}`);
      // ... Add more details using PDFKit ...

      doc.end();

      writeStream.on('finish', () => {
        resolve(`/uploads/invoices/${fileName}`);
      });
      writeStream.on('error', (err) => {
        reject(err);
      });
    } catch (error) {
      reject(error);
    }
  });
};
