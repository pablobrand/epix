import Link from 'next/link';
import { ASSET_URL, CHOSEN_THEME } from './constants'
import Container from '@/components/Container';
import { iframeResizer } from 'iframe-resizer'
const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`


const NFTSectionOpenSea = () => {
    const componentDidMount = () => {
        iframeResizer({ log: false }, '#opensea-iframe')
    }
    return (
        <section
            className="grid min-h-screen mt-20 mb-24 bg-no-repeat bg-contain text-white"
            style={{ backgroundImage: "url('/images/f-section-image.png')" }}
        >
            <Container>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5">
                        <h1 className="text-5xl pt-32">
                            <span className="block font-semibold">OpenSea Skulls NFT</span>
                        </h1>
                    </div>
                </div>
                <div className="grid">
                    <p className="text-xl font-medium mb-8">
                        This collection of Skulls NFTs is open for sale in the Ethereum blockchain. If you dont have a wallet, please click on the link below:
                    </p>
                    <p className="font-sans text-xl text-center"> <Link href="https://support.opensea.io/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea">Get a Wallet</Link></p>

                    <p>
                        <iframe id="opensea-iframe" title="Embedded OpenSea Marketplace" src={embeddedUrl} width='100%' height='900px' frameBorder='0' allowFullScreen></iframe>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default NFTSectionOpenSea;
