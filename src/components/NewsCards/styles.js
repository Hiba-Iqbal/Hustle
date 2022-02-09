import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "65vh",
    padding: "10%",
    borderRadius: 10,
    color: "black",
    backgroundColor: "#242424",
  },
  // add color on focus
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
});
