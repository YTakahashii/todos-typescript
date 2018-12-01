//OwnProps: 親のReactコンポーネントから受け取るProps
export default interface ITodoOwnProps {
    onClick: () => void;
    completed: boolean;
    text: string;
}