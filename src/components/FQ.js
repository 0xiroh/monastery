import React from 'react'
import { Link } from 'react-router-dom'
import Faqs from './Faqs'

function FQ() {
  return (
    <div className='mt-60 sm:mt-4'>
        <h1 className='text-white text-4xl block text-center font-extrabold my-12'>FAQ'S</h1>
        <Faqs q="1.	What is an NFT?" a={<p>NFT stands for non-fungible-token. <a className='none' href='https://www.forbes.com/advisor/investing/cryptocurrency/nft-non-fungible-token/'>An NFT is a digital asset that represents real-world objects like art, music, in-game items, and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos.</a> NFTs can be used to represent ownership of unique items; they allow tokenizing things like art, collectibles, and even real estate. They can only have one official owner at a time and they're secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence.</p>}/>
        <Faqs q="2.	Why the Ethereum blockchain?" a="
Because the Ethereum blockchain is the most used, robust, diverse, and reliable blockchain and the first one that introduced smart contracts for their transactions. Also, it was the original blockchain to mint NFTs, back in 2014.
"/>
        <Faqs q="3.	What is minting an NFT?" a="Minting an NFT is uniquely publishing the token on the blockchain to make it purchasable. Imagine, minting a coin. By minting, the digital asset or file is stored on the blockchain, this way, it can be bought and sold in any crypto market."/>
        <Faqs q="4.	How to mint the Gyatso cap?" a="On the day and time of the sale, on monasterynft.com, the MINT NFT button will be available for all the clients interested in purchasing the Gyatso NFT. By clicking the button, you’ll be redirected to your MetaMask wallet to make the transaction of the NFT - remember that the transaction also includes the fee. For more information about the MetaMask wallet, go to question 5."/>
        <Faqs q="5.	What is a MetaMask wallet?" a="MetaMask is a cryptocurrency wallet that enables users to access the Web 3 ecosystem of decentralized applications (dapps). MetaMask allows to buy, sell or transfer assets on the blockchain. With MetaMask, you can access the DeFi ecosystem, non-fungible tokens (NFTs), ERC-20 tokens, and practically–everything based on the Ethereum blockchain. 
The MetaMask wallet is available as a browser extension or as a mobile app. 
"/>
        <Faqs q="6.	What are the fees for a transaction?" a="The blockchain fee also called the miners' fee is a blockchain transaction fee that is charged to users when performing any transaction using a specific blockchain. The fee is proportional to the number of transactions at any given moment, that’s why, during times of heavy use of the Ethereum blockchain, these fees can be higher than in times of low use. Because of this, please note that you must always have enough balance (ETH) in your MetaMask wallet to cover the transaction (price) and the fee associated with it."/>
        <Faqs q="7.	Where can I see the previous work of RMA?" a={<div>You can check Alejandros portfolio, including his NFT designs, on his official website: <Link className='text-[#B2FF97]' to="https://www.rmadesign.tv/">rmadesign.tv</Link></div>}/>
        <Faqs q="8. What’s the price of the Gyatso NFT cap?" a="400 USD$"/>
        <Faqs q="9. When is the sale of the Gyatso NFT cap?" a="The sale will be on the fourth week of June 2022 on monasterynft.com."/>
        <Faqs q="10. How many Gyatso NFT’s can I buy?" a="Each wallet can mint a maximum of 6 Gyatsos caps."/>
        <Faqs q="11. What are the benefits of owning a Gyatso Cap?" a="Five pieces of MONASTERY clothing. Two NFTs, one for Decentraland and one from the RMA Collection. Also, as part of the lavish MST lifestyle, two exclusive parties will welcome the VIP Gyatso holders to the MONASTERY World.

1.	(20%) The physical Gyatso cap and its equivalent NFT in the Decentraland metaverse (MANA).
2.	(35%) Claim 3 extra items of exclusive MST merchandise.
3.	(50%) Unique invitations will be given through a raffle to visit Medellin and MST headquarters, as well as events, restaurants, parties, and experiences.
4.	(65%) Rise your networking with MST, all the web 3.0 ecosystem in one place, Medellin.
Only for the Gytaso holders.
5.	(75%) An additional MONASTERY merch inspired by the metaverse and blockchain development ONLY for Gyatso NFT holders.
6.	(80%) Participation in the lottery to win the right to create a new MONASTERY cap with RMA.
7.	(95%) Become eligible for Monastery Avatars and MST tokenization.
8.	(100%) Exclusive entry to the Monastery Festival. This will be a festival in Cartagena, Colombia, with a concert on a private beach, a big party, models, fun, VIP artists, and of course, only for Gyatso NFT holders.
"/>
        <Faqs q="12. Where can I sell my Gyatso NFT?" a="At any NFT marketplace that supports Ethereum, such as OpenSea, Rarible or LooksRare."/>
    </div>
  )
}

export default FQ