/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Modal } from "@mui/material";

export interface ICustomModal {
  open: boolean;
  onClose: () => void;
  children: any;
  props?: any;
}

export const CustomModal = ({
  open,
  onClose,
  children,
  ...props
}: ICustomModal) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        width: {
          sm: "464px",
          xs: "80%",
        },
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto",
        height: "fit-content",
        boxShadow: 24,
        borderRadius: 2,
      }}
      {...props}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="white"
        borderRadius={2}
        p={4}
        gap={2}
        boxShadow={24}
      >
        {children}
      </Box>
    </Modal>
  );
};
