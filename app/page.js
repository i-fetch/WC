import ConnectWalletButton from "@/components/ConnectWalletButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <h2 className="text-4xl font-bold mb-6">Welcome to My Web3 App</h2>
      <p className="text-gray-300 mb-8">Connect your wallet to get started</p>
      <ConnectWalletButton />
    </div>
  );
}
