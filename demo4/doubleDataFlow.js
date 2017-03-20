var EasyForm = React.createClass({
    mixins: [ React.addons.LinkedStateMixin ],
    getInitialState: function(){
        return {
            message: 'react is awesome!',
            isReactAwesome: true
        }
    },
    render: function(){
        return (
            <div>
                <h1>我觉得 {this.state.message}</h1>
                <h1>你觉得React好用吗？ {this.state.isReactAwesome?'是啊很好用！':'是吗不觉得啊。。'} </h1>
                <input type="text" valueLink={this.linkState('message')} />
            </div>
        )
    }
});
ReactDOM.render(
    <EasyForm />,
    document.getElementById('container')
);
