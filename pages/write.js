import React from 'react'

const write = () => {
    return (
        <div>
            <h2>글쓰기</h2>
            <form action="https://port-0-fileserver-3a9t2ble82e01s.sel3.cloudtype.app/upload" method='post' encType="multipart/form-data">
                <input type="file" name="fileupload" />
                <input type="submit" value="저장" />
            </form>
        </div>
    )
}

export default write