import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Message, { MessageData } from "./Message";
import DateSeparator from "./DateSeparator";

interface MessageListItem {
	type: "message" | "date";
	data: MessageData | string;
	id: string;
	showAvatar?: boolean;
}

interface MessageListProps {
	messages: MessageData[];
	onScroll?: () => void;
}

export default function MessageList({ messages, onScroll }: MessageListProps) {
	// Group messages by date and add date separators
	const groupedItems: MessageListItem[] = [];
	let currentDate = "";
	let lastUserId = "";
	let lastMessageTime = "";

	messages.forEach((message, index) => {
		const messageDate = new Date(message.timestamp).toDateString();

		// Add date separator if date changed
		if (messageDate !== currentDate) {
			currentDate = messageDate;
			groupedItems.push({
				type: "date",
				data: messageDate,
				id: `date-${messageDate}`,
			});
		}

		// Check if we should show avatar (different user or time gap > 5 minutes)
		const messageTime = new Date(message.timestamp).getTime();
		const lastTime = new Date(lastMessageTime).getTime();
		const timeDiff = (messageTime - lastTime) / (1000 * 60); // minutes

		const showAvatar = message.userId !== lastUserId || timeDiff > 5;

		groupedItems.push({
			type: "message",
			data: message,
			id: message.id,
			showAvatar,
		});

		lastUserId = message.userId;
		lastMessageTime = message.timestamp;
	});

	const renderItem = ({ item }: { item: MessageListItem }) => {
		if (item.type === "date") {
			return <DateSeparator date={item.data as string} />;
		}

		return <Message message={item.data as MessageData} showAvatar={item.showAvatar !== false} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={groupedItems}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				style={styles.list}
				showsVerticalScrollIndicator={false}
				onScroll={onScroll}
				inverted
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#36393f",
	},
	list: {
		flex: 1,
	},
});
