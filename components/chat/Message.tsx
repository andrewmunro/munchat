import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "./Avatar";

export interface MessageData {
	id: string;
	userId: string;
	userName: string;
	userAvatar: string;
	content: string;
	timestamp: string;
	isEdited?: boolean;
}

interface MessageProps {
	message: MessageData;
	showAvatar?: boolean;
}

export default function Message({ message, showAvatar = true }: MessageProps) {
	return (
		<View style={styles.container}>
			<View style={styles.avatarContainer}>
				{showAvatar ? <Avatar imageUrl={message.userAvatar} size={40} /> : <View style={styles.avatarPlaceholder} />}
			</View>

			<View style={styles.messageContent}>
				{showAvatar && (
					<View style={styles.messageHeader}>
						<Text style={styles.userName}>{message.userName}</Text>
						<Text style={styles.timestamp}>{message.timestamp}</Text>
					</View>
				)}

				<Text style={styles.messageText}>
					{message.content}
					{message.isEdited && <Text style={styles.editedText}> (edited)</Text>}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	avatarContainer: {
		marginRight: 12,
	},
	avatarPlaceholder: {
		width: 40,
		height: 40,
	},
	messageContent: {
		flex: 1,
	},
	messageHeader: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 4,
	},
	userName: {
		color: "#dcddde",
		fontSize: 16,
		fontWeight: "600",
		marginRight: 8,
	},
	timestamp: {
		color: "#72767d",
		fontSize: 12,
	},
	messageText: {
		color: "#dcddde",
		fontSize: 15,
		lineHeight: 20,
	},
	editedText: {
		color: "#72767d",
		fontSize: 12,
	},
});
