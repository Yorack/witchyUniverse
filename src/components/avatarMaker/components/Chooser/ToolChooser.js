import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../../redux/actions';
import ColorChooser from './ColorChooser';

const style = () => ({
    root: {
        display: 'flex',
        minHeight: 50,
    },
    toolContainer: {
        display: 'flex',
        padding: '0 25px',
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

const selectPreviousTool = (tools, selectedTool) => {
    const index = _.indexOf(tools, selectedTool);
    if (index <= 0) {
        return tools[tools.length - 1];
    }

    return tools[index - 1];
};

const selectNextTool = (tools, selectedTool) => {
    const index = _.indexOf(tools, selectedTool);
    if (index === tools.length - 1) {
        return tools[0];
    }

    return tools[index + 1];
};

const ToolChooser = (props) => {
    const {tools, classes, actions, key, group, selectedTool} = props;

    const selectTool = (selectedTool) => {
        actions.selectTool(selectedTool, group);
    };

    const colorChooser = selectedTool && selectedTool.colors.length > 0 ?
        <ColorChooser colors={selectedTool.colors} group={group}/> : null

    return (
        <Fragment>
            <div key={key} className={classes.root}>
                <div className={'selection-icon'} onClick={() => {
                    selectTool(selectPreviousTool(tools, selectedTool));
                }}>
                    <Icon>keyboard_arrow_left</Icon>
                </div>
                <div className={'color-container'}></div>
                <div className={classes.toolContainer}>
                    {
                        _.map(tools, (tool, index) => {
                            return (
                                <div key={'tool' + index} className={tool === selectedTool ? `tool-selected` : `tool-not-selected`}>
                                    <div className={`tool-icon`} onClick={() => selectTool(tool)}>
                                        {tool.type}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={'selection-icon'} onClick={() => {
                    selectTool(selectNextTool(tools, selectedTool));
                }}>
                    <Icon>keyboard_arrow_right</Icon>
                </div>
            </div>
            {colorChooser}
        </Fragment>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        selectedTool: state.tool[ownProps.group],
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(ToolChooser));
