import React from "react";
import { Stack, Button, Typography, Avatar } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 520,
  height: 310,
  backgroundImage: "url(../images/card.jpeg)",
  border: "2px solid #7FEFEF",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};
const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack direction="row" spacing={2}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Button color="inherit">
          <p className="details">N*B12CVB938</p>
        </Button>
        <Button onClick={handleOpen}>Previsualiser la carte</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <p className="head">
              <span className="flag2"> <img src="../images/img3.png" alt="monimage" width={50} /> </span> 
               <span className="flag-title">Republique Islamique de Mauritanie</span> 
                <span className="flag"> <img src="../images/img4.png" alt="monimage" width={50} /> </span> 
                
                </p>
            </Typography>
           
            <div className="card-content">
              <Typography id="modal-modal-description" sx={{ mb: 8 }}>
                <Avatar
                  sx={{ width: 140, height: 140 }}
                  src="/broken-image.jpg"
                />
                <p className="id">N*637646372</p>
              </Typography>

              <div className="card-item1">
                <p>
                  <Typography>Nom: Diakite</Typography>
                </p>
                <p>
                  <Typography>Prenom: Bouyagui</Typography>
                </p>
                <p>
                  <Typography>Date de Naissance: 1996/10/06</Typography>
                </p>
                <p>
                  <Typography>Lieu de Naissance: Nouakchott</Typography>
                </p>
                <div className="ct">
                  <p>
                    <Typography>Taille: 1.85</Typography>
                  </p>
                  <p>
                    <Typography>Sexe: M</Typography>
                  </p>
                  <p className="qrcode">
                    <i class="fa-solid fa-qrcode"></i>
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </Typography>
      <Button color="inherit">
        <p className="details2">5/20 beneficiares</p>
      </Button>
    </Stack>
  );
};

export default NavBar;
