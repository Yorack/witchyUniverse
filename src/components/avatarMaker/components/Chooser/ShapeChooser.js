import React from 'react';
import {withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../../redux/actions';

const style = () => ({
    root: {
        display: 'flex',
        minHeight: 50,
    },
    shapeContainer: {
        display: 'flex',
        padding: '0 25px',
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
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
    const {shapes, classes, actions, key, group, selectedShape} = props;

    const selectShape = (selectedShape) => {
        actions.selectShape(selectedShape, group);
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
                                <div className={`shape-icon`} onClick={() => selectShape(shape)}>
                                    {shape.index}
                                </div>
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
    // todo faut rendre paramétrable avec le ownProps.group
    return {
        selectedShape: state.shape[ownProps.group],
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ShapeChooser));
