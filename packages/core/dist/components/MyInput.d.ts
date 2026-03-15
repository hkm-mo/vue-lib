/**
 * A button component that displays customizable text and emits a click event.
 * It serves as a reusable UI element for triggering actions in the application.
 */
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * The text to display inside the button.
     *
     * If not provided, the component renders a default label.
     *
     * @type {string}
     * @default 'Default Label'
     */
    label: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "click"[], "click", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * The text to display inside the button.
     *
     * If not provided, the component renders a default label.
     *
     * @type {string}
     * @default 'Default Label'
     */
    label: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    label: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
