<template>
	<section class="m-auto 2xl:w-[70%] md:w-[80%] w-[90%] py-12 pt-24 overflow-hidden">
		<div class="md:text-4xl text-2xl font-bold mb-8">{{ $t('home.howItWorks') }}</div>
		<div class="bg-[#161616] md:p-14 p-4 grid md:grid-cols-3 grid-cols-1 md:gap-12">
			<NuxtImg src="/img/home/one.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			<div class="flex flex-col justify-center col-span-2 pr-6 right-scroll-animation">
				<div class="wtit">Bridging</div>
				<div class="text-base mt-6">Users transfer BTC to a bridge-controlled address, triggering the protocol to lock equal sBTC value on Solana, ensuring secure and transparent transactions via decentralized verification and smart contracts.</div>
			</div>
			<div class="flex flex-col justify-center col-span-2 md:pl-12 left-scroll-animation">
				<div class="wtit">BTC Usage and Transfer</div>
				<div class="text-base mt-6">After bridging and converting BTC to sBTC, users gain seamless access to utilize sBTC across the Solana ecosystem, enabling transactions, DeFi investments, NFT acquisitions, and gaming participation.</div>
			</div>
			<NuxtImg src="/img/home/two.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			<NuxtImg src="/img/home/three.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			<div class="flex flex-col justify-center col-span-2 pr-6 right-scroll-animation">
				<div class="wtit">BTC Redemption & Ownership</div>
				<div class="text-base mt-6">To revert sBTC to BTC, users redeem through the bridging protocol, sending sBTC to be burned or locked, releasing equivalent BTC to their chosen Bitcoin address.</div>
			</div>

			<div class="flex flex-col justify-center col-span-2 md:pl-12 left-scroll-animation">
				<div class="wtit">Decentralized Bridging Protocol</div>
				<div class="text-base mt-6">Securely monitors and verifies cross-chain asset transfers, ensuring one-to-one correspondence between BTC and sBTC.</div>
			</div>
			<NuxtImg src="/img/home/four.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			<NuxtImg src="/img/home/five.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			<div class="flex flex-col justify-center col-span-2 pr-6 right-scroll-animation">
				<div class="wtit">Smart Contract</div>
				<div class="text-base mt-6">Executes asset locking, release, and token issuance on Solana.</div>
			</div>
			<div class="flex flex-col justify-center col-span-2 md:pl-12 left-scroll-animation">
				<div class="wtit">Node Validation</div>
				<div class="text-base mt-6">Monitors and confirms the authenticity and validity of cross-chain transactions, ensuring decentralized operations and security.</div>
			</div>
			<NuxtImg src="/img/home/six.png" class="md:w-[23vw] w-full h-auto bottom-scroll-animation"/>
			
		</div>
	</section>
</template>

<style lang="scss" scoped>
.wtit{
	position: relative; font-size: 28px; z-index: 1; width: fit-content;
	&:after{
		content: ""; display: block; position: absolute; left: -8px; bottom: 0; width: calc(100% + 40px); height: 16px; background-color: rgba(29, 19, 175, 1); z-index: -1;
	}	
}
</style>