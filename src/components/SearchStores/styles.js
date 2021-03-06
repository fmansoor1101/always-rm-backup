import { StyleSheet } from "react-native";
import { getSizeWRTDeviceHeight, deviceHeight } from "../../utils";

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    backgroundColor: "#FFF",
    paddingBottom: getSizeWRTDeviceHeight(30),
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  scrollView: {
    height: deviceHeight - getSizeWRTDeviceHeight(82),
    backgroundColor: "#FFF",
  },
});

export default styles;
