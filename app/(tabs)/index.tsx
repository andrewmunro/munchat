import React from "react";
import { StyleSheet, View } from "react-native";
import ChatList from "@/components/chat/ChatList";
import SearchBar from "@/components/chat/SearchBar";
import { ChatData } from "@/components/chat/ChatItem";

const mockChats: ChatData[] = [
	{
		id: "1",
		name: "Ben, Linsey",
		lastMessage: "Linsey: 7:40 is movie",
		timestamp: "11m",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
		isOnline: true,
	},
	{
		id: "2",
		name: "Ben",
		lastMessage: "Ben: Coolio",
		timestamp: "3h",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
		isOnline: false,
	},
	{
		id: "3",
		name: "Lucas",
		lastMessage: "You: Haha I've seen this guy, he's done some co...",
		timestamp: "5h",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
		isOnline: true,
		hasNotification: true,
	},
	{
		id: "4",
		name: "Linsey",
		lastMessage: "You: 😊",
		timestamp: "16h",
		avatar: "https://images.unsplash.com/photo-1494790108755-2616c6d9e2b3?w=100&h=100&fit=crop&crop=face",
		isOnline: false,
	},
	{
		id: "5",
		name: "oscarfury",
		lastMessage: "You: 1 image 📷",
		timestamp: "16h",
		avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
		isOnline: false,
	},
	{
		id: "6",
		name: "Linsey, Ben, Lucas",
		lastMessage: "Ben: Haha",
		timestamp: "21h",
		avatar: "https://images.unsplash.com/photo-1494790108755-2616c6d9e2b3?w=100&h=100&fit=crop&crop=face",
		isGroup: true,
		participants: ["Linsey", "Ben", "Lucas"],
	},
	{
		id: "7",
		name: "Torben, oscarfury",
		lastMessage: "Torben: ❤️ Pappi, the burrito monger",
		timestamp: "1d",
		avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face",
		isGroup: true,
	},
	{
		id: "8",
		name: "Martin B",
		lastMessage: "You: https://youtu.be/zv_IoWlO5Ek",
		timestamp: "5d",
		avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
		isOnline: false,
	},
	{
		id: "9",
		name: "Josh",
		lastMessage: "Josh: Ohh shit",
		timestamp: "6d",
		avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
		isOnline: false,
	},
	{
		id: "10",
		name: "Team KOS",
		lastMessage: "You: TBF you can get started without us, w...",
		timestamp: "11d",
		avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=face",
		isGroup: true,
	},
];

export default function HomeScreen() {
	const handleChatPress = (chatId: string) => {
		console.log("Chat pressed:", chatId);
	};

	const handleSearch = (text: string) => {
		console.log("Search:", text);
	};

	return (
		<View style={styles.container}>
			<SearchBar onSearch={handleSearch} />
			<ChatList chats={mockChats} onChatPress={handleChatPress} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2f3136",
	},
});
