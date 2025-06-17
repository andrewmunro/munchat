import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<>
			<StatusBar style="light" backgroundColor="#2f3136" />
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#5865f2",
					tabBarInactiveTintColor: "#72767d",
					tabBarStyle: {
						backgroundColor: "#2f3136",
						borderTopColor: "#202225",
					},
					headerStyle: {
						backgroundColor: "#2f3136",
					},
					headerTintColor: "#dcddde",
					headerShown: useClientOnlyValue(false, true),
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Messages",
						tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
						headerTitle: "Messages",
					}}
				/>
				<Tabs.Screen
					name="two"
					options={{
						title: "You",
						tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
					}}
				/>
			</Tabs>
		</>
	);
}
