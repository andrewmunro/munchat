import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface MessageInputProps {
	placeholder?: string;
	onSendMessage?: (message: string) => void;
	onAttachPress?: () => void;
	onEmojiPress?: () => void;
	onMicPress?: () => void;
}

export default function MessageInput({ placeholder = "Message @Ben", onSendMessage, onAttachPress, onEmojiPress, onMicPress }: MessageInputProps) {
	const [message, setMessage] = useState("");

	const handleSend = () => {
		if (message.trim()) {
			onSendMessage?.(message.trim());
			setMessage("");
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onAttachPress} style={styles.iconButton}>
				<FontAwesome name="plus" size={20} color="#b9bbbe" />
			</TouchableOpacity>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder={placeholder}
					placeholderTextColor="#72767d"
					value={message}
					onChangeText={setMessage}
					multiline
					maxLength={2000}
					onSubmitEditing={handleSend}
				/>
			</View>

			<TouchableOpacity onPress={onEmojiPress} style={styles.iconButton}>
				<FontAwesome name="smile-o" size={20} color="#b9bbbe" />
			</TouchableOpacity>

			<TouchableOpacity onPress={onMicPress} style={styles.iconButton}>
				<FontAwesome name="microphone" size={20} color="#b9bbbe" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "flex-end",
		backgroundColor: "#2f3136",
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderTopWidth: 1,
		borderTopColor: "#202225",
	},
	iconButton: {
		marginHorizontal: 8,
		paddingVertical: 8,
	},
	inputContainer: {
		flex: 1,
		backgroundColor: "#40444b",
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginHorizontal: 8,
		minHeight: 40,
		maxHeight: 120,
	},
	textInput: {
		color: "#dcddde",
		fontSize: 15,
		textAlignVertical: "center",
	},
});
