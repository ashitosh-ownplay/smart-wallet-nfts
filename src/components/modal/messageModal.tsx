import { Box, Button, Stack, Typography, colors } from "@mui/material";
import { CustomModal } from ".";
import ErrorIcon from "../../assets/RedWarningTriangle.svg";

export interface IMessageModal {
  open: boolean;
  onClose: () => void;
  title?: string | undefined;
  message: string | undefined;
  showErrorIcon?: boolean;
}

export const MessageModal = ({
  open,
  onClose,
  title,
  message,
  showErrorIcon = true,
}: IMessageModal) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        {title ? (
          <Typography fontSize="24px" fontWeight={600}>
            {title}
          </Typography>
        ) : null}

        {showErrorIcon ? (
          <Box component="img" src={ErrorIcon} alt="error-icon" />
        ) : null}

        {message ? (
          <Typography fontSize="16px" fontWeight={500} color={colors.grey[700]}>
            {message}
          </Typography>
        ) : null}

        <Button
          onClick={onClose}
          variant="contained"
          sx={{ backgroundColor: "primary.dark" }}
        >
          OK
        </Button>
      </Stack>
    </CustomModal>
  );
};
