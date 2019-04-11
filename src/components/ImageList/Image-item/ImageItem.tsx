import * as React from 'react';

import { showImgAvai,  } from '../../../redux/define-action-reducer-in-redux';

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
        this.props.dispatch(showImgAvai())
    }

    render() {
        const { item } = this.props;
        return (
            <li className='Image-list__item'>
                <img src={item.url} alt=""/>
            </li>
        );
    }
}

export default ImageItem;
