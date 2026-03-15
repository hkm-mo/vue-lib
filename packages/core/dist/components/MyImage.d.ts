/**
 * An image component that renders an HTML img element with configurable source, alt text, width, and height.
 * It provides a convenient way to display images with optional dimension controls.
 */
interface MyImageProps {
    /** The source URL */
    src: string;
    /** The alt text for the image. */
    alt: string;
    /** The width of the image. Default is 'auto'. */
    width?: string;
    /** The height of the image. Default is 'auto'. */
    height?: string;
}
declare const _default: import('vue').DefineComponent<MyImageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<MyImageProps> & Readonly<{}>, {
    width: string;
    height: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLImageElement>;
export default _default;
