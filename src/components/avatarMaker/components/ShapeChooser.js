import React from 'react';
import {withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../redux/actions';

const style = () => ({
    root: {
        display: 'flex',
    },
    shapeContainer: {
        display: 'flex',
        padding: '0 25px',
        flexGrow: 1,
        justifyContent: 'space-evenly',
    },
});

const selectPreviousShape = (shapes, selectedShape) => {
    const index = _.indexOf(shapes, selectedShape);
    if (index <= 0) {
        return shapes[shapes.length - 1];
    }

    return shapes[index - 1];
};

const selectNextShape = (shapes, selectedShape) => {
    const index = _.indexOf(shapes, selectedShape);
    if (index === shapes.length - 1) {
        return shapes[0];
    }

    return shapes[index + 1];
};

const ShapeChooser = (props) => {
    const {shapes, classes, actions, key, group, stockedShapeIndex} = props;
    const selectedShape = shapes[stockedShapeIndex];

    const selectShape = (selectedShape) => {
        // TODO change to select SHAPE
        actions.selectColor(_.indexOf(shapes, selectedShape), group);
    };

    return (
        <div key={key} className={classes.root}>
            <div className={'selection-icon'} onClick={() => {
                selectShape(selectPreviousShape(shapes, selectedShape));
            }}>
                <Icon>keyboard_arrow_left</Icon>
            </div>
            <div className={'shape-container'}></div>
            <div className={classes.shapeContainer}>
                {
                    _.map(shapes, (shape, index) => {
                        return (
                            <div key={'shape' + index} className={shape === selectedShape ? `shape-selected ` : `shape-not-selected`}>
                                <div className={`shape-icon`} style={{backgroundShape: shape.shapeHex}}
                                     onClick={() => selectShape(shapes[index])}></div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={'selection-icon'} onClick={() => {
                selectShape(selectNextShape(shapes, selectedShape));
            }}>
                <Icon>keyboard_arrow_right</Icon>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        stockedShapeIndex: state.shape[ownProps.group],
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ShapeChooser));
