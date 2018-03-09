import { StyleSheet, PixelRatio } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
	headerContainer: {
		position: "relative",
	},
	headerTitle: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: PixelRatio.getPixelSizeForLayoutSize(18) / PixelRatio.get(),
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	headerIcon: {
		width: PixelRatio.getPixelSizeForLayoutSize(30) / PixelRatio.get(),
    resizeMode: "contain",
	}
});
export default styles;
