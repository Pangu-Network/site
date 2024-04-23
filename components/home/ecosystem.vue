<template>
	<section class="m-auto md:w-[70%] w-[90%] md:pt-36 pt-20 md:pb-40 pb-14">
		<div class="md:text-4xl text-2xl font-bold mb-4">Building Disney World On Chain Made Possible</div>

       	<div class="mt-8 eco-item bottom-scroll-animation">
       		<div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2">
       			<NuxtImg src="/img/home/eco-logo1.png" />
       		</div>
   			<div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit">Daydreams Reshape the New World</div>
   			<div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32">
   				<div class="text-2xl">DDream.LAND</div>
   				<div class="text-[#cccccc] text-base mt-4">DDream.Land is a blockchain-powered platform that enables game creation from idea to reality through co-creation, connects original game creators with DLC/Mod creators for collaborative distribution, and supports game tokenization and profit sharing.</div>
   			</div>
       	</div>

       	<div class="mt-8 eco-item bottom-scroll-animation r">
       		<div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2">
       			<NuxtImg src="/img/home/eco-logo2.png" />
       		</div>
   			<div class="text-2xl text-[#111111] font-bold md:mr-48 px-6 py-7 tit md:text-right">The Era of Digital Symbiosis</div>
   			<div class="con py-8 md:pl-12 md:mr-[75px] md:pr-32">
   				<div class="flex items-center">
   					<div class="text-2xl flex-1">Nuwa Labs</div>
   					<div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico1.png" />
   					</div>
   					<div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico2.png" />
   					</div>
   					<div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico3.png" />
   					</div>
   					<div class="imgico flex items-center justify-center ml-4 cursor-pointer transition-[transform] hover:scale-105">
   						<NuxtImg src="/img/home/eco-ico4.png" />
   					</div>
   				</div>
   				<div class="text-[#cccccc] text-base mt-4">Nuwa Labs is building the abstraction layer of digital life technologies with the mission of enabling digital beings to thrive everywhere. To achieve such a mission, Nuwa Labs is launching 3 products: HomoDeus Protocol, Nuwa Creation Platform, role.ai, and Nuwa Game Engine.</div>
   			</div>
       	</div>

       	<div class="mt-12 eco-item bottom-scroll-animation">
       		<div class="md:absolute w-44 h-44 ico flex items-center justify-center cursor-pointer transition-[transform] ease-in-out hover:-translate-y-2">
       			<NuxtImg src="/img/home/eco-logo1.png" />
       		</div>
   			<div class="text-2xl text-[#111111] font-bold md:ml-48 px-6 py-7 tit">BTC to Solana, Seamlessly</div>
   			<div class="con py-8 md:pr-12 md:ml-[89px] md:pl-32">
   				<div class="text-2xl">Axe</div>
   				<div class="text-[#cccccc] text-base mt-4">Axe stands as the pioneering DeFi solution within the Pangu Network ecosystem, designed to revolutionize the seamless transfer of BTC liquidity onto the Solana blockchain. With its innovative architecture and robust infrastructure, Axe not only facilitates the smooth transition of assets but also fosters a vibrant ecosystem where users can explore new opportunities and harness the full potential of cross-chain interoperability.</div>
   			</div>
       	</div>

       
	</section>
</template>

<style lang="scss" scoped>
.eco-item{
	position: relative;
	&.r{
		.ico{
			right: 0; left: auto;
		}
	}
	.ico{
		left: 0; top: 0; background: linear-gradient(180deg, #1a1a1a 0%, #1d1d1d 100%); border: 1px solid; border-image-source: linear-gradient(180deg, #161616 0%, #1d1d1d 100%); border-radius: 2px; z-index: 2;
	}
	.tit{
		text-shadow: -1px -1px 0 #666666, 1px -1px 0 #666666, -1px 1px 0 #666666, 1px 1px 0 #666666, 0 0 5px #000;
	}
	.imgico{
		width: 40px; height: 40px; background: linear-gradient(222.1deg, rgba(138, 255, 212, 0.12) 11.5%, rgba(138, 255, 212, 0.06) 110.51%); border-radius: 1px;
	}
	.con{
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%); border-radius: 2px; z-index: 1;
	}
}
</style>