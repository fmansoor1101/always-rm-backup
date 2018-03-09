import { Dimensions, StyleSheet, PixelRatio } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#000",
	},
	menuIcon: {
		width: PixelRatio.getPixelSizeForLayoutSize(30),
    resizeMode: "contain",
	},
	headerTitle: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: PixelRatio.getPixelSizeForLayoutSize(18),
	},
	backgroundImg: {
		flex: 1,
		resizeMode: "cover",
		position: "absolute",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	homeTabs: {
		padding: PixelRatio.getPixelSizeForLayoutSize(15),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		flexWrap: "wrap"
	},
	homeTab: {
		width: (deviceWidth - PixelRatio.getPixelSizeForLayoutSize(45)) / 2,
		height: (deviceWidth - PixelRatio.getPixelSizeForLayoutSize(45)) / 2,
		backgroundColor: "rgba(255,255,255,0.2)",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: PixelRatio.getPixelSizeForLayoutSize(15)
	},
	homeTabBright: {
		backgroundColor: "rgba(255,255,255,0.6)",
	},
	tabIcon: {
		width: PixelRatio.getPixelSizeForLayoutSize(45),
		height: PixelRatio.getPixelSizeForLayoutSize(45),
	},
	homeTabTxt: {
		color: "#fff",
		fontFamily: "Always_Font",
		fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
	},
});
export default styles;
