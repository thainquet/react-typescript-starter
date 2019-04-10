import * as React from 'react';

import { addImg, removeImg, showImgAvai,  } from '../../../redux/define-action-reducer-in-redux';
import store from '../../../redux/create-store'


console.log(store.getState())

export interface Image {
    id: string;
    url: string
}
interface ImageItemProps {
    item: Image;
    dispatch?: any;
}

class ImageItem extends React.Component<ImageItemProps, {}> {
    constructor(props: any) {
        super(props);
    }

    showImg = () => {
        // console.log(this.props.)
        this.props.dispatch(showImgAvai())
    }

    render() {
        const { item } = this.props;
        return (
            <li className='Image-list__item'>
                {this.showImg}
            </li>
        );
    }
}

export default ImageItem;
