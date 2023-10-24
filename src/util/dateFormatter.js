export default function dateFormatter(inputDate, subtractDay) {
  const date = new Date(inputDate);
  date.setDate(date.getDate() - subtractDay); // Subtract one day
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  const year = String(date.getFullYear()).slice(-2);

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata", // Indian Standard Time (IST)
  };
  const timeInIST = date.toLocaleTimeString("en-IN", timeOptions);

  return `${day}-${month}-${year}, ${timeInIST} IST`;
}
