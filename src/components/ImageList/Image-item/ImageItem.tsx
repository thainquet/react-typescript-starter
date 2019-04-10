import * as React from 'react';

import { addImg, removeImg,  } from '../../../redux/define-action-reducer-in-redux';

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

    addImage = () => {
        this.props.dispatch(addImg(this.props.item.url))
    }

    render() {
        const { item } = this.props;
        return (
            <li className='Image-list__item'>
                {item.url}
            </li>
        );
    }
}

export default ImageItem;
