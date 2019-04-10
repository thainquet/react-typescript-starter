import * as React from 'react';

import { addImg, removeImg,  } from '../../../redux/tp.addimg.redux';

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
0
        this.removeImage = this.removeImage.bind(this);
    }

    removeImage() {
        this.props.dispatch(removeImg(this.props.item));
    }

    render() {
        const { item } = this.props;
        return (
            <li className='Image-list__item'>
                
            </li>
        );
    }
}

export default ImageItem;
