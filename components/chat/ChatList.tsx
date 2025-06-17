import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ChatItem, { ChatData } from "./ChatItem";

interface ChatListProps {
	chats: ChatData[];
	onChatPress?: (chatId: string) => void;
}

export default function ChatList({ chats, onChatPress }: ChatListProps) {
	const renderChatItem = ({ item }: { item: ChatData }) => <ChatItem chat={item} onPress={onChatPress} />;

	return (
		<View style={styles.container}>
			<FlatList
				data={chats}
				renderItem={renderChatItem}
				keyExtractor={(item) => item.id}
				style={styles.list}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2f3136",
	},
	list: {
		flex: 1,
	},
});
