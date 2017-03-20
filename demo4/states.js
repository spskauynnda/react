var MessageBox = React.createClass({
    getInitialState: function (){
        return {
            isVisible: true,
            SubMessage: [
                '我很帅啊',
                '你为什么不喜欢我',
                '我很喜欢你啊',
            ]
        }
    },
    render: function (){
        var styleObj = {
            display: this.state.isVisible ? 'block' : 'none'
        };
        // var submessages = [];
        // for(var i=0; i<10; i++){
        //     submessages.push(
        //         <Submessage messages={this.state.SubMessage} key={i} />
        //     )
        // }
        return (
            <div>
                <h1 style={styleObj}>{this.props.title}</h1>
                <Submessage messages={this.state.SubMessage} />
            </div>
        )
    }
});

var Submessage = React.createClass({
    propTypes:{
        messages: React.PropTypes.array.isRequired,
    },
    getDefaultProps:function(){
        return  {
            messages: ['默认的子消息']
        }
    },
    render: function(){
        var msgs = [];
        this.props.messages.forEach(function(msg,index){
            msgs.push(
                <p>码农说： {msg}</p>
            )
        });
        return (
                <div>{msgs}</div>
        )
    }
});
var title = '你好哦';
ReactDOM.render(
    <MessageBox title={title}/>,
    document.getElementById('container'),
    function (){
        console.log('渲染完成！');
    }
);