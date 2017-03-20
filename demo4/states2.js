var FormApp = React.createClass({
    getInitialState:function(){
        return {
            inputValue: 'input value',
            selectValue: 'A',
            radioValue: 'B',
            textarreaValue: 'ssome text here,,,,,'
        }
    },
    render: function(){
        return (
            <form>
                <input type="text" defaultValue="default value" /><br/>
                <select defaultValue="B">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                </select>
                <br/>
                <p>radio button!</p>
                <input name="goodRadio" type="radio" value="A"/>
                <input name="goodRadio" type="radio" defaultchecked value="B"/>
                <input name="goodRadio" type="radio" value="C"/>
                <input name="goodRadio" type="checkbox" value="D"/>
                <input name="goodRadio" type="checkbox" value="E"/>
                <input name="goodRadio" type="checkbox" defaultchecked value="F"/>
                <br/>
                <textarea defaultValue="some text here again...."></textarea>
            </form>
        )
    }
});



ReactDOM.render(
    <FormApp />,
    document.getElementById('container'),
    function (){
        console.log('渲染完成');
    }
);