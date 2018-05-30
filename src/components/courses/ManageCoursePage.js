import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';


class ManageCoursePage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
       // debugger;
        return (

            <CourseForm 
                allAuthors={[]}
                course={this.state.course} 
                errors = {this.state.errors}
            
            />
           
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps){
    let course = {id: "",  title: "",  watchHref: "", authorId: "",  length: "",  category: "" };

   // debugger;
    return {
        course: course
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);