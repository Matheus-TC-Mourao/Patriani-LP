
		import * as React from 'react';

		export const XIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
			return <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 7 7 17M7 7l10 10"/></svg>;
		});

		XIcon.displayName = 'XIcon'

    export default XIcon;
