import { Button, Modal } from "@mui/material";
import { thirdWebClientId } from "../../configs";

export const InAppWalletPKExtractor = () => {
  return (
    <iframe
      src={`https://embedded-wallet.thirdweb.com/sdk/2022-08-12/embedded-wallet/export?clientId=${thirdWebClientId}`}
      id="export-pk-iframe"
      allow="clipboard-write"
      width="100%"
      height="600"
    />
  );
};

type InAppWalletPKExtractorButtonProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  onClose: () => void;
};

export const InAppWalletPKExtractorButton = ({
  open,
  setOpen,
  onClose,
}: InAppWalletPKExtractorButtonProps) => {
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      {open ? (
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
        >
          <InAppWalletPKExtractor />
        </Modal>
      ) : (
        <Button
          variant="contained"
          style={{ width: "fit-content", height: "48px" }}
          onClick={openModal}
        >
          Export Private Key
        </Button>
      )}
    </>
  );
};
