import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SearchBarProps {
	placeholder?: string;
	onSearch?: (text: string) => void;
}

export default function SearchBar({ placeholder = "Add Friends", onSearch }: SearchBarProps) {
	return (
		<View style={styles.container}>
			<FontAwesome name="search" size={16} color="#72767d" style={styles.searchIcon} />
			<TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#72767d" onChangeText={onSearch} />
			<FontAwesome name="user-plus" size={16} color="#72767d" style={styles.addIcon} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#202225",
		margin: 16,
		paddingHorizontal: 12,
		paddingVertical: 10,
		borderRadius: 8,
	},
	searchIcon: {
		marginRight: 8,
	},
	input: {
		flex: 1,
		color: "#dcddde",
		fontSize: 16,
	},
	addIcon: {
		marginLeft: 8,
	},
});
