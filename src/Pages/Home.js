import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  addList,
  deleteList,
  getList,
  getSingleList,
  updateList,
} from "../Redux/CRUD/AsyncAction";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import AddUser from "./AddUser";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const Home = () => {
  const res = useSelector((y) => y.user);
  const resChange = useSelector((y) => y.user.addReq);
  const dis = useDispatch();
  const handleDelete = (e) => {
    dis(deleteList(e));
  };
  const [open, setOpen] = React.useState(false);
  const [openL, setOpenL] = React.useState(false);

  const handleClickOpen = (data) => {
    if (data === false) {
      setOpen(true);
      setOpenL(false);

    } else {
      setOpen(true);
      setOpenL(true);
      dis(getSingleList(data));

    }
  };

  const Save_data = (data,reason) => {

    if (reason === "backdropClick") {
      return;
    }

    if (data === false) {
      setOpen(false);
    }else if(reason !== undefined){
      dis(updateList(data,reason))
      setOpen(false);
    } else {
      dis(addList(data));
      setOpen(false);
    }
  };

  React.useEffect(() => {
    dis(getList());
  }, [resChange]);

  return (
    <>
      <Typography margin="10px" align="right">
        <Button
          className=""
          variant="contained"
          color="primary"
          onClick={() => handleClickOpen(false)}
        >
          Add User
        </Button>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Created Time</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {res &&
              res.data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.title}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.createdAt}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        "& > *": {
                          m: 1,
                        },
                      }}
                    >
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                      >
                        <Button
                          color="primary"
                          onClick={() => handleClickOpen(row.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => handleDelete(row.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddUser open={open} openL={openL} close={Save_data} />
    </>
  );
};

export default Home;
