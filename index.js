function fetchUserData(callback) {
    getUserData(callback)
}

function fetchPosts(userId, callback) {
    getPosts(userId, callback)
}

function fetchComments(postId, callback) {
    getComments(postId, callback)
}

function getUserPostAndComments() {
    fetchUserData((err, user) => {
        if (err) { }
        else {
            fetchPosts(user.id, (err, posts) => {
                if (err) { }
                else {

                    fetchComments(posts[0].id, (err, comments) => {
                        if (err) { }
                        else {
                            console.log(comments)
                        }
                    })
                }
            })
        }
    })
}

getUserPostAndComments()