const GetStatusBadge = (status: string) => {
  const statusStyles = {
    approved: "bg-theme-success text-black", // used
    "new report": "bg-theme-success text-black", // used
    published: "bg-green-500 text-white border-0",
    active: "bg-green-500 text-white border-0",

    pending: "bg-theme-warning text-theme-dark-purple", // used
    refunded: "bg-amber-500 text-white border-0",
    draft: "bg-gray-100 text-gray-800 border-gray-200",

    rejected: "bg-theme-danger text-black", // used
    cancelled: "bg-red-500 text-white border-0",
    blocked: "bg-red-100 text-red-800 border-red-200",
    "Action Taken": "bg-green-500 text-white border-0",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-2 py-1.5 text-xs font-medium capitalize ${
        statusStyles[status as keyof typeof statusStyles] || statusStyles.draft
      }`}
    >
      {status}
    </span>
  );
};

export default GetStatusBadge;
