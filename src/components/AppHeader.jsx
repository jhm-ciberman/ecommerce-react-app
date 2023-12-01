import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

/**
 * Displays a header with a chevron icon on the left. A semantic HTML tag can be used with the `as` prop,
 * and can be displayed as a different size with the `size` prop.
 *
 * @param {Object} props
 * @param {string} props.tag The HTML tag to use for the header. Defaults to 'h1'.
 * @param {string} props.size How to display the header. Defaults to the same value as `tag`.
 * @param {string} props.children The text to display inside the header.
 * @param {string} props.className Additional classes to add to the header.
 * @param {Object} props.props Additional props to add to the header.
 * @returns
 */
export default function AppHeader({ tag, size, children, className, ...props }) {

    const Component = tag || size || 'h1';

    const classes = {
        'h1': {
            header: 'text-3xl tracking-wider',
            icon: 'w-8 h-8',
        },
        'h2': {
            header: 'text-2xl tracking-wider',
            icon: 'w-6 h-6'
        },
        'h3': {
            header: 'text-xl tracking-wider',
            icon: 'w-6 h-6',
        },
        'h4': {
            header: 'text-lg tracking-wider',
            icon: 'w-6 h-6',
        },
        'h5': {
            header: 'text-base tracking-wider',
            icon: 'w-6 h-6',
        },
        'h6': {
            header: 'text-base tracking-wider',
            icon: 'w-6 h-6',
        },
    };

    const displayClass = classes[size] || classes[tag] || classes['h1'];

    return (
        <Component
            className={`${displayClass.header} ${className} font-thin text-gray-700/90 `}
            {...props}
        >
            <ChevronDoubleRightIcon className={`${displayClass.icon} mr-4 inline-block h-8 w-8 text-primary-500`} />
            {children}
        </Component>
    );


}
