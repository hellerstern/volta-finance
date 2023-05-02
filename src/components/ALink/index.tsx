import { styled } from '@mui/system';

interface ALinkProps {
  link: string;
  children: React.ReactNode;
}

export const ALink = (props: ALinkProps) => {
  const { link, children } = props;
  return (
    <ALinkContainer href={link} rel="noopenner noreferrer" target="_blank">
      {children}
    </ALinkContainer>
  );
};

const ALinkContainer = styled('a')(({ theme }) => ({
  outline: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#ffffff'
}));
