import { createGlobalStyle } from 'styled-components';

const xs = {
  min: '(min-width: 0px)',
  max: '(max-width: 449px)',
};

const sm = {
  min: '(min-width: 450px)',
  max: '(max-width: 767px)',
};

const md = {
  min: '(min-width: 768px)',
  max: '(max-width: 1023px)',
};

const lg = {
  min: '(min-width: 1024px)',
  max: '(max-width: 2000px)',
};

const GlobalStyle = createGlobalStyle`
	 @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&family=Open+Sans&display=swap');
	:root {
    --font-size: 14px;
		--font-family: 'Baloo Tamma 2', 'Roboto';
    --padding: 8px;
		--margin: 8px;
		--text-primary:#333;
		--primary: #8769b9;
		--secondary: #e91e63;
		--dark-pink: #34077e;
		--bold-focus: #3411aa;
		--pink: #8769b9;
		--light: #FFFFFF;
		--dark: #050220;
		--dim-dark: #404040;
		--theme: #CAB328;
	}
  body {
		color:var(--text-primary);
		font-weight:300;
		font-family:  var(--font-family);
		padding:0;
		margin:0;
	}
	button{
		font-weight:300;
		cursor:pointer;
		padding: 0.7em;
		border: 0;
	}
	a {
		cursor:pointer
	}
	.active {
		background:#fff;
	}

	.ant-form-item-has-error .ant-checkbox {
		border: thin solid red;
    border-radius: 3px;
	}
`;

const Breakpoints = {
  xs,
  sm,
  md,
  lg,
};

export { GlobalStyle, Breakpoints };
