import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const social = [
  { icon: <FaGithub />, path: 'https://github.com/KatoGraphix', label: 'GitHub' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/kurt-von-schaeffer-aa962180', label: 'LinkedIn' },
];

const Social = ({ containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
