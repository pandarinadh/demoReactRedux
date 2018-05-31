import React from 'react';
import InputText from '../common/InputText';
import InputSelect from '../common/InputSelect';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) =>{

    return (
        <form>
            <h1> Manage Course </h1>
            <InputText 
                name="title"
                label="Title"
                value ={course.title}
                onChange ={onChange}
                error ={errors.title} />
            <InputSelect 
                name="authorId"
                label="Author"
                value ={course.authorId}
                defaultOption="select author"
                options={allAuthors}
                onChange ={onChange}
                error ={errors.title} />

            <InputText 
                name="category"
                label="Category"
                value ={course.category}
                onChange ={onChange}
                error ={errors.title} />

            <InputText 
                name="length"
                label="Length"
                value ={course.length}
                onChange ={onChange}
                error ={errors.title} />

            <input
                type = "submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />

        </form>
    );

};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
    

};
export default CourseForm;
