import Image from 'next/image';

const SloganSection = () => {
    return (
        <div>
            <h1 className="text-6xl">Homemade cakes</h1>
            <button></button>
            <Image src="/cake.png" alt="cake" width={500} height={500} />
        </div>
    );
};

export default SloganSection;
