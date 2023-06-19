import Image from 'next/image';
import myImage from '../../public/kitten.jpeg';

export const MyComponent = () => (
  <Image src={myImage} alt="myImage" width={50} height={50} />
);
