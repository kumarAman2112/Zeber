export const getComments = async () => {
return[
    {
        "id": 1,
        "userId": 1,
        "body": "This is a comment1",
        "username": "user1",
        "parentId": null,
        "createdAt": "2s",
    },
    {
        "id": 2,
        "userId": 2,
        "body": "This is a comment2",
        "username": "user2",
        "parentId": null,
        "createdAt": "30mins",
    },
    {
        "id": 3,
        "userId": 3,
        "body": "This is a comment3",
        "username": "user3",
        "parentId": null,
        "createdAt": "1hr",
    },
    {
        "id": 4,
        "userId": 4,
        "body": "This is a reply",
        "username": "user4",
        "parentId": 1,
        "createdAt": "2hr",
    }
]
};
export const createComment=async (text,parentId=null)=>{
   
    return{
        "id": Math.random().toString(36).substring(2,9),
        "userId": 5,
        "body": text,
        "username": "user5",
        "parentId":parentId,
        "createdAt":"3s",
    }
}