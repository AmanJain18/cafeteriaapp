import { useState } from 'react';
import { signinFields } from "../constants/formFields";
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom'
import FormAction from "./FormAction";
// import FormExtra from "./FormExtra";
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Input from "./Input";
import { BiHide, BiShow } from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { loginReducer } from '../app/userSlice';


// const fields = signinFields;
// let fieldsState = {};
// fields.forEach(field => fieldsState[field.id] = '');

export default function SignIn () {
    const navigate = useNavigate();

    // const userData = useSelector(state => state);
    // console.log(userData.user)

    const dispatch = useDispatch();

    let loginSchema = object({
        email: string().email('Invalid email address').required('Required'),
        password: string().required('Required'),
    });

    const [showpassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showpassword);

    // const [loginState, setLoginState] = useState(fieldsState);

    // const handleChange = (e) => {
    //     setLoginState({ ...loginState, [e.target.id]: e.target.value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(loginState)
    //     // authenticateUser();
    // }

    //Handle Login API Integration here
    const authenticateUser = async() => {
        try {
            const response = await axios.post('/login', {
                email: formik.values.email,
                password: formik.values.password
            })
            toast.success(response.data.message)
            if (response.status === 200) {
                dispatch(loginReducer(response.data));
                setTimeout(() => {
                    navigate('/')
                }, 1000);
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            authenticateUser();
            // alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <Input
                key={"email-address"}
                handleChange={formik.handleChange("email")}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                labelText={"Email Address"}
                labelFor={"email-address"}
                id={"email-address"}
                name={"email"}
                type={"email"}
                isRequired={true}
                placeholder={"Email Address"}
                autoComplete={"email"}
            />
            <div className='flex items-center h-[40px] justify-between sm:gap-2'>
                <Input
                    key={"password"}
                    handleChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    labelText={"Password"}
                    labelFor={"password"}
                    id={"password"}
                    name={"password"}
                    type={showpassword ? "text" : "password"}
                    isRequired={true}
                    placeholder={"Password"}
                    autoComplete={"current-password"}
                    customClass=" smm:w-[280px] w-[170px] sm:!w-[400px]"
                />
                <span className='cursor-pointer text-2xl' onClick={handleShowPassword}>{showpassword ? <BiHide /> : <BiShow />}</span>
            </div>

            {/* <FormExtra /> */}
            <FormAction handleSubmit={formik.handleSubmit} text="SignIn" />


        </form>
    )
}