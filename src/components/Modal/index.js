import styled from "styled-components";
import { ModalUnstyled } from "@mui/base";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 9999999;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function Modal({ open, setOpen, children }) {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        className="row justifiy-content-center py-4"
      >
        <div className="col-md-8 col-sm-8 col-11 col-lg-6">{children}</div>
      </StyledModal>
    </div>
  );
}
