class Hello extends React.Component {
    render() {
        return (
            <ul>{
                this.props.children.map(function (child) {
                    return <li>{child}</li>
                })
            }</ul>
        );
    }
};

React.render(
    <Hello>
        <span>Maria</span>
        <span>Peter</span>
        <span>John</span>
    </Hello>,
    document.getElementById('app')
);
