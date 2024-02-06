import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const copyCode = (data) => {
  navigator.clipboard.writeText(data);
};

export const downloadReceipt = (type, data) => {
  if (type === "image") {
    // Use html2canvas to capture the content of the div
    html2canvas(data).then((canvas) => {
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Create a link element and trigger a download
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "receipt.png";
      link.click();
    });
  } else {
    // Use html2canvas to capture the content of the div
    html2canvas(data).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a PDF using jspdf
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);

      // Download the PDF
      pdf.save("receipt.pdf");
    });
  }
};

export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    // minute: '2-digit',
    // second: '2-digit',
    // timeZoneName: 'short',
  };
  const formattedDate = new Date(dateString).toLocaleString("en-US", options);
  return formattedDate;
};

export const supportedBanks = [
  { id: "1", name: "Access Bank", short_code: "044", code: "000014" },
  { id: "2", name: "Citibank", short_code: "023", code: "" },
  { id: "3", name: "Carbon", short_code: "565", code: "100026" },
  { id: "4", name: "Diamond Bank", short_code: "063", code: "000014" },
  { id: "5", name: "Ecobank Nigeria", short_code: "050", code: "100008" },
  { id: "6", name: "Fidelity Bank Nigeria", short_code: "070", code: "000007" },
  { id: "7", name: "First Bank of Nigeria", short_code: "011", code: "000016" },
  { id: "8", name: "First City Monument Bank", short_code: "214", code: "" },
  { id: "9", name: "Guaranty Trust Bank", short_code: "058", code: "000013" },
  { id: "10", name: "Heritage Bank Plc", short_code: "030", code: "000020" },
  { id: "11", name: "Jaiz Bank", short_code: "301", code: "000006" },
  {
    id: "12",
    name: "Keystone Bank Limited",
    short_code: "082",
    code: "000002",
  },
  { id: "13", name: "Opay", short_code: "100004", code: "100004" },
  { id: "14", name: "PalmPay", short_code: "999991", code: "100033" },
  { id: "15", name: "Providus Bank Plc", short_code: "101", code: "000023" },
  { id: "16", name: "Polaris Bank", short_code: "076", code: "000008" },
  {
    id: "17",
    name: "Stanbic IBTC Bank Nigeria Limited",
    short_code: "221",
    code: "100007",
  },
  {
    id: "18",
    name: "Standard Chartered Bank",
    short_code: "068",
    code: "000021",
  },
  { id: "19", name: "Sterling Bank", short_code: "232", code: "000001" },
  {
    id: "20",
    name: "Suntrust Bank Nigeria Limited",
    short_code: "100",
    code: "000022",
  },
  {
    id: "21",
    name: "Union Bank of Nigeria",
    short_code: "032",
    code: "000018",
  },
  {
    id: "22",
    name: "United Bank for Africa",
    short_code: "033",
    code: "000004",
  },
  { id: "23", name: "Unity Bank Plc", short_code: "215", code: "000011" },
  { id: "24", name: "Wema Bank", short_code: "035", code: "" },
  { id: "25", name: "Zenith Bank", short_code: "057", code: "000015" },
];

export const PRODUCTION_URL =
  "https://paybeforeservice.onrender.com/PayBeforeService/v1";

export const LOCAL_URL = "http://localhost:8000/PayBeforeService/v1";
