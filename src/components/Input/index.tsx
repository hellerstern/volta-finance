import { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface VoltaInputProps {
  icon?: React.ReactNode;
  value: string;
  setValue: (value: any) => void;
}

export const VoltaInput = (props: VoltaInputProps) => {
  const { icon, value, setValue } = props;
  const inputRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const [isVisit, setVisit] = useState(false);

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (inputRef.current != null && !inputRef.current.contains(event.target as any)) {
      setVisit(false);
    }
  };

  const handleClickInside = () => {
    setVisit(true);
    valueRef.current?.focus();
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
  }, [inputRef]);

  return (
    <VoltaInputContainer ref={inputRef} visited={isVisit ? 1 : 0} onMouseUp={() => handleClickInside()}>
      {icon !== undefined && icon}
      <VoltaInputField
        visited={isVisit ? 1 : 0}
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
      />
    </VoltaInputContainer>
  );
};

const VoltaInputContainer = styled(Box)<{ visited: number }>(({ theme, visited }) => ({
  width: '100%',
  height: '40px',
  backgroundColor: '#131418',
  borderRadius: '4px',
  padding: '9px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  border: visited === 1 ? '1px solid #00c9d0' : 'none'
}));

const VoltaInputField = styled('input')<{ visited: number }>(({ theme, visited }) => ({
  height: '100%',
  width: '100%',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  color: visited === 1 ? '#FFFFFF' : '#B1B5C3',
  fontSize: '14px'
}));
