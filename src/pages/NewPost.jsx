const NewPost = () => {
    return(
        <div>
            <h2>Create New Post</h2>
            <form method="POST">
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" id="" required/>
                </div>

                <div>
                    <label htmlFor="">Body</label>
                    <input type="text" name="body" id="" required/>
                </div>

                <button>Create</button>
            </form>
        </div>
    )
}

export default NewPost