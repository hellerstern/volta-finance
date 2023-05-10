import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface CommonSelectProps {
  arrayData: any;
  label: string;
  state: string;
  setState: any;
  width: number;
}

export function CommonSelect(props: CommonSelectProps) {
  const { arrayData, label, state, setState, width } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label={label}
          onChange={handleChange}
          sx={{
            border: '1px solid #1D1E1F',
            borderRadius: '6px',
            width: `${width}px`,
            fontSize: '14px',
            height: '40px'
          }}
        >
          {arrayData.map((item: any, index: number) => (
            <MenuItem key={index} value={item} sx={{ fontSize: '14px' }}>
              {item}
              {/* {state === item && <Check sx={{ height: '15px', width: 'auto', color: '#00EB88' }} />} */}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
