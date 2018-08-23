import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#f7f7f7',
			paper: '#f1f1f1',
		},
		primary: {
      main: '#4B89DC',
      contrastText: '#fff',
		},
		secondary: {
      main: '#EA5946',
		},
		text: {
			primary: 'rgba(0,0,0, .92)',
			secondary: 'rgba(0,0,0, .52)',
		},
		action: {
			selected: '#dadada',
		}
	},
	overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
      },
		},
		MuiInput: {
			root: {
				color: 'rgba(0,0,0, .92)',
				fontSize: 15,
			},
			input: {
				padding: '8px 0 10px',
			},
			formControl: {
				marginTop: '20px !important',
			},
		},
		MuiFormLabel: {
			root: {
				'&$focused': {
					color: '#4B89DC',
				},
			},
		},
		MuiSelect: {
			icon: {
				color: 'rgba(0,0,0, .92)',
			},
		},
  },
});

export default theme