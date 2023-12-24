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

// {
//   "success": true,
//   "data": [
//     {
//       "bank_name": "9mobile 9Payment Service Bank",
//       "short_code": "120001",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Abbey Mortgage Bank",
//       "short_code": "801",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Above Only MFB",
//       "short_code": "51204",
//       "bank_code": "090260"
//     },
//     {
//       "bank_name": "Abulesoro MFB",
//       "short_code": "51312",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Access Bank",
//       "short_code": "044",
//       "bank_code": "000014"
//     },
//     {
//       "bank_name": "Access Bank (Diamond)",
//       "short_code": "063",
//       "bank_code": "000014"
//     },
//     {
//       "bank_name": "Accion Microfinance Bank",
//       "short_code": "602",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Ahmadu Bello University Microfinance Bank",
//       "short_code": "50036",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Airtel Smartcash PSB",
//       "short_code": "120004",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "AKU Microfinance Bank",
//       "short_code": "51336",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "ALAT by WEMA",
//       "short_code": "035A",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Amju Unique MFB",
//       "short_code": "50926",
//       "bank_code": "090180"
//     },
//     {
//       "bank_name": "AMPERSAND MICROFINANCE BANK",
//       "short_code": "51341",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Aramoko MFB",
//       "short_code": "50083",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "ASO Savings and Loans",
//       "short_code": "401",
//       "bank_code": "090001"
//     },
//     {
//       "bank_name": "Astrapolaris MFB LTD",
//       "short_code": "MFB50094",
//       "bank_code": "090172"
//     },
//     {
//       "bank_name": "Bainescredit MFB",
//       "short_code": "51229",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Banc Corp Microfinance Bank",
//       "short_code": "50117",
//       "bank_code": "090581"
//     },
//     {
//       "bank_name": "Bowen Microfinance Bank",
//       "short_code": "50931",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Branch International Financial Services Limited",
//       "short_code": "FC40163",
//       "bank_code": "050006"
//     },
//     {
//       "bank_name": "Carbon",
//       "short_code": "565",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "CASHCONNECT MFB",
//       "short_code": "865",
//       "bank_code": "090360"
//     },
//     {
//       "bank_name": "CEMCS Microfinance Bank",
//       "short_code": "50823",
//       "bank_code": "090154"
//     },
//     {
//       "bank_name": "Chanelle Microfinance Bank Limited",
//       "short_code": "50171",
//       "bank_code": "090397"
//     },
//     {
//       "bank_name": "Citibank Nigeria",
//       "short_code": "023",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Consumer Microfinance Bank",
//       "short_code": "50910",
//       "bank_code": "090130"
//     },
//     {
//       "bank_name": "Corestep MFB",
//       "short_code": "50204",
//       "bank_code": "090365"
//     },
//     {
//       "bank_name": "Coronation Merchant Bank",
//       "short_code": "559",
//       "bank_code": "060001"
//     },
//     {
//       "bank_name": "County Finance Limited",
//       "short_code": "FC40128",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Crescent MFB",
//       "short_code": "51297",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Dot Microfinance Bank",
//       "short_code": "50162",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Ecobank Nigeria",
//       "short_code": "050",
//       "bank_code": "100008"
//     },
//     {
//       "bank_name": "Ekimogun MFB",
//       "short_code": "50263",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Ekondo Microfinance Bank",
//       "short_code": "098",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Eyowo",
//       "short_code": "50126",
//       "bank_code": "090328"
//     },
//     {
//       "bank_name": "Fairmoney Microfinance Bank",
//       "short_code": "51318",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Fidelity Bank",
//       "short_code": "070",
//       "bank_code": "000007"
//     },
//     {
//       "bank_name": "Firmus MFB",
//       "short_code": "51314",
//       "bank_code": "090366"
//     },
//     {
//       "bank_name": "First Bank of Nigeria",
//       "short_code": "011",
//       "bank_code": "000016"
//     },
//     {
//       "bank_name": "First City Monument Bank",
//       "short_code": "214",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "FirstTrust Mortgage Bank Nigeria",
//       "short_code": "107",
//       "bank_code": "090107"
//     },
//     {
//       "bank_name": "FLOURISH MFB",
//       "short_code": "50315",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "FSDH Merchant Bank Limited",
//       "short_code": "501",
//       "bank_code": "400001"
//     },
//     {
//       "bank_name": "Gateway Mortgage Bank LTD",
//       "short_code": "812",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Globus Bank",
//       "short_code": "00103",
//       "bank_code": "000027"
//     },
//     {
//       "bank_name": "GoMoney",
//       "short_code": "100022",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Goodnews Microfinance Bank",
//       "short_code": "50739",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Greenwich Merchant Bank",
//       "short_code": "562",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Guaranty Trust Bank",
//       "short_code": "058",
//       "bank_code": "000013"
//     },
//     {
//       "bank_name": "Hackman Microfinance Bank",
//       "short_code": "51251",
//       "bank_code": "090147"
//     },
//     {
//       "bank_name": "Hasal Microfinance Bank",
//       "short_code": "50383",
//       "bank_code": "090121"
//     },
//     {
//       "bank_name": "Heritage Bank",
//       "short_code": "030",
//       "bank_code": "000020"
//     },
//     {
//       "bank_name": "HopePSB",
//       "short_code": "120002",
//       "bank_code": "120002"
//     },
//     {
//       "bank_name": "Ibile Microfinance Bank",
//       "short_code": "51244",
//       "bank_code": "090118"
//     },
//     {
//       "bank_name": "Ikoyi Osun MFB",
//       "short_code": "50439",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Ilaro Poly Microfinance Bank",
//       "short_code": "50442",
//       "bank_code": "090571"
//     },
//     {
//       "bank_name": "Infinity MFB",
//       "short_code": "50457",
//       "bank_code": "070016"
//     },
//     {
//       "bank_name": "Jaiz Bank",
//       "short_code": "301",
//       "bank_code": "000006"
//     },
//     {
//       "bank_name": "Kadpoly MFB",
//       "short_code": "50502",
//       "bank_code": "090320"
//     },
//     {
//       "bank_name": "Keystone Bank",
//       "short_code": "082",
//       "bank_code": "000002"
//     },
//     {
//       "bank_name": "Kredi Money MFB LTD",
//       "short_code": "50200",
//       "bank_code": "090380"
//     },
//     {
//       "bank_name": "Kuda Bank",
//       "short_code": "50211",
//       "bank_code": "090267"
//     },
//     {
//       "bank_name": "Lagos Building Investment Company Plc.",
//       "short_code": "90052",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Links MFB",
//       "short_code": "50549",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Living Trust Mortgage Bank",
//       "short_code": "031",
//       "bank_code": "070007"
//     },
//     {
//       "bank_name": "Lotus Bank",
//       "short_code": "303",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Mayfair MFB",
//       "short_code": "50563",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Mint MFB",
//       "short_code": "50304",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Moniepoint MFB",
//       "short_code": "50515",
//       "bank_code": "090405"
//     },
//     {
//       "bank_name": "MTN Momo PSB",
//       "short_code": "120003",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Optimus Bank Limited",
//       "short_code": "00107",
//       "bank_code": "000036"
//     },
//     {
//       "bank_name": "Paga",
//       "short_code": "100002",
//       "bank_code": "100002"
//     },
//     {
//       "bank_name": "PalmPay",
//       "short_code": "999991",
//       "bank_code": "100033"
//     },
//     {
//       "bank_name": "Parallex Bank",
//       "short_code": "104",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Parkway - ReadyCash",
//       "short_code": "311",
//       "bank_code": "100003"
//     },
//     {
//       "bank_name": "Paycom",
//       "short_code": "999992",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Peace Microfinance Bank",
//       "short_code": "50743",
//       "bank_code": "090402"
//     },
//     {
//       "bank_name": "Personal Trust MFB",
//       "short_code": "51146",
//       "bank_code": "090135"
//     },
//     {
//       "bank_name": "Petra Mircofinance Bank Plc",
//       "short_code": "50746",
//       "bank_code": "090165"
//     },
//     {
//       "bank_name": "Polaris Bank",
//       "short_code": "076",
//       "bank_code": "000008"
//     },
//     {
//       "bank_name": "Polyunwana MFB",
//       "short_code": "50864",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "CITI BANK",
//       "short_code": "000009",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "PremiumTrust Bank",
//       "short_code": "105",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Providus Bank",
//       "short_code": "101",
//       "bank_code": "000023"
//     },
//     {
//       "bank_name": "QuickFund MFB",
//       "short_code": "51293",
//       "bank_code": "090261"
//     },
//     {
//       "bank_name": "Rand Merchant Bank",
//       "short_code": "502",
//       "bank_code": "000024"
//     },
//     {
//       "bank_name": "Refuge Mortgage Bank",
//       "short_code": "90067",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Rigo Microfinance Bank Limited",
//       "short_code": "51286",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "ROCKSHIELD MICROFINANCE BANK",
//       "short_code": "50767",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Rubies MFB",
//       "short_code": "125",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Safe Haven MFB",
//       "short_code": "51113",
//       "bank_code": "090286"
//     },
//     {
//       "bank_name": "Safe Haven Microfinance Bank Limited",
//       "short_code": "951113",
//       "bank_code": "090286"
//     },
//     {
//       "bank_name": "Shield MFB",
//       "short_code": "50582",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Solid Allianze MFB",
//       "short_code": "51062",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Solid Rock MFB",
//       "short_code": "50800",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Sparkle Microfinance Bank",
//       "short_code": "51310",
//       "bank_code": "090325"
//     },
//     {
//       "bank_name": "Stanbic IBTC Bank",
//       "short_code": "221",
//       "bank_code": "100007"
//     },
//     {
//       "bank_name": "Standard Chartered Bank",
//       "short_code": "068",
//       "bank_code": "000021"
//     },
//     {
//       "bank_name": "Stellas MFB",
//       "short_code": "51253",
//       "bank_code": "090262"
//     },
//     {
//       "bank_name": "Sterling Bank",
//       "short_code": "232",
//       "bank_code": "000001"
//     },
//     {
//       "bank_name": "Suntrust Bank",
//       "short_code": "100",
//       "bank_code": "000022"
//     },
//     {
//       "bank_name": "Supreme MFB",
//       "short_code": "50968",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "TAJ Bank",
//       "short_code": "302",
//       "bank_code": "000026"
//     },
//     {
//       "bank_name": "Tanadi Microfinance Bank",
//       "short_code": "090560",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Tangerine Money",
//       "short_code": "51269",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "TCF MFB",
//       "short_code": "51211",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Titan Bank",
//       "short_code": "102",
//       "bank_code": "000025"
//     },
//     {
//       "bank_name": "Titan Paystack",
//       "short_code": "100039",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "U&C Microfinance Bank Ltd (U AND C MFB)",
//       "short_code": "50840",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Uhuru MFB",
//       "short_code": "MFB51322",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Unaab Microfinance Bank Limited",
//       "short_code": "50870",
//       "bank_code": "090331"
//     },
//     {
//       "bank_name": "Unical MFB",
//       "short_code": "50871",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Unilag Microfinance Bank",
//       "short_code": "51316",
//       "bank_code": ""
//     },
//     {
//       "bank_name": "Union Bank of Nigeria",
//       "short_code": "032",
//       "bank_code": "000018"
//     },
//     {
//       "bank_name": "United Bank For Africa",
//       "short_code": "033",
//       "bank_code": "000004"
//     },
//     {
//       "bank_name": "Unity Bank",
//       "short_code": "215",
//       "bank_code": "000011"
//     },
//     {
//       "bank_name": "VFD Microfinance Bank Limited",
//       "short_code": "566",
//       "bank_code": "090110"
//     },
//     {
//       "bank_name": "Waya Microfinance Bank",
//       "short_code": "51355",
//       "bank_code": "090590"
//     },
//     {
//       "bank_name": "Wema Bank",
//       "short_code": "035",
//       "bank_code": "000017"
//     },
//     {
//       "bank_name": "Zenith Bank",
//       "short_code": "057",
//       "bank_code": "000015"
//     }
//   ],
//   "message": "bank list"
// }
