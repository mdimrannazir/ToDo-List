import React from 'react'

export const AddTodo = () => {
    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo Description</label>
                    <input type="dexc" class="form-control" id="dect" />
                </div>
                <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
