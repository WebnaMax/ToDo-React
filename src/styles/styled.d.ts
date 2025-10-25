import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		name: string;
		colors: {
			backgroundPrimary: string;
			backgroundSecondary: string;
		};
	}
}
