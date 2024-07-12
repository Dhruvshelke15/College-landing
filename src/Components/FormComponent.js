import React from 'react';
import './FormComponent.css';

const FormComponent = () => {
    return (
        <div className="form-container">
            <form>
                <h2>Enquire Now!</h2>
                <label>
                    Academic Year:
                    <select>
                        <option value="2024-2026">2024-2026</option>
                    </select>
                </label>
                <label>
                    Your Relationship with the Child:
                    <input type="radio" name="relationship" value="Father" /> Father
                    <input type="radio" name="relationship" value="Mother" /> Mother
                </label>
                <label>
                    Child's First Name:
                    <input type="text" name="childFirstName" />
                </label>
                <label>
                    Child's Last Name:
                    <input type="text" name="childLastName" />
                </label>
                <label>
                    Your First Name:
                    <input type="text" name="yourFirstName" />
                </label>
                <label>
                    Your Last Name:
                    <input type="text" name="yourLastName" />
                </label>
                <label>
                    Course Applying For:
                    <select>
                        <option value="IIT">IIT</option>
                        <option value="NEET">NEET</option>
                    </select>
                </label>
                <label>
                    Mobile Number:
                    <input type="text" name="mobileNumber" />
                </label>
                <label>
                    Email Address:
                    <input type="email" name="email" />
                </label>
                <button type="submit">Enquire Now</button>
            </form>
        </div>
    );
};

export default FormComponent;
