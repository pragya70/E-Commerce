import { toast } from "sonner";

// Success variant
toast("Success!", {
  className: "bg-green-100 text-green-800",
});

// Error variant
toast("Error!", {
  className: "bg-red-100 text-red-800",
});

// Info variant
toast("Heads up!", {
  className: "bg-blue-100 text-blue-800",
});
