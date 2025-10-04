export const MailIcon = ({ size = 20, className = 'text-gray-400' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

export const LockIcon = ({ size = 20, className = 'text-gray-400' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

export const UserIcon = ({ size = 20, className = 'text-gray-400' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export const DumbbellIcon = ({ size = 24, className = 'text-green-400' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.4 14.4 9.6 9.6" />
        <path d="M18.8 20.4a2.12 2.12 0 0 0 2.99-3l-1.55-1.55a2.12 2.12 0 0 0-3-2.99l-1.55 1.55Z" />
        <path d="M5 5.5l1.5-1.5" />
        <path d="M8.5 2L7 3.5" />
        <path d="M17 14.5l-1.5 1.5" />
        <path d="M22 17l-1.5-1.5" />
        <path d="M14 10l-1.5-1.5" />
        <path d="M10 14l1.5 1.5" />
        <path d="M3.6 1.2l-2.4 2.4a2.12 2.12 0 0 0 3 3l2.4-2.4a2.12 2.12 0 0 0-3-3Z" />
    </svg>
);

export const LeftArrowIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
    </svg>
);

export const RightArrowIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
);

export const XIcon = ({ size = 24, className = 'text-white' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);