
		import * as React from 'react';

		export const ChevronLeftIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
			return <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>;
		});

		ChevronLeftIcon.displayName = 'ChevronLeftIcon'

    export default ChevronLeftIcon;
