import { Modal, Fade, Backdrop, Box, Typography } from "@mui/material";
import "./ConfirmTransferModal.css";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount: number;
  destination: string;
  name?: string;
  date: string;
}

export default function TransferDetailModal({
  open,
  onClose,
  amount,
  destination,
  date,
  name,
  onConfirm,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box className="transfer-detail-modal">
          <Typography className="detail-title">
            Detalle de la transferiencia
          </Typography>

          <div className="detail-block">
            <p className="detail-label">Destino:</p>
            <p className="detail-value">{destination}</p>
          </div>

          <div className="detail-block">
            <p className="detail-label">Para:</p>
            <p className="detail-value">{name}</p>
          </div>

          <div className="detail-block">
            <p className="detail-label">¿Cuánto?</p>
            <p className="detail-value">${amount.toLocaleString("es-CO")}</p>
          </div>

          <div className="detail-block">
            <p className="detail-label">Fecha</p>
            <p className="detail-value">{date}</p>
          </div>

          <div className="detail-button">
            <button className="button-action cancel-btn" onClick={onClose}>
              Cancelar
            </button>
            <button className="button-action confirm-btn" onClick={onConfirm}>
              Realizar envío
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
