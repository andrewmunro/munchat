import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DateSeparatorProps {
	date: string;
}

export default function DateSeparator({ date }: DateSeparatorProps) {
	return (
		<View style={styles.container}>
			<View style={styles.line} />
			<Text style={styles.dateText}>{date}</Text>
			<View style={styles.line} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
		paddingHorizontal: 16,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: "#42464d",
	},
	dateText: {
		color: "#72767d",
		fontSize: 12,
		fontWeight: "600",
		marginHorizontal: 16,
	},
});
