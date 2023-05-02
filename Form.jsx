import React from 'react'
import './style.css'

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        textInput: '',
        isFriendly: true,
    })
    /**
     * Challenge: Track the applicant's last formData as well
     */
    console.log(formData)

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData((prevName) => ({
            ...prevName,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    return (
        <form>
            <input
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                name="email"
                type="email"
                placeholder="Email address"
                onChange={handleChange}
                value={formData.email}
            />
            <textarea
                name="textInput"
                type="text"
                placeholder="Enter comments here"
                onChange={handleChange}
                value={formData.textInput}
            />
            <input
                name="isFriendly"
                id="isFriendly"
                type="checkbox"
                onChange={handleChange}
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
        </form>
    )
}
