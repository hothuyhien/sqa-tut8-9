import { useState, useRef } from "react";
import User from "../model/User";
import { Routes, Route, useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate(); 

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isCheck, setIsCheck] = useState(false);

    let [users, setUsers] = useState([]);

    const firstNameRef = useRef(firstName);
    const lastNameRef = useRef(lastName);
    const emailRef = useRef(email);
    const passwordRef = useRef(password);
    const confirmPassRef = useRef(confirmPass);
    const checkRef = useRef(null);

    function getFirstName(FormData) {
        console.log(FormData.target.value);
        setFirstName(FormData.target.value);
    }

    function getLastName(FormData) {
        console.log(FormData.target.value);
        setLastName(FormData.target.value);
    }

    function getEmail(FormData) {
        console.log(FormData.target.value);
        setEmail(FormData.target.value);
    }

    function getPassword(FormData) {
        console.log(FormData.target.value);
        setPassword(FormData.target.value);
    }

    function getConfirmPass(FormData) {
        console.log(FormData.target.value);
        setConfirmPass(FormData.target.value);
    }

    function isAgreed(event) {
        console.log(event.target.checked);
        setIsCheck(event.target.checked);
        return isCheck;
    }

    function checkInfo() {

        let validForm = true;

        if (firstName === '') {
            firstNameRef.current.focus(); 
            firstNameRef.current.placeholder="Please fill"
            firstNameRef.current.className="input-reset ba b--black-20 pa2 mb2 db w-50 bg-washed-red"
            validForm = false;
        } 
        if (lastName === '') {
            lastNameRef.current.focus(); 
            lastNameRef.current.placeholder="Please fill"
            lastNameRef.current.className="input-reset ba b--black-20 pa2 mb2 db w-50 bg-washed-red"
            validForm = false;
        } 
        if (email === '') {
            emailRef.current.focus(); 
            emailRef.current.placeholder="Please fill"
            emailRef.current.className="input-reset ba b--black-20 pa2 mb2 db w-50 bg-washed-red"
            validForm = false;
        } 
        if (password === '') {
            passwordRef.current.focus(); 
            passwordRef.current.placeholder="Please fill"
            passwordRef.current.className="input-reset ba b--black-20 pa2 mb2 db w-50 bg-washed-red"
            validForm = false;
        } 
        if (confirmPass === '') {
            confirmPassRef.current.focus(); 
            confirmPassRef.current.placeholder="Please fill"
            confirmPassRef.current.className="input-reset ba b--black-20 pa2 mb2 db w-50 bg-washed-red"
            validForm = false;
        } 

        if (password !== confirmPass) {
            passwordRef.current.focus(); 
            passwordRef.current.value="";
            setPassword('');
            passwordRef.current.className="input-reset ba b--black-20 pa2 mb2 db w-50 bg-washed-red"
            passwordRef.current.placeholder="password and confirm password not matched"
            confirmPassRef.current.focus(); 
            confirmPassRef.current.value="";
            setConfirmPass('');
            confirmPassRef.current.className="input-reset ba b--black-20 pa2 mb2 db w-50 bg-washed-red"
            confirmPassRef.current.placeholder="password and confirm password not matched"
            validForm = false;
        }
        if (!isCheck) {
            checkRef.current.innerHTML="Agree to terms and conditions (please agree)";
            checkRef.current.className="red"
            validForm = false;
        }

        if (validForm) {
            const newUser = new User(email);
            users.push(newUser);
            console.log(users);
            //<Redirect to={`/register/success`}/>
            //this.props.history.push("/register/success")
            navigate(`/register/success`);
        }
    }

    return(
        <div>
         <h1 className="mh2">REGISTER</h1>

         <form 
            className="mh3"
            onSubmit={e => {
                e.preventDefault();
            }}
            >
            <label htmlFor="firstName">First Name: </label>
            <input 
                name = "firstName"    
                ref = {firstNameRef}            
                className="input-reset ba b--black-20 pa2 mb2 db w-50"
                onChange={getFirstName}
                />
            
            <label htmlFor="lastName">Last Name: </label>
            <input 
                name = "lastName"  
                ref = {lastNameRef}                
                className="input-reset ba b--black-20 pa2 mb2 db w-50"
                onChange={getLastName}
                />

            <label htmlFor="email">Email address: </label>
            <input 
                name = "email"    
                ref = {emailRef}              
                className="input-reset ba b--black-20 pa2 mb2 db w-50"
                onChange={getEmail}
                />

            <label htmlFor="password">Password: </label>
            <input 
                name = "password"  
                ref = {passwordRef}                
                className="input-reset ba b--black-20 pa2 mb2 db w-50"
                onChange={getPassword}
                />

            <label htmlFor="confirmPass">Confirm password: </label>
            <input 
                name = "confirmPass"    
                ref = {confirmPassRef}              
                className="input-reset ba b--black-20 pa2 mb2 db w-50"
                onChange={getConfirmPass}
                />               
            
            <input type="checkbox" name="myCheckbox" onChange={isAgreed} />
            <label htmlFor="myCheckbox" ref={checkRef}>
                Agree to terms and conditions
            </label>
            

            <br/>

            <button className="mv3" type = "submit" onClick={checkInfo}>Register</button>
        </form>
        </div>

        
    );
}