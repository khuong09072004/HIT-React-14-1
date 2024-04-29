import *as Yup from 'yup';

export const loginValidate = () => (
    Yup.object({
        username: Yup.string()
            .required("Username không được bỏ trống")
            .min(5, "Username phải có ít nhất 5 ký tự")
            // .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/, 'Username phải theo đúng format')
        ,


        password: Yup.string()
            .required("Password không được bỏ trống")
            .min(3, 'Password phải có ít nhất 8 ký tự')
            // .matches(
            //     /^(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            //     'Password phải bao gồm ít nhất một ký tự in hoa, hai ký tự thường, một ký tự số và một ký tự đặc biệt'
            // ),
    })
)