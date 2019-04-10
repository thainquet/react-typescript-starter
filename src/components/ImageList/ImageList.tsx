import * as React from 'react';
import { connect } from 'react-redux';
import { addImg, getImage } from '../../redux/define-action-reducer-in-redux';
import { Image } from './Image-item/ImageItem';

import {
    Button,
    Col,
    Input,
    Row
} from 'reactstrap';
import ImageItem from './Image-item';

import  demoList from '../../api'

interface ImageListProps {
    ImageItemsList: Image[];
    dispatch: any;
}
interface ImageState {
    ImageName: string;
    [key: string]: any;
}

class ImageList extends React.Component<ImageListProps, ImageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: true,
            ImageName: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.submitImage = this.submitImage.bind(this);
        this.displayCompleted = this.displayCompleted.bind(this);
    }

    handleChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleKeyPress(e: any) {
        if (e.key === 'Enter') {
            this.submitImage();
        }
    }
    displayCompleted() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    submitImage() {
        if (this.state.ImageName.length) {
            this.props.dispatch(addImg(this.state.ImageName));
            this.setState({
                ImageName: '',
            });
            this.forceUpdate();
        }
    }
    

    componentWillMount() {
        this.props.dispatch(getImage());
    }

    render() {
        const { ImageItemsList, dispatch } = this.props;
        console.log(this.props)
        return (
            <div>
                <Row className='mt-4 mb-4'>
                    <Col sm={10}>
                        <Input
                            className='mb-sm-2'
                            name='ImageName'
                            value={this.state.ImageName}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                            autoFocus
                        />
                    </Col>
                    <Col sm={2}>
                        <Button
                            className='mb-sm-2'
                            color='primary'
                            onClick={this.submitImage}
                        >
                            Add Image
                        </Button>
                    </Col>
                </Row>
                <ul className='Image-list'>
                    {ImageItemsList && ImageItemsList.length ? ImageItemsList.map((item) => item && !item.id ? (
                        <ImageItem
                            key={item.id}
                            item={item}
                            dispatch={dispatch}
                        />
                    ) : undefined) : undefined}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    ImageItemsList: state.image.list,
});

export default connect(mapStateToProps)(ImageList);
