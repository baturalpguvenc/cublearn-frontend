"use client";

import { CubLearn, DTLToken } from "@/contracts";
import { useEffect } from "react";
import {
	useAccount,
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
	useWalletClient,
} from "wagmi";

export default function DTLDisplay() {
	const { address } = useAccount();
	const { data: walletClient } = useWalletClient();

	const getMyBalance = useContractRead({
		address: DTLToken.address,
		abi: DTLToken.abi,
		functionName: "getMyBalance",
		account: walletClient?.account,
	});

	const getAllowanceOfSpender = useContractRead({
		address: DTLToken.address,
		abi: DTLToken.abi,
		functionName: "getAllowanceOfSpender",
		args: [CubLearn.address],
		account: walletClient?.account,
	});

	const { config: approveMaxConfig } = usePrepareContractWrite({
		address: DTLToken.address,
		abi: DTLToken.abi,
		functionName: "approveMax",
		args: [CubLearn.address],
	});
	const approveMax = useContractWrite(approveMaxConfig);

	useEffect(() => {
		const interval = setInterval(() => getMyBalance.refetch(), 2000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (address) {
			getMyBalance.refetch();
		}
	}, [address]);

	return !getAllowanceOfSpender.data || getAllowanceOfSpender.data === 0n ? (
		<button
			type="button"
			className="btn btn-primary"
			onClick={() => approveMax.write?.() && getAllowanceOfSpender.refetch()}
		>
			APPROVE!!!
		</button>
	) : (
		<button type="button" className="btn btn-flat" disabled>
			{parseInt(getMyBalance.data)} DTL
		</button>
	);
}
