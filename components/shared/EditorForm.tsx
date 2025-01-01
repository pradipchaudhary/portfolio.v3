import React from "react";

const EditorForm = () => {
    return (
        <div>
            <h1>Rich Text Editor1</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">content</label>
                </div>
            </form>
        </div>
    );
};

export default EditorForm;
