import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formData: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    padding: "20px",
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },

  list: {
    height: "75vh",
    overflow: "auto",
  },
}));
