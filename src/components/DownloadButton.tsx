import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DownloadButtonProps {
  targetId: string;
  filename?: string;
}

const DownloadButton = ({ targetId, filename = "resume" }: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const downloadAsPDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(targetId);
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#FAF8F5",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
      setShowOptions(false);
    }
  };

  const downloadAsImage = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(targetId);
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#FAF8F5",
      });

      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsDownloading(false);
      setShowOptions(false);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowOptions(!showOptions)}
        disabled={isDownloading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body font-medium rounded shadow-elegant hover:bg-gold-light transition-all duration-300 disabled:opacity-50"
      >
        {isDownloading ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Generating...</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Resume</span>
          </>
        )}
      </button>

      {showOptions && !isDownloading && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded shadow-elegant border border-border animate-fade-in z-10">
          <button
            onClick={downloadAsPDF}
            className="w-full px-4 py-3 text-left font-body text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors flex items-center gap-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Download as PDF
          </button>
          <button
            onClick={downloadAsImage}
            className="w-full px-4 py-3 text-left font-body text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors flex items-center gap-3 border-t border-border"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Download as Image
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
