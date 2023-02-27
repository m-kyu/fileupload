import React from 'react'

const write = () => {
    return (
        <div>
            <h2>글쓰기</h2>
            <form action="http://localhost:4000/upload" method='post' encType="multipart/form-data">
                <input type="file" name="fileupload" />
                <input type="submit" value="저장" />
            </form>
        </div>
    )
}

export default write