import { Box, Button, Stack, Typography, colors } from "@mui/material";
import { CustomModal } from ".";
import ErrorIcon from "../../assets/RedWarningTriangle.svg";

export interface IErrorModal {
  open: boolean;
  onClose: () => void;
  title?: string | undefined;
  errorMessage: string | undefined;
}

export const ErrorModal = ({
  open,
  onClose,
  title,
  errorMessage,
}: IErrorModal) => {
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

        <Box component="img" src={ErrorIcon} alt="error-icon" />

        {errorMessage ? (
          <Typography fontSize="16px" fontWeight={500} color={colors.grey[700]}>
            {errorMessage}
          </Typography>
        ) : null}

        <Button onClick={onClose} variant="contained" color="secondary">
          OK
        </Button>
      </Stack>
    </CustomModal>
  );
};
