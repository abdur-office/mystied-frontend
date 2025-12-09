export const formatDate = (
  dateString: string | Date,
  isShort: boolean = false,
): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const shortMonth = date.toLocaleString("default", { month: "short" });
  const fullMonth = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return isShort
    ? `${day} ${shortMonth}, ${year}`
    : `${day}-${fullMonth}-${year}`;
};

export const formatDateAndTime = (dateString: string | Date): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formatted = date.toLocaleString("en-GB", options);

  // Convert "28 Nov 2025, 12:27 am" → "28 Nov 2025, 12:27 AM"
  return formatted.replace(/\b(am|pm)\b/, (match) => match.toUpperCase());
};

// ✅ Get only day number (e.g., "22", "07")
export const getDayOnly = (dateString: string | Date): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";
  return String(date.getDate()).padStart(2, "0");
};

// ✅ Get only short month (e.g., "Sep", "Aug")
export const getShortMonthOnly = (dateString: string | Date): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toLocaleString("default", { month: "short" });
};
