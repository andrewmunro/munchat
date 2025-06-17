import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Avatar from "./Avatar";

interface ChatHeaderProps {
	userName: string;
	userAvatar: string;
	isOnline?: boolean;
	onBackPress?: () => void;
	onCallPress?: () => void;
	onVideoPress?: () => void;
}

export default function ChatHeader({ userName, userAvatar, isOnline, onBackPress, onCallPress, onVideoPress }: ChatHeaderProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onBackPress} style={styles.backButton}>
				<FontAwesome name="arrow-left" size={20} color="#dcddde" />
			</TouchableOpacity>

			<View style={styles.userInfo}>
				<Avatar imageUrl={userAvatar} size={32} isOnline={isOnline} />
				<Text style={styles.userName}>{userName}</Text>
				<FontAwesome name="chevron-right" size={12} color="#72767d" />
			</View>

			<View style={styles.actions}>
				<TouchableOpacity onPress={onCallPress} style={styles.actionButton}>
					<FontAwesome name="phone" size={20} color="#dcddde" />
				</TouchableOpacity>
				<TouchableOpacity onPress={onVideoPress} style={styles.actionButton}>
					<FontAwesome name="video-camera" size={20} color="#dcddde" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#2f3136",
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#202225",
	},
	backButton: {
		marginRight: 16,
	},
	userInfo: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	userName: {
		color: "#dcddde",
		fontSize: 16,
		fontWeight: "600",
		marginLeft: 8,
		marginRight: 8,
	},
	actions: {
		flexDirection: "row",
	},
	actionButton: {
		marginLeft: 20,
	},
});
