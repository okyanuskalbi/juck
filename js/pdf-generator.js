/* ============================================
   PDF Treatment Plan Generator
   Generates professional treatment plan PDFs
   ============================================ */

class TreatmentPDFGenerator {
  constructor() {
    this.clinicBranding = window.brandingManager?.getBranding() || {};
  }

  /**
   * Generate Treatment Plan PDF
   * @param {Object} planData - Treatment plan data
   */
  async generatePDF(planData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // Page dimensions
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 20;

    // Colors (matching our design system)
    const primaryColor = [6, 182, 212];      // Medical Cyan
    const secondaryColor = [99, 102, 241];   // Indigo
    const accentColor = [20, 184, 166];      // Teal
    const textColor = [51, 51, 51];
    const lightGray = [240, 240, 240];

    // === PAGE 1: Cover Page ===
    this.drawCoverPage(doc, pageWidth, pageHeight, primaryColor);

    // === PAGE 2: Treatment Plan Summary ===
    doc.addPage();
    this.drawTreatmentPlanPage(doc, planData, pageWidth, pageHeight, margin, {
      primaryColor,
      secondaryColor,
      accentColor,
      textColor,
      lightGray
    });

    // Save PDF
    const fileName = `Treatment_Plan_${planData.patientName}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);

    return fileName;
  }

  /**
   * Draw Cover Page (Page 1)
   */
  drawCoverPage(doc, pageWidth, pageHeight, primaryColor) {
    // Background gradient effect (light gray)
    doc.setFillColor(245, 248, 250);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Logo and clinic name at top
    doc.setFontSize(48);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');

    const clinicLogo = this.clinicBranding.clinicLogo || '🏥';
    const clinicName = this.clinicBranding.clinicName || 'Your Clinic';

    // Center logo
    doc.text(clinicLogo, pageWidth / 2, 80, { align: 'center' });

    // Clinic name
    doc.setFontSize(32);
    doc.text(clinicName, pageWidth / 2, 110, { align: 'center' });

    // Subtitle
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    const subtitle = this.clinicBranding.clinicSubtitle || 'Healthcare Management System';
    doc.text(subtitle, pageWidth / 2, 125, { align: 'center' });

    // Large image placeholder (representing patient photo area)
    doc.setFillColor(220, 230, 240);
    doc.roundedRect(30, 140, pageWidth - 60, 80, 5, 5, 'F');
    doc.setFontSize(12);
    doc.setTextColor(150, 150, 150);
    doc.text('Patient Photo Area', pageWidth / 2, 180, { align: 'center' });

    // Bottom logo
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.circle(pageWidth / 2, 250, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('♥', pageWidth / 2, 253, { align: 'center' });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const website = this.clinicBranding.clinicWebsite || 'www.yourclinic.com';
    doc.text(website, pageWidth / 2, 275, { align: 'center' });
  }

  /**
   * Draw Treatment Plan Summary Page (Page 2)
   */
  drawTreatmentPlanPage(doc, planData, pageWidth, pageHeight, margin, colors) {
    const { primaryColor, textColor, lightGray } = colors;

    // Header with logo
    doc.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
    doc.rect(0, 0, pageWidth, 40, 'F');

    // Title
    doc.setFontSize(28);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('Treatment Plan', margin, 25);

    // Clinic logo in corner
    const clinicLogo = this.clinicBranding.clinicLogo || '🏥';
    const clinicName = this.clinicBranding.clinicName || 'Your Clinic';
    doc.setFontSize(24);
    doc.text(clinicLogo, pageWidth - margin - 20, 20);
    doc.setFontSize(10);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(clinicName, pageWidth - margin - 20, 28, { align: 'right' });

    // Patient information section
    let yPos = 60;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Patient Information', margin, yPos);

    yPos += 10;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Name: ${planData.patientName || 'N/A'}`, margin, yPos);
    yPos += 6;
    doc.text(`Plan: ${planData.planName || 'Treatment Plan'}`, margin, yPos);
    yPos += 6;
    doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, yPos);

    // Phase Summary Table
    yPos += 20;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('Treatment Plan Summary', margin, yPos);

    yPos += 10;

    // Table headers
    const tableStartY = yPos;
    const col1X = margin;
    const col2X = pageWidth / 2;
    const col3X = pageWidth - margin - 40;
    const rowHeight = 15;

    // Header row
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(col1X, tableStartY, pageWidth - 2 * margin, rowHeight, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Phase', col1X + 5, tableStartY + 10);
    doc.text('Value', col2X, tableStartY + 10);
    doc.text('Percentage', col3X, tableStartY + 10);

    // Data rows
    yPos = tableStartY + rowHeight;
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('helvetica', 'normal');

    // Phase 1
    doc.setFillColor(250, 250, 250);
    doc.rect(col1X, yPos, pageWidth - 2 * margin, rowHeight, 'F');
    doc.text('Phase 1', col1X + 5, yPos + 10);
    doc.text(planData.phase1Value || '$456,000', col2X, yPos + 10);
    doc.text(planData.phase1Pct || '44%', col3X, yPos + 10);

    // Phase 2
    yPos += rowHeight;
    doc.text('Phase 2', col1X + 5, yPos + 10);
    doc.text(planData.phase2Value || '$456,000', col2X, yPos + 10);
    doc.text(planData.phase2Pct || '44%', col3X, yPos + 10);

    // Phase 3
    yPos += rowHeight;
    doc.setFillColor(250, 250, 250);
    doc.rect(col1X, yPos, pageWidth - 2 * margin, rowHeight, 'F');
    doc.text('Phase 3', col1X + 5, yPos + 10);
    doc.text(planData.phase3Value || '$123,000', col2X, yPos + 10);
    doc.text(planData.phase3Pct || '22%', col3X, yPos + 10);

    // Total row
    yPos += rowHeight;
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(col1X, yPos, pageWidth - 2 * margin, rowHeight, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL', col1X + 5, yPos + 10);
    doc.text(planData.totalValue || '$1,035,000', col2X, yPos + 10);
    doc.text('100%', col3X, yPos + 10);

    // Footer with clinic information
    yPos = pageHeight - 30;
    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.setFont('helvetica', 'normal');

    if (this.clinicBranding.clinicAddress) {
      doc.text(this.clinicBranding.clinicAddress, margin, yPos);
    }
    if (this.clinicBranding.clinicPhone) {
      doc.text(`Phone: ${this.clinicBranding.clinicPhone}`, margin, yPos + 5);
    }
    if (this.clinicBranding.clinicEmail) {
      doc.text(`Email: ${this.clinicBranding.clinicEmail}`, margin, yPos + 10);
    }

    // Website at bottom center
    if (this.clinicBranding.clinicWebsite) {
      doc.text(this.clinicBranding.clinicWebsite, pageWidth / 2, pageHeight - 10, { align: 'center' });
    }
  }

  /**
   * Generate sample plan for testing
   */
  generateSamplePlan() {
    return {
      patientName: 'Sarah Johnson',
      planName: 'Comprehensive Dental Restoration',
      phase1Value: '£1,000',
      phase1Pct: '23%',
      phase2Value: '£2,800',
      phase2Pct: '65%',
      phase3Value: '£500',
      phase3Pct: '12%',
      totalValue: '£4,300'
    };
  }
}

// Create global instance
const pdfGenerator = new TreatmentPDFGenerator();

// Export for use in treatment planner
window.pdfGenerator = pdfGenerator;

// Helper function to generate PDF from treatment planner
window.generateTreatmentPDF = function() {
  const planData = pdfGenerator.generateSamplePlan();
  pdfGenerator.generatePDF(planData);

  if (typeof showToast === 'function') {
    showToast('PDF generated successfully!', 'success');
  }
};
