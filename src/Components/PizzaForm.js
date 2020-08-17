import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';


const PizzaForm = () => {

    const emptyData = {
        name: "",
        size: "",
        toppingOne: false,
        toppingTwo: false,
        toppingThree: false,
        toppingFour: false,
        specialInstructions: "",
    }

        //Creating initial state for forms. 
        const [pizzaForm, setPizzaForm] = useState(emptyData)

        //Creating initial state for errors. Uses String to state errors.
        const [errors, setErrors] = useState(emptyData)
    
        //Creating temporary state to display API POST response on the DOM.
        const [post, setPost] = useState([])
    
        //Creating state for server error. Uses String.
        const [serverError, setServerError] = useState("")
    
        //Creating button state to disable if input does not meet requirements/is not validated
        const [button, setButton] = useState(true);

        const formSchema = yup.object().shape({

            name: yup.string().min([2], "Minimum two characters").required("Name is required"),
            size: yup.string().oneOf(["Small", "Medium", "Large"], "Please pick a size"),
            toppingOne: yup.boolean(),
            toppingTwo: yup.boolean(),
            toppingThree: yup.boolean(),
            toppingFour: yup.boolean(),
            specialInstructions: yup.string(),

        })

        //Creating validations using Yup
        const validateChange = (e) => {

            yup
            .reach(formSchema, e.target.name)
            .validate(e.target.name ? e.target.value : null)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
                
            })
            .catch(err => {
                console.log(err)
                setErrors({
                    ...errors,
                    [e.target.name] : err.errors[0]
                })
            })
        }

        //Creating POST request using Axios when form is submitted using formSubmit function
        const formSubmit = (e) => {
            e.preventDefault();
            console.log("Form submitted!")

            axios
                .post("https://reqres.in/api/users", pizzaForm)
                .then(response => {
                    console.log("POST is successful!", response.data)
                    setPost(response.data)
                    setServerError(null)
                    setPizzaForm(emptyData)
                })
                .catch(err => {
                    setServerError("API POST request failed!")
                })
        }

        //Creating onChange function to hook up state with new input 
        const inputChange = (e) => {
            e.persist()
            console.log("new input here!", e.target.value)
            const newData = {
                ...pizzaForm,
                [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
            }
            validateChange(e)
            setPizzaForm(newData)
        }

        //If everything checks, then button is enabled
        useEffect(() => {
            formSchema.isValid(pizzaForm)
            .then(isValid => {
                setButton(!isValid)
            })
        }, [pizzaForm])

    return (
       <Form onSubmit = {formSubmit} className="form">
       {serverError ? <p>{serverError}</p> : null}

           <FormGroup>
               <Label htmlFor = "name">
                   What's your name?
                   <Input
                        id = "name"
                        type = "text"
                        name = "name"
                        data-cy = "name"
                        placeholder = "Your name goes here"
                        value = {pizzaForm.name}
                        onChange = {inputChange}>
                   </Input>
                   {errors.name.length > 0 ? <p>{errors.name}</p> : null}
               </Label>
           </FormGroup>


           <FormGroup>
               <Label htmlFor = "size">
                   <select
                        id = "size"
                        type = "size"
                        name = "size"
                        data-cy = "size"
                        value = {pizzaForm.size}
                        onChange = {inputChange}>
                            <option>Which size would you like?</option>
                            <option value = "Small">Small</option>
                            <option value = "Medium">Medium</option>
                            <option value = "Large">Large</option>
                   </select>
                   {errors.size.length > 0 ? <p>{errors.size}</p> : null}
               </Label>
           </FormGroup>

           <h5>Pick your toppings:</h5>

           <FormGroup>
               <Label htmlFor = "toppingOne">
                   <Input
                        id = "toppingOne"
                        type = "checkbox"
                        name = "toppingOne"
                        data-cy = "toppingOne"
                        value = {pizzaForm.toppingOne}
                        onChange = {inputChange}>
                   </Input>
                   Pepperoni
            
               </Label>
           </FormGroup>

           <FormGroup>
               <Label htmlFor = "topping">
                   <Input
                        id = "topping"
                        type = "checkbox"
                        name = "toppingTwo"
                        data-cy = "toppingTwo"
                        value = {pizzaForm.toppingTwo}
                        onChange = {inputChange}>
                   </Input>
                   Mushrooms
             
               </Label>
           </FormGroup>

           <FormGroup>
               <Label htmlFor = "toppingThree">
                   <Input
                        id = "toppingThree"
                        type = "checkbox"
                        name = "toppingThree"
                        data-cy = "toppingThree"
                        value = {pizzaForm.toppingThree}
                        onChange = {inputChange}>
                   </Input>
                   Bell Peppers
               </Label>
           </FormGroup>

           <FormGroup>
               <Label htmlFor = "toppingFour">
                   <Input
                        id = "toppingFour"
                        type = "checkbox"
                        name = "toppingFour"
                        data-cy = "toppingFour"
                        value = {pizzaForm.toppingFour}
                        onChange = {inputChange}>
                   </Input>
                   Pineapples
               </Label>
           </FormGroup>

           <h5>Special instructions</h5>

           <FormGroup>
            <Label htmlFor = "specialInstructions">
                <textarea
                    id = "specialInstructions"
                    type = "textarea"
                    name = "specialInstructions"
                    data-cy = "specialInstructions"
                    placeholder = "Any special instructions?"
                    value = {pizzaForm.specialInstructions}
                    onChange = {inputChange}/>
            </Label>
            </FormGroup>

            <Button type = "submit" data-cy = "submit" disabled = {button} >
                Submit Order
            </Button>

            {/* To display POST data on the DOM */}
            <pre>{JSON.stringify(post, null, 2)}</pre> 

       </Form>

    )
    

}

export default PizzaForm;




