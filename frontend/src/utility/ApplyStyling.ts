// Function applies css syling to event target

export function applyStyling(event: any, styles: React.CSSProperties): void {
    let style: keyof typeof styles

    for (style in styles) {
        event.target.style[style] = styles[style]
    }
}