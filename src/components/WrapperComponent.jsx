"use client";

import WalletManager from "@/components/WalletManager";
import {
	darkTheme,
	getDefaultWallets,
	RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);

const { connectors } = getDefaultWallets({
	appName: "GSB Genç Blokzincir Hackathon Project",
	projectId: "YOUR_PROJECT_ID",
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
});

export default function WrapperComponent({ children }) {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider
				chains={chains}
				theme={darkTheme({
					accentColor: "var(--color-accent)",
				})}
				locale="tr-TR"
			>
				<WalletManager />
				{children}
			</RainbowKitProvider>
		</WagmiConfig>
	);
}
