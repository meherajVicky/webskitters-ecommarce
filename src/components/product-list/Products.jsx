import { IconButton, Modal, Typography } from "@mui/material";
import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
import React from "react";
import { useSelector } from "react-redux";
import "./products.css";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Products(props) {
  const { products_data, products_status } = useSelector((s) => s.produtcts);
  console.log(products_data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <h1 className=" text-center main-heading">our products</h1>
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {products_data?.map((item) => (
                <div
                  className={`itembox card col-12 col-md-6 col-lg-6 col-xl-4`}
                  key={item?.id}
                >
                  <div className="row item-inside" onClick={()=>handleOpen()}>
                    <img
                      className={`img card-img-top m-0 p-0 col-12 col-md-12 `}
                      src={item?.image}
                      alt="Card cap"
                    />
                    <div className="card-body pt-1 pb-1">
                      <h5 className="card-title ">{item?.title}</h5>
                      <h5 className="card-title">{item?.price}$</h5>
                      <div className="card-text ">
                        <span className="btn">
                          add to cart
                          <IconButton size="small" color="error">
                            <LocalGroceryStoreSharpIcon />
                          </IconButton>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Modal
                    open={open}
                    onClose={() => handleClose()}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {item?.description}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
