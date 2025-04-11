import { Alert, Snackbar } from "@mui/material";
import "./FeedbackAlert.css";

interface Props {
  message: string;
  severity?: "success" | "error" | "info" | "warning";
  onClose: () => void;
  open: boolean;
}

export default function FeedbackAlert({
  message,
  severity,
  onClose,
  open,
}: Props) {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
