import React,  {Component} from 'react';

class ListItems extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        itemList: this.props.itemAray
    }

    render() {
        return(
            this.state.itemList.map(itm => {
                <li>{{itm}}</li>
            })
        )
    }
}

export default ListItems;
