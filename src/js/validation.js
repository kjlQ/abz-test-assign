export const validation = {
    name:{
        required:'required',
        minLength: {
            value: 2,
            message: "This input exceed maxLength."
        }
    },
    phone:{
        required:'required',
        pattern:{
            value:/^(?:\+38)?(0\d{9})$/,
            message: "The number must begin with +380",
        },
        minLength: {
            value: 13,
            message: "The number is incorrect"
        },
        maxLength: {
            value: 13,
            message: "The number is incorrect"
        }
    },
    email:{
        required:'required',
        pattern:{
            value:/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            message:'The email address is incorrect',
        },
    },
    position_id:{
        required:'required',
    },
    photo:{
        required:'required',
    }
}