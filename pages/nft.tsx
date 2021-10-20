import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import NFTSectionOpenSea from '@/sections/NFTSectionOpenSea';

const NFT = () => {
    return (
        <Layout>
            <Navbar />
            <NFTSectionOpenSea />
            <Footer />
        </Layout>
    );
};

export default NFT;
