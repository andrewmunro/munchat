import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";

export interface ChatData {
	id: string;
	name: string;
	lastMessage: string;
	timestamp: string;
	avatar: string;
	isOnline?: boolean;
	hasNotification?: boolean;
	isGroup?: boolean;
	participants?: string[];
}

interface ChatItemProps {
	chat: ChatData;
	onPress?: (chatId: string) => void;
}

export default function ChatItem({ chat, onPress }: ChatItemProps) {
	const handlePress = () => {
		onPress?.(chat.id);
	};

	return (
		<TouchableOpacity style={styles.chatItem} onPress={handlePress} activeOpacity={0.7}>
			<Avatar imageUrl={chat.avatar} size={50} isOnline={chat.isOnline} hasNotification={chat.hasNotification} />

			<View style={styles.chatContent}>
				<View style={styles.chatHeader}>
					<Text style={styles.chatName} numberOfLines={1}>
						{chat.name}
					</Text>
					<Text style={styles.timestamp}>{chat.timestamp}</Text>
				</View>

				<Text style={styles.lastMessage} numberOfLines={1}>
					{chat.lastMessage}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	chatItem: {
		flexDirection: "row",
		padding: 16,
		alignItems: "center",
		backgroundColor: "#2f3136",
		borderBottomWidth: 1,
		borderBottomColor: "#202225",
	},
	chatContent: {
		flex: 1,
		marginLeft: 12,
	},
	chatHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 4,
	},
	chatName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#dcddde",
		flex: 1,
	},
	timestamp: {
		fontSize: 12,
		color: "#72767d",
	},
	lastMessage: {
		fontSize: 14,
		color: "#b9bbbe",
	},
});
