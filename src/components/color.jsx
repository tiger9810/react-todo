// export const Color = (props) => {
// いきなり分割代入を使っているので、propsを引数に渡す必要がなくなる
export const Color = ({ color, message }) => {
    // codeの最初で分割代入することで、props.colorをcolorに、props.messageをmessageに変更している
    //分割代入する際は、propsの中にあるkeyと同じ名前をつける必要がある
    // const { color, message } = props;
    const contentStyle = {
        color,
        fontSize: "18px",
      };

    return <p style={contentStyle}>{message}</p>;
};