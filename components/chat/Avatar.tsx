import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface AvatarProps {
	imageUrl: string;
	size?: number;
	isOnline?: boolean;
	hasNotification?: boolean;
}

export default function Avatar({ imageUrl, size = 50, isOnline, hasNotification }: AvatarProps) {
	return (
		<View style={[styles.container, { width: size, height: size }]}>
			<Image source={{ uri: imageUrl }} style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]} />

			{isOnline && (
				<View
					style={[
						styles.statusIndicator,
						styles.onlineStatus,
						{
							width: size * 0.3,
							height: size * 0.3,
							borderRadius: size * 0.15,
							bottom: size * 0.05,
							right: size * 0.05,
						},
					]}
				/>
			)}

			{hasNotification && (
				<View
					style={[
						styles.statusIndicator,
						styles.notificationBadge,
						{
							width: size * 0.4,
							height: size * 0.4,
							borderRadius: size * 0.2,
							top: -size * 0.1,
							right: -size * 0.1,
						},
					]}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
	},
	avatar: {
		backgroundColor: "#36393f",
	},
	statusIndicator: {
		position: "absolute",
		borderWidth: 3,
		borderColor: "#2f3136",
	},
	onlineStatus: {
		backgroundColor: "#43b581",
	},
	notificationBadge: {
		backgroundColor: "#f04747",
	},
});
