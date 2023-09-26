import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";

const AddUser = (props) => {
  const respo = useSelector((y) => y.user.singleData);
  const isTrue = useSelector((y) => y.user.addReq);
  const [data, setdata] = useState({
    title: "",
    description: "",
  });

  React.useEffect(() => {
    if (!props.openL) {
      setdata({
        title: "",
        description: "",
      })
    }
  }, [props.openL]);

  React.useEffect(() => {
    if (!isTrue) return;
    setdata("")
    setdata(respo);
  }, [respo]);

  const handlerChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <Dialog open={props.open} onClose={props.close} fullWidth>
          <DialogTitle>Add User</DialogTitle>
          <DialogContent>
            <TextField
              id="title"
              label="Title"
              type="text"
              name="title"
              fullWidth
              variant="standard"
              value={data.title}
              onChange={(e) => handlerChange(e)}
            />
          </DialogContent>
          <DialogContent>
            <TextField
              id="description"
              label="Description"
              type="text"
              name="description"
              fullWidth
              variant="standard"
              value={data.description}
              onChange={(e) => handlerChange(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => props.close(false)}>Cancel</Button>
            <Button
              onClick={() =>
                !props.openL ? props.close(data) : props.close(data, respo.id)
              }
            >
              {!props.openL ? "Add" : "Update"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AddUser;

// import moment from "moment/moment";

// function Modal(props) {

//   return (
//     <>

//     </>
//   );
// }

// export default Modal;
