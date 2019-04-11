import * as React from 'react';

import { getImage, showImgAvai,  } from '../../../redux/define-action-reducer-in-redux';
import store from '../../../redux/create-store'


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
        this.props.dispatch(getImage())
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
