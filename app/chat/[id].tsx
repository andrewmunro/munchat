import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import MessageInput from "@/components/chat/MessageInput";
import { MessageData } from "@/components/chat/Message";

const mockMessages: MessageData[] = [
	{
		id: "1",
		userId: "synergies",
		userName: "synergies",
		userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
		content: "Fuck all that\n\nI mean alternatively could just chill and play games or something",
		timestamp: "2025-06-13T09:58:00Z",
	},
	{
		id: "2",
		userId: "ben",
		userName: "Ben",
		userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
		content: "i mean thats not as good for head clearing\n\nplus can do that after the hike",
		timestamp: "2025-06-13T10:06:00Z",
		isEdited: true,
	},
	{
		id: "3",
		userId: "synergies",
		userName: "synergies",
		userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
		content: "Where you end up",
		timestamp: "2025-06-17T12:05:00Z",
	},
	{
		id: "4",
		userId: "ben",
		userName: "Ben",
		userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
		content: "House of fu\n\nOnly just ordered",
		timestamp: "2025-06-17T12:05:00Z",
	},
	{
		id: "5",
		userId: "synergies",
		userName: "synergies",
		userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
		content: "ah ok, no worries Ill sort myself",
		timestamp: "2025-06-17T12:06:00Z",
	},
	{
		id: "6",
		userId: "ben",
		userName: "Ben",
		userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
		content: "😔\n\nWe got food later also",
		timestamp: "2025-06-17T12:06:00Z",
	},
	{
		id: "7",
		userId: "synergies",
		userName: "synergies",
		userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
		content: "Why the sad face 😊\n\nYee gonna grab something quick",
		timestamp: "2025-06-17T12:06:00Z",
	},
	{
		id: "8",
		userId: "ben",
		userName: "Ben",
		userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
		content: "Coolio",
		timestamp: "2025-06-17T12:06:00Z",
	},
];

export default function ChatDetailScreen() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	const insets = useSafeAreaInsets();

	const handleBackPress = () => {
		router.back();
	};

	const handleCallPress = () => {
		console.log("Call pressed");
	};

	const handleVideoPress = () => {
		console.log("Video call pressed");
	};

	const handleSendMessage = (message: string) => {
		console.log("Send message:", message);
	};

	const handleAttachPress = () => {
		console.log("Attach pressed");
	};

	const handleGamePress = () => {
		console.log("Game pressed");
	};

	const handleGiftPress = () => {
		console.log("Gift pressed");
	};

	const handleEmojiPress = () => {
		console.log("Emoji pressed");
	};

	const handleMicPress = () => {
		console.log("Mic pressed");
	};

	return (
		<View style={[styles.container, { paddingTop: insets.top }]}>
			<StatusBar style="light" backgroundColor="#2f3136" />

			<ChatHeader
				userName="Ben"
				userAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
				isOnline={false}
				onBackPress={handleBackPress}
				onCallPress={handleCallPress}
				onVideoPress={handleVideoPress}
			/>

			<MessageList messages={mockMessages} />

			<MessageInput
				placeholder="Message @Ben"
				onSendMessage={handleSendMessage}
				onAttachPress={handleAttachPress}
				onEmojiPress={handleEmojiPress}
				onMicPress={handleMicPress}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#36393f",
	},
});
